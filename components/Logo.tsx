type LogoProps = {
  className?: string;
  height?: number;
  /** "light" for dark backgrounds (default), "dark" for light backgrounds */
  variant?: "light" | "dark";
};

const NAVY = "#1B2A45";
const TEAL = "#3EC1D3";
const LIGHT = "#EDF2F8";

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
        viewBox="0 0 240 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CertisTech"
        className="overflow-visible"
      >
        <g transform="translate(3,3)">
          <path
            d="M22 1.5H41L52 10V39L41 47.5H22L11 39V10L22 1.5Z"
            fill="none"
            stroke={navy}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M11 10L22 18L33 10M22 18V47.5"
            stroke={navy}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M33 10L52 10M33 18L52 18M33 26L52 26" stroke={teal} strokeWidth="2" strokeLinejoin="round" />
          <circle cx="37" cy="34" r="2.5" fill={teal} />
          <circle cx="23" cy="10" r="2.5" fill={teal} />
        </g>

        <text
          x="66"
          y="37"
          textAnchor="start"
          fontFamily="inherit"
          fontSize="17"
          fontWeight="700"
          letterSpacing="0.06em"
        >
          <tspan fill={navy}>CERTIS</tspan>
          <tspan fill={teal}>TECH</tspan>
        </text>
      </svg>
    </span>
  );
}
