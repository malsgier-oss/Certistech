import type { CSSProperties } from "react";

type ParticleConfig = {
  orbitR: string;
  dur: string;
  delay: string;
  entranceDelay: string;
  shape: "circle" | "hex" | "triangle" | "diamond" | "ring";
  accent: "cyan" | "gold" | "violet";
  reverse?: boolean;
};

const PARTICLES: ParticleConfig[] = [
  { orbitR: "clamp(88px, 26vmin, 168px)", dur: "32s", delay: "0s", entranceDelay: "0.12s", shape: "circle", accent: "cyan" },
  { orbitR: "clamp(104px, 30vmin, 188px)", dur: "41s", delay: "-8s", entranceDelay: "0.18s", shape: "hex", accent: "gold" },
  { orbitR: "clamp(72px, 22vmin, 140px)", dur: "24s", delay: "-3s", entranceDelay: "0.22s", shape: "triangle", accent: "cyan", reverse: true },
  { orbitR: "clamp(120px, 34vmin, 210px)", dur: "48s", delay: "-14s", entranceDelay: "0.28s", shape: "diamond", accent: "violet" },
  { orbitR: "clamp(96px, 28vmin, 176px)", dur: "36s", delay: "-20s", entranceDelay: "0.32s", shape: "ring", accent: "gold" },
  { orbitR: "clamp(132px, 36vmin, 220px)", dur: "52s", delay: "-5s", entranceDelay: "0.38s", shape: "circle", accent: "violet" },
  { orbitR: "clamp(80px, 24vmin, 152px)", dur: "28s", delay: "-11s", entranceDelay: "0.42s", shape: "hex", accent: "cyan" },
  { orbitR: "clamp(112px, 31vmin, 196px)", dur: "44s", delay: "-22s", entranceDelay: "0.48s", shape: "triangle", accent: "gold" },
  { orbitR: "clamp(64px, 20vmin, 128px)", dur: "21s", delay: "-7s", entranceDelay: "0.52s", shape: "diamond", accent: "cyan" },
  { orbitR: "clamp(144px, 38vmin, 230px)", dur: "56s", delay: "-30s", entranceDelay: "0.58s", shape: "ring", accent: "violet" },
  { orbitR: "clamp(92px, 27vmin, 172px)", dur: "34s", delay: "-16s", entranceDelay: "0.62s", shape: "circle", accent: "gold" },
  { orbitR: "clamp(108px, 29vmin, 184px)", dur: "39s", delay: "-9s", entranceDelay: "0.68s", shape: "hex", accent: "violet" },
  { orbitR: "clamp(76px, 23vmin, 148px)", dur: "26s", delay: "-4s", entranceDelay: "0.72s", shape: "triangle", accent: "cyan" },
  { orbitR: "clamp(124px, 33vmin, 204px)", dur: "46s", delay: "-25s", entranceDelay: "0.78s", shape: "diamond", accent: "gold" },
  { orbitR: "clamp(100px, 28.5vmin, 180px)", dur: "37s", delay: "-18s", entranceDelay: "0.84s", shape: "circle", accent: "cyan" },
  { orbitR: "clamp(116px, 32vmin, 200px)", dur: "43s", delay: "-12s", entranceDelay: "0.9s", shape: "ring", accent: "violet" },
];

const accentFill: Record<ParticleConfig["accent"], string> = {
  cyan: "var(--accent)",
  gold: "var(--gold)",
  violet: "rgb(167 139 250)",
};

function ParticleShape({ shape, accent }: Pick<ParticleConfig, "shape" | "accent">) {
  const fill = accentFill[accent];
  const common = { fill, opacity: 0.85 };

  switch (shape) {
    case "circle":
      return (
        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 12 12" aria-hidden>
          <circle cx="6" cy="6" r="3.5" {...common} />
        </svg>
      );
    case "hex":
      return (
        <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 14 14" aria-hidden>
          <path d="M7 1.5 L12 4.25 V9.75 L7 12.5 L2 9.75 V4.25 Z" fill="none" stroke={fill} strokeWidth="1.4" opacity={0.95} />
        </svg>
      );
    case "triangle":
      return (
        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 12 12" aria-hidden>
          <path d="M6 1.5 L10.5 10 H1.5 Z" {...common} />
        </svg>
      );
    case "diamond":
      return (
        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 12 12" aria-hidden>
          <path d="M6 1 L11 6 L6 11 L1 6 Z" fill="none" stroke={fill} strokeWidth="1.2" opacity={0.95} />
        </svg>
      );
    case "ring":
      return (
        <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 12 12" aria-hidden>
          <circle cx="6" cy="6" r="4" fill="none" stroke={fill} strokeWidth="1.35" opacity={0.9} />
          <circle cx="6" cy="6" r="1.8" fill={fill} opacity={0.5} />
        </svg>
      );
    default:
      return null;
  }
}

