"use client";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E8E8E8",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-3"
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src="/image.png"
            alt="Internshala"
            className="w-[130px] h-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-1 lg:gap-2 min-w-0">
          <a href="#" className="text-sm font-medium text-[#008BD1] px-2 lg:px-3 pt-1 pb-0.5 border-b-2 border-[#008BD1] flex items-center gap-1">
            Internships
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
          <a href="#" className="text-sm font-medium text-[#333333] px-2 lg:px-3 py-1 flex items-center gap-1.5">
            Courses
            <span className="bg-[#FF8C00] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">OFFER</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
          <a href="#" className="text-sm font-medium text-[#333333] px-2 lg:px-3 py-1 flex items-center gap-1">
            Jobs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
          <div className="w-px h-5 bg-[#E0E0E0] mx-1" />
          <a href="#" className="text-sm font-medium text-[#333333] px-2 lg:px-3 py-1.5 flex items-center gap-1 border border-[#DDDDDD] rounded">
            Login / Register
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>

        <a href="#" className="md:hidden text-sm font-medium text-[#333333] px-3 py-1.5 border border-[#DDDDDD] rounded">
          Login
        </a>
      </div>
    </header>
  );
}
