const LOGO_BASE_URL = "https://internshala-uploads.internshala.com/logo/";

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
    start_date,
    posted_by_label,
    posted_by_label_type,
    url,
    part_time,
    is_ppo,
  } = internship;

  const logoUrl = company_logo ? `${LOGO_BASE_URL}${company_logo}` : null;

  const locationText = work_from_home
    ? "Work from Home"
    : location_names?.join(", ") || "Multiple Locations";

  const isEarlyApplicant = posted_by_label_type === "success";

  const internshipUrl = url
    ? `https://internshala.com/internship/detail/${url}`
    : "#";

  return (
    <a
      href={internshipUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-[#006CB7]/20"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {is_ppo && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">
                  With job offer
                </span>
              )}
              {part_time && (
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-medium">
                  Part time
                </span>
              )}
            </div>
            <h3 className="text-base font-semibold text-gray-900 hover:text-[#006CB7] leading-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">{company_name}</p>
          </div>

          <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-md border border-gray-100 bg-gray-50 overflow-hidden">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={company_name}
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<span class="text-xl font-bold text-gray-300">${company_name?.[0]?.toUpperCase() || "?"}</span>`;
                }}
              />
            ) : (
              <span className="text-xl font-bold text-gray-300">
                {company_name?.[0]?.toUpperCase() || "?"}
              </span>
            )}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-gray-400 flex-shrink-0"
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
              className="w-4 h-4 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{start_date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-gray-400 flex-shrink-0"
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
              className="w-4 h-4 text-gray-400 flex-shrink-0"
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
            <span className="font-medium text-gray-800">
              {formatStipend(stipend)}
            </span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400">{posted_by_label}</span>
          {isEarlyApplicant && (
            <span className="text-xs text-yellow-600 font-medium flex items-center gap-1">
              <span>¡</span> Be an eyarly applicant
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
