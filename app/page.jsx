"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import InternshipCard from "@/components/InternshipCard";

export default function Home() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    minStipend: 0,
    wfh: false,
    partTime: false,
  });

  useEffect(() => {
    async function fetchInternships() {
      try {
        const res = await fetch("/api/internships");
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        const ids = data.internship_ids || [];
        const meta = data.internships_meta || {};
        const list = ids.map((id) => meta[id]).filter(Boolean);
        setInternships(list);
      } catch (err) {
        setError("Could not load internships. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchInternships();
  }, []);

  const filterOptions = useMemo(() => {
    const durations = [
      ...new Set(internships.map((i) => i.duration).filter(Boolean)),
    ].sort();
    return { durations };
  }, [internships]);

  const filtered = useMemo(() => {
    return internships.filter((item) => {
      if (
        filters.profile &&
        !item.profile_name?.toLowerCase().includes(filters.profile.toLowerCase()) &&
        !item.title?.toLowerCase().includes(filters.profile.toLowerCase())
      )
        return false;
      if (
        filters.location &&
        !(item.location_names || []).some((l) =>
          l.toLowerCase().includes(filters.location.toLowerCase())
        ) &&
        !item.work_from_home
      )
        return false;
      if (filters.duration && item.duration !== filters.duration) return false;
      if (
        filters.minStipend > 0 &&
        (item.stipend?.salaryValue1 || 0) < filters.minStipend
      )
        return false;
      if (filters.wfh && !item.work_from_home) return false;
      if (filters.partTime && !item.part_time) return false;
      return true;
    });
  }, [internships, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      profile: "",
      location: "",
      duration: "",
      minStipend: 0,
      wfh: false,
      partTime: false,
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />

      {/* Page header bar */}
      <div style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #EEEEEE" }}>
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <h1 className="font-semibold" style={{ color: "#333333", fontSize: "22px" }}>
            {loading
              ? "Loading internships..."
              : `${filtered.length} Total Internships`}
          </h1>
          <p style={{ color: "#888888", fontSize: "13px", marginTop: "2px" }}>
            Latest Internships in India
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">
          {/* Sidebar */}
          <aside className="w-72 flex-shrink-0 sticky top-20">
            <FilterSidebar
              options={filterOptions}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClear={clearFilters}
            />
          </aside>

          {/* Results */}
          <section className="flex-1">
            {loading && (
              <div className="flex flex-col gap-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-5 animate-pulse h-40"
                    style={{ border: "1px solid #E0E0E0" }}
                  />
                ))}
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
                {error}
              </div>
            )}
            {!loading && !error && filtered.length === 0 && (
              <div
                className="bg-white rounded-lg p-10 text-center"
                style={{ color: "#888888", border: "1px solid #E0E0E0" }}
              >
                No internships match your filters. Try clearing some filters.
              </div>
            )}
            {!loading && !error && (
              <div className="flex flex-col gap-4">
                {filtered.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
