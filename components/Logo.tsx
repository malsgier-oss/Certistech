type LogoProps = {
  className?: string;
  height?: number;
  /** "light" for dark backgrounds (default), "dark" for light backgrounds */
  variant?: "light" | "dark";
};

const NAVY = "#1F3142";
const TEAL = "#00C2D8";
const LIGHT = "#EAF2F6";

export default function Logo({
  className = "",
  height = 36,
  variant = "light",
}: LogoProps) {
  const isLight = variant === "light";
  const navy = isLight ? LIGHT : NAVY;
  const teal = TEAL;

  const width = Math.round((200 / 48) * height);

  return (
    <span
      className={`inline-block shrink-0 overflow-visible [direction:ltr] ${className}`}
      dir="ltr"
      style={{ unicodeBidi: "isolate", minWidth: `${width}px` }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CertisTech"
        className="overflow-visible"
      >
      {/* Hexagon */}
      <polygon
        points="24,4 44,14 44,34 24,44 4,34 4,14"
        fill="none"
        stroke={navy}
        strokeWidth="2"
      />
      {/* Checkmark with circuit nodes */}
      <path
        d="M14 18 L22 26 L34 14"
        stroke={teal}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="18" r="2" fill={teal} />
      <circle cx="22" cy="26" r="2" fill={teal} />
      <circle cx="34" cy="14" r="2" fill={teal} />
      {/* CERTISTECH: CERTIS in navy, TECH in teal */}
      <text
        x="52"
        y="32"
        textAnchor="start"
        fontFamily="inherit"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        <tspan fill={navy}>CERTIS</tspan>
        <tspan fill={teal}>TECH</tspan>
      </text>
    </svg>
    </span>
  );
}
