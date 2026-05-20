function formatStipend(stipend) {
  if (!stipend) return "Unpaid";
  return stipend.salary || "Unpaid";
}

export default function InternshipCard({ internship }) {
  const {
    title,
    company_name,
    company_logo,
    work_from_home,
    location_names,
    duration,
    stipend,
    posted_by_label,
    posted_by_label_type,
    url,
    part_time,
    is_ppo,
    description,
    skill_requirements,
  } = internship;

  const logoUrl = company_logo ? `/api/logo?file=${company_logo}` : null;
  const locationText = work_from_home
    ? "Work from Home"
    : location_names?.join(", ") || "Multiple Locations";
  const isEarlyApplicant = posted_by_label_type === "success";
  const internshipUrl = url
    ? `https://internshala.com/internship/detail/${url}`
    : "#";

  // Build skills array safely
  const skills = Array.isArray(skill_requirements)
    ? skill_requirements.slice(0, 5)
    : [];

  // Truncate description to ~2 lines (~160 chars)
  const descText =
    typeof description === "string"
      ? description.replace(/<[^>]+>/g, "").trim().slice(0, 180) +
        (description.length > 180 ? "…" : "")
      : null;

  return (
    <a
      href={internshipUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg"
      style={{
        border: "1px solid #E0E0E0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
        e.currentTarget.style.borderColor = "#A0D7F0";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
        e.currentTarget.style.borderColor = "#E0E0E0";
      }}
    >
      <div className="p-4 sm:p-5">
        {/* Top row: title + logo */}
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {is_ppo && (
                <span
                  className="font-medium rounded"
                  style={{
                    fontSize: "11px",
                    padding: "2px 8px",
                    backgroundColor: "#FFF8E1",
                    color: "#856404",
                  }}
                >
                  Job offer
                </span>
              )}
              {part_time && (
                <span
                  className="font-medium rounded"
                  style={{
                    fontSize: "11px",
                    padding: "2px 8px",
                    backgroundColor: "#F5F5F5",
                    color: "#555555",
                    border: "1px solid #E0E0E0",
                  }}
                >
                  Part time
                </span>
              )}
              {work_from_home && (
                <span
                  className="font-medium rounded"
                  style={{
                    fontSize: "11px",
                    padding: "2px 8px",
                    backgroundColor: "#EBF5FB",
                    color: "#006CB7",
                    border: "1px solid #BCdff7",
                  }}
                >
                  Work from Home
                </span>
              )}
            </div>

            <h3
              className="font-semibold leading-snug hover:underline"
              style={{ color: "#008BD1", fontSize: "16px" }}
            >
              {title}
            </h3>
            <p
              style={{
                color: "#555555",
                fontSize: "13px",
                marginTop: "2px",
                fontWeight: "500",
              }}
            >
              {company_name}
            </p>
          </div>

          {/* Company logo */}
          <div
            className="flex-shrink-0 flex items-center justify-center overflow-hidden"
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid #E0E0E0",
              backgroundColor: "#F9F9F9",
              borderRadius: "6px",
            }}
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={company_name}
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<span style="font-size:16px;font-weight:700;color:#CCCCCC">${
                    company_name?.[0]?.toUpperCase() || "?"
                  }</span>`;
                }}
              />
            ) : (
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#CCCCCC",
                }}
              >
                {company_name?.[0]?.toUpperCase() || "?"}
              </span>
            )}
          </div>
        </div>

        {/* Detail row: location, duration, stipend */}
        <div
          className="mt-3 flex flex-wrap"
          style={{ gap: "8px 20px", fontSize: "13px", color: "#555555" }}
        >
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: "#999" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{locationText}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: "#999" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: "#999" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span style={{ fontWeight: "500", color: "#333333" }}>
              {formatStipend(stipend)}
            </span>
          </div>
        </div>

        {/* Description snippet */}
        {descText && (
          <p
            style={{
              fontSize: "12px",
              color: "#666666",
              marginTop: "10px",
              lineHeight: "1.5",
            }}
          >
            {descText}
          </p>
        )}

        {/* Skills chips */}
        {skills.length > 0 && (
          <div
            className="flex flex-wrap gap-1.5"
            style={{ marginTop: "10px" }}
          >
            {skills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  backgroundColor: "#F0F0F0",
                  color: "#555555",
                  borderRadius: "3px",
                  border: "1px solid #E0E0E0",
                }}
              >
                {typeof skill === "string" ? skill : skill?.name || skill?.skill_name || ""}
              </span>
            ))}
          </div>
        )}

        {/* Footer row */}
        <div
          className="mt-3 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
          style={{ borderTop: "1px solid #F0F0F0" }}
        >
          <span style={{ fontSize: "12px", color: "#999999" }}>
            {posted_by_label}
          </span>
          {isEarlyApplicant && (
            <span
              className="flex items-center gap-1"
              style={{
                fontSize: "12px",
                color: "#FF8C00",
                fontWeight: "500",
              }}
            >
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              Be an early applicant
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
