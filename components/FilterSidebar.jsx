"use client";

import { useState } from "react";

export default function FilterSidebar({ options, filters, onFilterChange, onClear }) {
  const { durations = [] } = options;
  const [showMore, setShowMore] = useState(false);

  const hasActiveFilters =
    filters.profile ||
    filters.location ||
    filters.duration ||
    filters.minStipend > 0 ||
    filters.wfh ||
    filters.partTime;

  const stipendValue = filters.minStipend || 0;
  const stipendDisplay =
    stipendValue === 0 ? "₹ 0" : `₹ ${stipendValue.toLocaleString("en-IN")}+`;

  return (
    <div
      className="bg-white rounded-lg p-5"
      style={{ border: "1px solid #E0E0E0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-base flex items-center gap-2" style={{ color: "#333333" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
          Filters
        </h2>
        {hasActiveFilters && (
          <button onClick={onClear} className="text-xs font-medium hover:underline" style={{ color: "#006CB7" }}>
            Clear all
          </button>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium mb-1.5" style={{ color: "#333333" }}>Profile</label>
        <input type="text" value={filters.profile} onChange={(e) => onFilterChange("profile", e.target.value)} placeholder="e.g. Marketing" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006CB7]/30 focus:border-[#006CB7]" />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium mb-1.5" style={{ color: "#333333" }}>Location</label>
        <input type="text" value={filters.location} onChange={(e) => onFilterChange("location", e.target.value)} placeholder="e.g. Delhi" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006CB7]/30 focus:border-[#006CB7]" />
      </div>

      <div className="mb-3">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input type="checkbox" checked={filters.wfh || false} onChange={(e) => onFilterChange("wfh", e.target.checked)} className="w-4 h-4 rounded border-gray-300" style={{ accentColor: "#006CB7" }} />
          <span className="text-sm" style={{ color: "#333333" }}>Work from home</span>
        </label>
      </div>

      <div className="mb-5">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input type="checkbox" checked={filters.partTime || false} onChange={(e) => onFilterChange("partTime", e.target.checked)} className="w-4 h-4 rounded border-gray-300" style={{ accentColor: "#006CB7" }} />
          <span className="text-sm" style={{ color: "#333333" }}>Part-time</span>
        </label>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium" style={{ color: "#333333" }}>Desired minimum monthly stipend (₹)</label>
          <span className="text-sm font-medium" style={{ color: "#006CB7" }}>{stipendDisplay}</span>
        </div>
        <input type="range" min={0} max={10000} step={500} value={stipendValue} onChange={(e) => onFilterChange("minStipend", Number(e.target.value))} className="w-full h-1.5 rounded-full appearance-none cursor-pointer" style={{ accentColor: "#006CB7" }} />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>₹ 0</span>
          <span>₹ 10,000+</span>
        </div>
      </div>

      <div>
        <button onClick={() => setShowMore(!showMore)} className="text-sm font-medium flex items-center gap-1 hover:underline mb-3" style={{ color: "#006CB7" }}>
          {showMore ? "View less filters" : "View more filters"}
          <svg className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showMore && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5" style={{ color: "#333333" }}>Max. duration (months)</label>
            <select value={filters.duration} onChange={(e) => onFilterChange("duration", e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006CB7]/30 focus:border-[#006CB7]">
              <option value="">Any Duration</option>
              {durations.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