function ParticleField() {
  return (
    <>
      {PARTICLES.map((p, i) => {
        const style = {
          "--orbit-r": p.orbitR,
          "--orbit-dur": p.dur,
          "--orbit-delay": p.delay,
          "--entrance-delay": p.entranceDelay,
        } as CSSProperties;
        return (
          <div
            key={i}
            className={`coming-soon-particle-orbit entrance-particle ${p.reverse ? "coming-soon-particle-orbit--reverse" : ""}`}
            style={style}
          >
            <span className="coming-soon-particle-shape">
              <ParticleShape shape={p.shape} accent={p.accent} />
            </span>
          </div>
        );
      })}
    </>
  );
}

function ComingSoonIllustration() {
  return (
    <div className="relative z-[3] mx-auto mt-2 h-44 w-44 sm:h-52 sm:w-52" aria-hidden>
      <svg
        className="coming-soon-orbit absolute inset-0 h-full w-full text-accent/30"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle
          className="coming-soon-orbit-draw"
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
      </svg>
      <svg
        className="coming-soon-orbit-reverse absolute inset-0 h-full w-full scale-[0.72] text-gold/25"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 14" />
      </svg>
      <div className="coming-soon-glow pointer-events-none absolute inset-[18%] rounded-full bg-accent/25 blur-2xl" />
      <svg
        className="coming-soon-float relative z-[1] mx-auto block h-full w-full max-w-[9rem] text-accent drop-shadow-[0_0_32px_color-mix(in_srgb,var(--accent)_42%,transparent))]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="42%" stopColor="var(--gold)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--surface-elevated)" stopOpacity="0.92" />
          </linearGradient>
        </defs>
        <path
          d="M50 8 L88 28 V52 C88 72 72 88 50 94 C28 88 12 72 12 52 V28 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="url(#shieldSheen)"
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
    <main className="coming-soon-stage group relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div className="coming-soon-bg-mesh" aria-hidden />
      <div className="coming-soon-grid-pattern" aria-hidden />
      <div className="coming-soon-noise" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center">
        <div className="relative flex min-h-[min(72vh,560px)] w-full flex-col items-center justify-center">
          <div className="coming-soon-particle-hub" aria-hidden>
            <ParticleField />
          </div>

          <img
            src="/logo/certistech.svg"
            alt="Certistech"
            width={200}
            height={48}
            className="entrance-logo relative z-10 h-10 w-auto brightness-0 invert-[0.92] hue-rotate-[165deg] opacity-90 drop-shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_25%,transparent))] sm:h-12"
          />

          <div className="perspective-container relative z-10 mt-6 w-full max-w-[13rem] sm:max-w-[15rem]">
            <div className="entrance-shield-wrap relative mx-auto">
              <div className="shield-3d-wrap relative">
                <div className="coming-soon-shadow-blob" aria-hidden />
                <div className="coming-soon-holo-gradient rounded-full" aria-hidden />
                <div className="coming-soon-holo rounded-full" aria-hidden />
                <ComingSoonIllustration />
              </div>
            </div>
          </div>

          <h1 className="entrance-title relative z-10 mt-8 text-3xl font-bold tracking-tight text-text drop-shadow-[0_0_40px_color-mix(in_srgb,var(--accent)_18%,transparent))] sm:text-4xl">
            قريبًا
          </h1>
          <p className="entrance-sub relative z-10 mt-3 max-w-sm text-sm text-text-muted sm:text-base" lang="en">
            We are preparing something new. Check back soon.
          </p>
        </div>
      </div>
    </main>
  );
}
