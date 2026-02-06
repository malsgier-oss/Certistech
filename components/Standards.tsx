import type { Lang } from "@/lib/i18n";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Standards({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  return (
    <Section id="standards" title={t["standards.title"] as string}>
      <Card>
        <p className="text-body text-text leading-relaxed">
          {t["standards.body"] as string}
        </p>
        <p className="mt-4 text-body-sm text-text-muted">
          {t["standards.list"] as string}
        </p>
      </Card>
    </Section>
  );
}
