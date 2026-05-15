"use client";

const STIPEND_OPTIONS = [
  { label: "Any", value: 0 },
  { label: "Rs. 2,000+", value: 2000 },
  { label: "Rs. 5,000+", value: 5000 },
  { label: "Rs. 10,000+", value: 10000 },
  { label: "Rs. 20,000+", value: 20000 },
];

export default function FilterSidebar({
  options,
  filters,
  onFilterChange,
  onClear,
}) {
  const { profiles = [], locations = [], durations = [] } = options;

  const hasActiveFilters =
    filters.profile ||
    filters.location ||
    filters.duration ||
    filters.minStipend > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800 text-base">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="text-xs text-[#006CB7] hover:underline font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile
        </label>
        <select
          value={filters.profile}
          onChange={(e) => onFilterChange("profile", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006CB7]/30 focus:border-[#006CB7]"
        >
          <option value="">All Profiles</option>
          {profiles.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select
          value={filters.location}
          onChange={(e) => onFilterChange("location", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006CB7]/30 focus:border-[#006CB7]"
        >
          <option value="">All Locations</option>
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration
        </label>
        <select
          value={filters.duration}
          onChange={(e) => onFilterChange("duration", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006CB7]/30 focus:border-[#006CB7]"
        >
          <option value="">Any Duration</option>
          {durations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Minimum Stipend
        </label>
        <div className="flex flex-wrap gap-2">
          {STIPEND_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onFilterChange("minStipend", opt.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filters.minStipend === opt.value
                  ? "bg-[#006CB7] text-white border-[#006CB7]"
                  : "bg-white text-gray-600 border-gray-300 hover:border-[#006CB7] hover:text-[#006CB7]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
