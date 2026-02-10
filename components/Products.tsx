import type { Lang } from "@/lib/i18n";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Products({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  return (
    <Section id="audita" title={t["products.title"] as string}>
      <Card className="p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <h3 className="text-h2 font-semibold text-text">
              {t["products.audita.title"] as string}
            </h3>
            <p className="mt-3 text-body text-text leading-relaxed">
              {t["products.audita.body"] as string}
            </p>
            <p className="mt-4 text-body-sm text-text-muted">
              {t["products.audita.features"] as string}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Button href="#contact" variant="primary" className="min-h-[48px] w-full sm:w-auto">
              {lang === "ar" ? "اطلب عرضًا" : "Request a Demo"}
            </Button>
            <Button href="#solutions" variant="secondary" className="min-h-[48px] w-full sm:w-auto">
              {lang === "ar" ? "الحلول" : "Solutions"}
            </Button>
          </div>
        </div>
      </Card>
    </Section>
  );
}
