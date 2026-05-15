"use client";

import { useState } from "react";

export default function FilterSidebar({ options, filters, onFilterChange, onClear }) {
  const { durations = [], profiles = [], locations = [] } = options;
  const [showMore, setShowMore] = useState(false);
  const [showProfileDD, setShowProfileDD] = useState(false);
  const [showLocationDD, setShowLocationDD] = useState(false);

  const hasActiveFilters =
    filters.keyword ||
    filters.profile ||
    filters.location ||
    filters.duration ||
    filters.minStipend > 0 ||
    filters.wfh ||
    filters.partTime;

  const stipendValue = filters.minStipend || 0;
  const stipendDisplay =
    stipendValue === 0 ? "₹ 0" : `₹ ${stipendValue.toLocaleString("en-IN")}+`;

  const inputStyle = {
    width: "100%",
    border: "1px solid #D1D5DB",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "13px",
    color: "#374151",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #D1D5DB",
    borderRadius: "4px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    zIndex: 999,
    maxHeight: "200px",
    overflowY: "auto",
    marginTop: "2px",
  };

  const profileSuggestions = profiles
    .filter((p) =>
      !filters.profile || p.toLowerCase().includes(filters.profile.toLowerCase())
    )
    .slice(0, 8);

  const locationSuggestions = locations
    .filter((l) =>
      !filters.location || l.toLowerCase().includes(filters.location.toLowerCase())
    )
    .slice(0, 8);

  return (
    <div
      className="bg-white rounded-lg p-5"
      style={{ border: "1px solid #E0E0E0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2
          className="font-semibold text-base flex items-center gap-2"
          style={{ color: "#333333" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="text-xs font-medium hover:underline"
            style={{ color: "#006CB7" }}
          >
            Clear all
          </button>
        )}
      </div>

      {/* Keyword */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1.5" style={{ color: "#333333" }}>
          Keyword
        </label>
        <input
          type="text"
          value={filters.keyword || ""}
          onChange={(e) => onFilterChange("keyword", e.target.value)}
          placeholder="e.g. Design, Mumbai, Infosys"
          style={inputStyle}
          onFocus={(e) => {
            e.target.style.borderColor = "#006CB7";
            e.target.style.boxShadow = "0 0 0 2px rgba(0,108,183,0.15)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#D1D5DB";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Profile with autocomplete dropdown */}
      <div className="mb-5" style={{ position: "relative" }}>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "#333333" }}>
          Profile
        </label>
        <input
          type="text"
          value={filters.profile}
          onChange={(e) => {
            onFilterChange("profile", e.target.value);
            setShowProfileDD(true);
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#006CB7";
            e.target.style.boxShadow = "0 0 0 2px rgba(0,108,183,0.15)";
            setShowProfileDD(true);
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#D1D5DB";
            e.target.style.boxShadow = "none";
            setTimeout(() => setShowProfileDD(false), 150);
          }}
          placeholder="e.g. Marketing"
          style={inputStyle}
        />
        {showProfileDD && profileSuggestions.length > 0 && (
          <div style={dropdownStyle}>
            {profileSuggestions.map((p) => (
              <div
                key={p}
                style={{
                  padding: "8px 12px",
                  fontSize: "13px",
                  color: "#374151",
                  cursor: "pointer",
                }}
                onMouseDown={() => {
                  onFilterChange("profile", p);
                  setShowProfileDD(false);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#EFF6FF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {p}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Location with autocomplete dropdown */}
      <div className="mb-5" style={{ position: "relative" }}>
        <label className="block text-sm font-medium mb-1.5" style={{ color: "#333333" }}>
          Location
        </label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => {
            onFilterChange("location", e.target.value);
            setShowLocationDD(true);
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#006CB7";
            e.target.style.boxShadow = "0 0 0 2px rgba(0,108,183,0.15)";
            setShowLocationDD(true);
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#D1D5DB";
            e.target.style.boxShadow = "none";
            setTimeout(() => setShowLocationDD(false), 150);
          }}
          placeholder="e.g. Delhi"
          style={inputStyle}
        />
        {showLocationDD && locationSuggestions.length > 0 && (
          <div style={dropdownStyle}>
            {locationSuggestions.map((l) => (
              <div
                key={l}
                style={{
                  padding: "8px 12px",
                  fontSize: "13px",
                  color: "#374151",
                  cursor: "pointer",
                }}
                onMouseDown={() => {
                  onFilterChange("location", l);
                  setShowLocationDD(false);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#EFF6FF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {l}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* WFH checkbox */}
      <div className="mb-3">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.wfh || false}
            onChange={(e) => onFilterChange("wfh", e.target.checked)}
            className="w-4 h-4 rounded border-gray-300"
            style={{ accentColor: "#006CB7" }}
          />
          <span className="text-sm" style={{ color: "#333333" }}>
            Work from home
          </span>
        </label>
      </div>

      {/* Part-time checkbox */}
      <div className="mb-5">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.partTime || false}
            onChange={(e) => onFilterChange("partTime", e.target.checked)}
            className="w-4 h-4 rounded border-gray-300"
            style={{ accentColor: "#006CB7" }}
          />
          <span className="text-sm" style={{ color: "#333333" }}>
            Part-time
          </span>
        </label>
      </div>

      {/* Stipend range */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label
            className="block text-sm font-medium"
            style={{ color: "#333333" }}
          >
            Min. monthly stipend (₹)
          </label>
          <span
            className="text-sm font-medium"
            style={{ color: "#006CB7" }}
          >
            {stipendDisplay}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={10000}
          step={500}
          value={stipendValue}
          onChange={(e) =>
            onFilterChange("minStipend", Number(e.target.value))
          }
          className="w-full cursor-pointer"
          style={{ accentColor: "#006CB7", height: "4px" }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>₹ 0</span>
          <span>₹ 10,000+</span>
        </div>
      </div>

      {/* View more: Duration */}
      <div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm font-medium flex items-center gap-1 hover:underline mb-3"
          style={{ color: "#006CB7" }}
        >
          {showMore ? "View less filters" : "View more filters"}
          <svg
            className={`w-4 h-4 transition-transform ${showMore ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showMore && (
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1.5"
              style={{ color: "#333333" }}
            >
              Max. duration (months)
            </label>
            <select
              value={filters.duration}
              onChange={(e) => onFilterChange("duration", e.target.value)}
              style={{
                ...inputStyle,
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                paddingRight: "30px",
              }}
            >
              <option value="">Any Duration</option>
              {durations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
