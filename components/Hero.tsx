import type { Lang } from "@/lib/i18n";

export default function Hero({ lang, t }: { lang: Lang; t: any }) {
  const isAr = lang === "ar";

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/hero-bg.jpg')",
          transform: "scale(1.02)",
          filter: "contrast(1.08) saturate(1.05)"
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 70% at 20% 45%, rgba(38,200,208,0.35) 0%, rgba(38,200,208,0.00) 60%)," +
            "radial-gradient(70% 70% at 8% 35%, rgba(186,172,127,0.28) 0%, rgba(186,172,127,0.00) 62%)," +
            "radial-gradient(120% 90% at 50% 50%, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.35) 100%)," +
            "rgba(0,0,0,0.55)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl border" style={{ borderColor: "rgba(234,242,246,0.16)", background: "rgba(18,24,26,0.55)" }} />
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{t["hero.headline"]}</h1>
              <p className="mt-2 text-lg text-[color:theme(colors.accent)]">{t["hero.tagline"]}</p>
            </div>
          </div>

          <p className="mt-8 text-base md:text-lg text-gray-200 max-w-xl leading-relaxed">
            {t["hero.subline"]}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">{t["hero.cta.primary"]}</a>
            <a href="#audita" className="btn-secondary">{t["hero.cta.secondary"]}</a>
          </div>

          <p className="mt-10 text-xs text-gray-300/80">
            {isAr ? "مخصصة للإدارات الرقابية والحوكمة وإدارة المخاطر." : "Built for compliance, governance, and risk teams."}
          </p>
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
