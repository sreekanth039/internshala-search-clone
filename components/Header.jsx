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
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
          {/* Paper plane icon SVG */}
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="6" fill="#008BD1"/>
            <path d="M8 20L32 8L26 32L20 22L8 20Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M20 22L32 8" stroke="#008BD1" strokeWidth="1.5"/>
          </svg>
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "700",
              fontSize: "22px",
              color: "#333333",
              letterSpacing: "-0.5px",
            }}
          >
            INTERN
            <span style={{ color: "#008BD1" }}>SHALA</span>
          </span>
        </a>

        {/* Nav Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {/* Internships - active */}
          <a
            href="#"
            style={{
              color: "#008BD1",
              fontSize: "14px",
              fontWeight: "500",
              textDecoration: "none",
              padding: "4px 12px 2px",
              borderBottom: "2px solid #008BD1",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Internships
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>

          {/* Courses with OFFER badge */}
          <a
            href="#"
            style={{
              color: "#333333",
              fontSize: "14px",
              fontWeight: "500",
              textDecoration: "none",
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Courses
            <span
              style={{
                backgroundColor: "#FF8C00",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: "700",
                padding: "1px 5px",
                borderRadius: "3px",
                letterSpacing: "0.3px",
              }}
            >
              OFFER
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>

          {/* Jobs */}
          <a
            href="#"
            style={{
              color: "#333333",
              fontSize: "14px",
              fontWeight: "500",
              textDecoration: "none",
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Jobs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </nav>

        {/* Login / Register */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a
            href="#"
            style={{
              color: "#333333",
              fontSize: "14px",
              fontWeight: "500",
              textDecoration: "none",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              border: "1px solid #DDDDDD",
              borderRadius: "4px",
            }}
          >
            Login / Register
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
