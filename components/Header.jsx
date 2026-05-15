"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E8E8E8",
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "72px",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-4 h-full flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "700",
              fontSize: "28px",
              color: "#333333",
              letterSpacing: "-1px",
            }}
          >
            intern
          </span>
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "700",
              fontSize: "28px",
              color: "#FFFFFF",
              backgroundColor: "#FF8C00",
              borderRadius: "4px",
              padding: "0 4px",
              letterSpacing: "-1px",
            }}
          >
            shala
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {["Internships", "Jobs", "Courses", "Projects"].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                color: "#333333",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#008BD1")}
              onMouseLeave={(e) => (e.target.style.color = "#333333")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            style={{
              color: "#008BD1",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              border: "1px solid #008BD1",
              borderRadius: "4px",
              padding: "7px 16px",
            }}
          >
            Login
          </a>
          <a
            href="#"
            style={{
              backgroundColor: "#008BD1",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              borderRadius: "4px",
              padding: "8px 16px",
            }}
          >
            Register
          </a>
          <a
            href="#"
            style={{
              backgroundColor: "#FF8C00",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: "600",
              textDecoration: "none",
              borderRadius: "4px",
              padding: "8px 14px",
            }}
          >
            For employers
          </a>
        </div>
      </div>
    </header>
  );
}
