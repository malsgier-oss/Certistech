import type { Lang } from "@/lib/i18n";
import { ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Compliance({ lang, t }: { lang: Lang; t: Record<string, unknown> }) {
  const items = t["compliance.items"] as string[];

  return (
    <Section id="compliance" title={t["compliance.title"] as string}>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <Card key={idx} elevated>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-body-sm text-text leading-relaxed">{it}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
