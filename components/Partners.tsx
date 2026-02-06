import type { Lang } from "@/lib/i18n";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Partners({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  return (
    <Section id="partners" title={t["partners.title"] as string}>
      <Card>
        <p className="text-body text-text leading-relaxed">
          {t["partners.body"] as string}
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="h-14 rounded-xl border border-[rgba(234,242,246,0.12)] bg-surface/50 flex items-center justify-center"
            />
          ))}
        </div>
      </Card>
    </Section>
  );
}
