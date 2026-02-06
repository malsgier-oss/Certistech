import type { Lang } from "@/lib/i18n";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

type Step = { title: string; body: string };

export default function HowWeWork({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  const steps = t["howWeWork.steps"] as Step[];
  const methodology = t["howWeWork.methodology"] as string;

  return (
    <Section id="how-we-work" title={t["howWeWork.title"] as string}>
      <div className="space-y-6">
        {methodology && (
          <Card>
            <p className="text-body text-text leading-relaxed">{methodology}</p>
          </Card>
        )}

        {steps && steps.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <Card key={idx} elevated className="relative">
                <span className="absolute -top-2 -start-2 w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-body-sm font-semibold text-accent">
                  {idx + 1}
                </span>
                <h3 className="text-h2 font-semibold text-text mt-2">{step.title}</h3>
                <p className="mt-2 text-body-sm text-text-muted leading-relaxed">
                  {step.body}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
