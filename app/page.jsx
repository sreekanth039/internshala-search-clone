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
    const profiles = [
      ...new Set(internships.map((i) => i.profile_name).filter(Boolean)),
    ].sort();
    const locations = [
      ...new Set(
        internships.flatMap((i) => i.location_names || []).filter(Boolean)
      ),
    ].sort();
    const durations = [
      ...new Set(internships.map((i) => i.duration).filter(Boolean)),
    ].sort();
    return { profiles, locations, durations };
  }, [internships]);

  const filtered = useMemo(() => {
    return internships.filter((item) => {
      if (filters.profile && item.profile_name !== filters.profile)
        return false;
      if (
        filters.location &&
        !(item.location_names || []).includes(filters.location) &&
        !item.work_from_home
      )
        return false;
      if (filters.duration && item.duration !== filters.duration) return false;
      if (
        filters.minStipend > 0 &&
        (item.stipend?.salaryValue1 || 0) < filters.minStipend
      )
        return false;
      return true;
    });
  }, [internships, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ profile: "", location: "", duration: "", minStipend: 0 });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          {loading
            ? "Loading internships..."
            : `${filtered.length} Total Internships`}
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Latest Internships in India
        </p>

        <div className="flex gap-6">
          <aside className="w-72 flex-shrink-0">
            <FilterSidebar
              options={filterOptions}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClear={clearFilters}
            />
          </aside>

          <section className="flex-1">
            {loading && (
              <div className="flex flex-col gap-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-5 animate-pulse h-40"
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
              <div className="bg-white rounded-lg p-10 text-center text-gray-500">
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
