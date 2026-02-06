import type { Lang } from "@/lib/i18n";
import {
  FileSearch,
  FolderArchive,
  LayoutDashboard,
  GitBranch,
  Code2,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const SOLUTION_ICONS = [
  FileSearch,
  FolderArchive,
  LayoutDashboard,
  GitBranch,
  Code2,
];

export default function Solutions({ t }: { lang: Lang; t: Record<string, unknown> }) {
  const cards = t["solutions.cards"] as Array<{ title: string; body: string }>;

  return (
    <Section id="solutions" title={t["solutions.title"] as string}>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((c, idx) => {
          const Icon = SOLUTION_ICONS[idx] ?? FileSearch;
          return (
            <Card
              key={idx}
              icon={<Icon className="w-5 h-5 text-accent" />}
              title={c.title}
              elevated
            >
              <p className="mt-3 text-body-sm text-text-muted leading-relaxed">
                {c.body}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
