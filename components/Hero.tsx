import type { Lang } from "@/lib/i18n";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

export default function Hero({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  const isAr = lang === "ar";

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-[92vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.02]"
        style={{
          backgroundImage: "url('/img/hero-bg.jpg')",
          filter: "contrast(1.08) saturate(1.05)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 70% at 20% 45%, rgba(0,194,216,0.35) 0%, rgba(0,194,216,0.00) 60%)," +
            "radial-gradient(70% 70% at 8% 35%, rgba(186,172,127,0.28) 0%, rgba(186,172,127,0.00) 62%)," +
            "radial-gradient(120% 90% at 50% 50%, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.35) 100%)," +
            "rgba(0,0,0,0.55)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-16 sm:pb-20 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="rounded-2xl border border-[rgba(234,242,246,0.18)] bg-surface p-2 shrink-0">
              <Logo height={40} className="sm:hidden" />
              <Logo height={48} className="hidden sm:block" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text">
                {t["hero.headline"] as string}
              </h1>
              <p className="mt-2 text-body-lg text-accent font-medium">
                {t["hero.tagline"] as string}
              </p>
            </div>
          </div>

          <p className="mt-8 text-body-lg text-text-muted max-w-xl leading-relaxed">
            {t["hero.subline"] as string}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button href="#contact" variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto justify-center">
              {t["hero.cta.primary"] as string}
            </Button>
            <Button href="#audita" variant="secondary" size="lg" className="min-h-[48px] w-full sm:w-auto justify-center">
              {t["hero.cta.secondary"] as string}
            </Button>
          </div>

          <p className="mt-10 text-body-sm text-text-muted/80">
            {isAr
              ? "مخصصة للإدارات الرقابية والحوكمة وإدارة المخاطر."
              : "Built for compliance, governance, and risk teams."}
          </p>
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
