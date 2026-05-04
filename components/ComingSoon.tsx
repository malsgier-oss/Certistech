function ComingSoonIllustration() {
  return (
    <div className="relative mx-auto mt-2 h-44 w-44 sm:h-52 sm:w-52" aria-hidden>
      <svg
        className="coming-soon-orbit absolute inset-0 h-full w-full text-accent/25"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1" strokeDasharray="6 10" />
      </svg>
      <div className="coming-soon-glow pointer-events-none absolute inset-[18%] rounded-full bg-accent/20 blur-2xl" />
      <svg
        className="coming-soon-float relative z-[1] mx-auto block h-full w-full max-w-[9rem] text-accent drop-shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_35%,transparent))]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 8 L88 28 V52 C88 72 72 88 50 94 C28 88 12 72 12 52 V28 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="color-mix(in srgb, var(--surface-elevated) 88%, transparent)"
        />
        <path
          d="M36 48 L46 58 L64 40"
          stroke="var(--gold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="48" r="2.5" fill="var(--gold)" />
        <circle cx="46" cy="58" r="2.5" fill="var(--gold)" />
        <circle cx="64" cy="40" r="2.5" fill="var(--gold)" />
      </svg>
    </div>
  );
}

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex max-w-md flex-col items-center">
        <img
          src="/logo/certistech.svg"
          alt="Certistech"
          width={200}
          height={48}
          className="h-10 w-auto brightness-0 invert-[0.92] hue-rotate-[165deg] opacity-90 sm:h-12"
        />
        <ComingSoonIllustration />
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-text sm:text-3xl">قريبًا</h1>
        <p className="mt-2 text-sm text-text-muted sm:text-base" lang="en">
          We are preparing something new. Check back soon.
        </p>
      </div>
    </main>
  );
}
