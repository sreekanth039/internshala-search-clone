export default function BrandWordmark({ dark = false, className = "" }) {
  const light = dark ? "#FFFFFF" : "#00A5EC";
  const darkText = dark ? "#8E8E8E" : "#666666";

  return (
    <svg
      viewBox="0 0 160 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Internshala"
      className={className}
    >
      <polygon points="118,3 142,0 130,13" fill="#00A5EC" />
      <path d="M119 4 L128 11 L107 8 Z" fill="#007FC2" />
      <text x="0" y="34" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="30" letterSpacing="1.2">
        <tspan fill={light}>INTERN</tspan>
        <tspan fill={darkText}>SHALA</tspan>
      </text>
    </svg>
  );
}
