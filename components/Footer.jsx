export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "#999999" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        { /* 4-column link grid */ }
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          { /* About */ }
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              About Internshala
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["About us", "We are hiring", "Tutorials & guides", "Blog", "Contact us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      color: "#999999",
                      fontSize: "12px",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          { /* For Students */ }
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              For Students
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Internships", "Fresher jobs", "Online courses", "Trainings", "Resume maker"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      color: "#999999",
                      fontSize: "12px",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          { /* For Employers */ }
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              For Employers
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Post an internship", "Post a job", "Employer login", "Talent search"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      color: "#999999",
                      fontSize: "12px",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          { /* Get the App */ }
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Get the Internshala App
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid #444444",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "20px" }}></pan>
                <div>
                  <p style={{ fontSize: "9px", color: "#999999", margin: 0 }}>Download on the</p>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF", margin: 0 }}>App Store</p>
                </div>
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid #444444",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "20px" }}>ðŸ“Æ</pan>
                <div>
                  <p style={{ fontSize: "9px", color: "#999999", margin: 0 }}>Get it on</p>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF", margin: 0 }}>Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        { /* Bottom bar */ }
        <div
          style={{
            borderTop: "1px solid #333333",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          { /* Logo - matches Header style */ }
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginBottom: "4px" }}
            >
              { /* Paper plane icon - same as Header */ }
              <path
                d="M22 2L2 12l7 3m13 -13l-7 18m0 0l-7-3m7 3v6l-3-3"
                stroke="#008BD1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em" }}>
              <span style={{ color: "#FFFFFF" }}>INTERN</span>
              <span style={{ color: "#008BD1" }}>SHALA4</span>
            </span>
          </div>

          <p style={{ fontSize: "11px", color: "#666666", textAlign: "center" }}>
            {new Date().getFullYear()} Internshala - A product of Scholiverse Educare Pvt Ltd
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            {["Privacy Policy", "Terms & Conditions"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "#666666",
                  fontSize: "11px",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
