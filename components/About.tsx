import type { Lang } from "@/lib/i18n";
import { Target, Eye } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function About({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  const values = t["about.values"] as string[];

  return (
    <Section id="about" title={t["about.title"] as string}>
      <div className="space-y-6">
        <Card>
          <p className="text-body text-text leading-relaxed">
            {t["about.body"] as string}
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card elevated>
            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="text-h2 font-semibold text-text mb-2">
                  {lang === "ar" ? "الرؤية" : "Vision"}
                </h3>
                <p className="text-body-sm text-text-muted leading-relaxed">
                  {t["about.vision"] as string}
                </p>
              </div>
            </div>
          </Card>
          <Card elevated>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="text-h2 font-semibold text-text mb-2">
                  {lang === "ar" ? "المهمة" : "Mission"}
                </h3>
                <p className="text-body-sm text-text-muted leading-relaxed">
                  {t["about.mission"] as string}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {values && values.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {values.map((value, idx) => (
              <span
                key={idx}
                className="rounded-xl border border-[rgba(234,242,246,0.18)] bg-surface px-4 py-2 text-body-sm font-medium text-text"
              >
                {value}
              </span>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
