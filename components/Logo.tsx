type LogoProps = {
  className?: string;
  height?: number;
};

export default function Logo({ className = "", height = 36 }: LogoProps) {
  const width = Math.round((220 / 64) * height);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CertisTech"
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="#12181A"
        stroke="rgba(234,242,246,0.18)"
        strokeWidth="2"
      />
      <path
        d="M18 34c6-10 22-10 28 0"
        stroke="#26C8D0"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 40c6-10 22-10 28 0"
        stroke="#BAAC7F"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <text
        x="78"
        y="40"
        fill="#EAF2F6"
        fontFamily="inherit"
        fontSize="22"
        fontWeight="700"
      >
        CertisTech
      </text>
    </svg>
  );
}
