"use client";

import { useState } from "react";

const DURATIONS = ["1 Month", "2 Months", "3 Months", "4 Months", "5 Months", "6 Months"];

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ borderBottom: "1px solid #EEEEEE", padding: "16px 0" }}>
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span style={{ fontWeight: 600, fontSize: "14px", color: "#333333" }}>
          {title}
        </span>
        <span style={{ fontSize: "18px", color: "#666666", lineHeight: 1 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <div style={{ marginTop: "12px" }}>{children}</div>}
    </div>
  );
}

function AutocompleteInput({ placeholder, value, onChange, suggestions }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = suggestions.filter(
    (s) => s.toLowerCase().includes(value.toLowerCase()) && s !== value
  );

  function handleSelect(item) {
    onChange(item);
    setShowDropdown(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        style={{
          width: "100%",
          padding: "8px 12px",
          border: "1px solid #DDDDDD",
          borderRadius: "4px",
          fontSize: "13px",
          color: "#333333",
          boxSizing: "border-box",
          outline: "none",
        }}
      />
      {showDropdown && filtered.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #DDDDDD",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 100,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filtered.slice(0, 8).map((item, i) => (
            <div
              key={i}
              onMouseDown={() => handleSelect(item)}
              style={{
                padding: "9px 12px",
                fontSize: "13px",
                color: "#333333",
                cursor: "pointer",
                borderBottom: "1px solid #F5F5F5",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#F0F7FF")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterSidebar({ options, filters, onFilterChange, onClear }) {
  const { profiles = [], locations = [], durations = DURATIONS } = options || {};

  const hasActiveFilters =
    filters.keyword ||
    filters.profile ||
    filters.location ||
    filters.duration ||
    filters.minStipend > 0 ||
    filters.wfh ||
    filters.partTime;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        border: "1px solid #E0E0E0",
        padding: "16px",
      }}
    >
      <div className="flex justify-between items-center" style={{ marginBottom: "8px" }}>
        <h2 style={{ fontWeight: 700, fontSize: "15px", color: "#333333" }}>Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            style={{
              fontSize: "12px",
              color: "#008BD1",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Clear all
          </button>
        )}
      </div>

      <FilterSection title="Profile">
        <AutocompleteInput
          placeholder="e.g. Web Development"
          value={filters.profile}
          onChange={(val) => onFilterChange("profile", val)}
          suggestions={profiles}
        />
      </FilterSection>

      <FilterSection title="Location">
        <AutocompleteInput
          placeholder="e.g. Delhi, Mumbai"
          value={filters.location}
          onChange={(val) => onFilterChange("location", val)}
          suggestions={locations}
        />
        <label
          className="flex items-center gap-2"
          style={{ marginTop: "10px", cursor: "pointer", fontSize: "13px", color: "#444" }}
        >
          <input
            type="checkbox"
            checked={filters.wfh}
            onChange={(e) => onFilterChange("wfh", e.target.checked)}
            style={{ accentColor: "#008BD1", width: "15px", height: "15px" }}
          />
          Work From Home
        </label>
        <label
          className="flex items-center gap-2"
          style={{ marginTop: "8px", cursor: "pointer", fontSize: "13px", color: "#444" }}
        >
          <input
            type="checkbox"
            checked={filters.partTime}
            onChange={(e) => onFilterChange("partTime", e.target.checked)}
            style={{ accentColor: "#008BD1", width: "15px", height: "15px" }}
          />
          Part-time
        </label>
      </FilterSection>

      <FilterSection title="Duration">
        {durations.map((d) => (
          <label
            key={d}
            className="flex items-center gap-2"
            style={{ marginBottom: "8px", cursor: "pointer", fontSize: "13px", color: "#444" }}
          >
            <input
              type="radio"
              name="duration"
              checked={filters.duration === d}
              onChange={() =>
                onFilterChange("duration", filters.duration === d ? "" : d)
              }
              style={{ accentColor: "#008BD1", width: "15px", height: "15px" }}
            />
            {d}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Stipend">
        <div style={{ marginBottom: "6px" }}>
          <span style={{ fontSize: "13px", color: "#555555" }}>
            Minimum monthly stipend
          </span>
          <span
            style={{
              display: "block",
              fontSize: "18px",
              fontWeight: 700,
              color: "#008BD1",
              marginTop: "4px",
            }}
          >
            ₹ {filters.minStipend.toLocaleString("en-IN")}
            {filters.minStipend >= 10000 ? "+" : ""}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={10000}
          step={1000}
          value={filters.minStipend}
          onChange={(e) => onFilterChange("minStipend", Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "#008BD1",
            cursor: "pointer",
            marginTop: "6px",
          }}
        />
        <div
          className="flex justify-between"
          style={{ fontSize: "11px", color: "#999999", marginTop: "4px" }}
        >
          <span>₹ 0</span>
          <span>₹ 10,000+</span>
        </div>
      </FilterSection>

      <FilterSection title="Keyword Search">
        <input
          type="text"
          placeholder="e.g. React, Marketing..."
          value={filters.keyword}
          onChange={(e) => onFilterChange("keyword", e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #DDDDDD",
            borderRadius: "4px",
            fontSize: "13px",
            color: "#333333",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
        <p style={{ fontSize: "11px", color: "#AAAAAA", marginTop: "6px" }}>
          Search by role, company, or skill
        </p>
      </FilterSection>
    </div>
  );
}
