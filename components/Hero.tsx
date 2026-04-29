import type { Lang } from "@/lib/i18n";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

export default function Hero({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  const localeClass = lang === "ar" ? "text-right" : "text-left";

  return (
    <section
      className={`relative min-h-[85vh] sm:min-h-[90vh] md:min-h-[92vh] overflow-hidden ${localeClass}`}
    >
      <div className="absolute inset-0 bg-hero-radial">
        <div
          className="absolute start-[-22vw] top-[8vh] h-80 w-80 rounded-full ambient-blur opacity-75 animate-soft-glow"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="absolute end-[-18vw] bottom-[10vh] h-64 w-64 rounded-full ambient-blur opacity-60 animate-soft-glow"
          style={{ animationDelay: "1.6s" }}
        />
        <div className="absolute inset-0 bg-surface-glass/55" />
      </div>

      <div className="relative z-10 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-10 lg:gap-14 items-center">
            <div className="relative">
              <span className="status-pill mb-4 inline-flex">{lang === "ar" ? "حلول ذكية مبنية للربحية" : "Built for operational clarity"}</span>
              <h1 className="text-display sm:text-[3.5rem] text-text font-semibold tracking-tight">
                {t["hero.headline"] as string}
              </h1>
              <p className="mt-4 text-body-lg text-text-subtle max-w-2xl">
                {t["hero.tagline"] as string}
              </p>
              <p className="mt-8 text-body-lg text-text leading-relaxed max-w-2xl">
                {t["hero.subline"] as string}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button href="#contact" variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto justify-center">
                  {t["hero.cta.primary"] as string}
                </Button>
                <Button href={`/${lang}/audita-demo`} variant="secondary" size="lg" className="min-h-[48px] w-full sm:w-auto justify-center">
                  {t["hero.cta.secondary"] as string}
                </Button>
              </div>
              <p className="mt-8 text-body-sm text-text-muted/85">
                {t["hero.footer"] as string}
              </p>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute -inset-6 rounded-3xl border border-[rgba(180,191,204,0.22)] bg-surface-glass"></div>
              <div className="relative rounded-3xl border border-[rgba(180,191,204,0.22)] p-6 bg-surface-alt/85 shadow-panel">
                <div className="rounded-2xl border border-white/10 p-5 bg-surface text-body-sm">
                  <p className="text-text-muted text-xs tracking-[0.18em] uppercase">Enterprise workflow</p>
                  <p className="mt-2 text-text text-lg font-semibold">
                    {lang === "ar"
                      ? "ترجمة البيانات إلى قرارات"
                      : "Transform data into audit-ready decisions"}
                  </p>
                  <p className="mt-2 text-text-subtle">
                    {lang === "ar"
                      ? "لوحة تحكم مركزة ومتكيفة لكل عميل."
                      : "A focused command center designed for every client team."}
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-text-muted text-xs">Automation</p>
                    <p className="text-xl text-accent font-semibold mt-1">+48%</p>
                  </div>
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-text-muted text-xs">Ops uptime</p>
                    <p className="text-xl text-accent font-semibold mt-1">99.7%</p>
                  </div>
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-text-muted text-xs">Report speed</p>
                    <p className="text-xl text-accent font-semibold mt-1">x4</p>
                  </div>
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-text-muted text-xs">Risk visibility</p>
                    <p className="text-xl text-accent font-semibold mt-1">{lang === "ar" ? "ممتاز" : "High"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
