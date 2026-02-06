import type { Lang } from "@/lib/i18n";

export default function Compliance({ lang, t }: { lang: Lang; t: any }) {
  const items = t["compliance.items"] as string[];
  return (
    <section id="compliance" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{t["compliance.title"]}</h2>
        <div className="h-px flex-1 bg-white/10 hidden md:block" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="card flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: "rgba(38,200,208,0.9)" }} />
            <p className="text-gray-200 text-sm leading-relaxed">{it}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
