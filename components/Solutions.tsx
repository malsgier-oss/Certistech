import type { Lang } from "@/lib/i18n";

export default function Solutions({ lang, t }: { lang: Lang; t: any }) {
  const cards = t["solutions.cards"] as Array<{ title: string; body: string }>;
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{t["solutions.title"]}</h2>
        <div className="h-px flex-1 bg-white/10 hidden md:block" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((c, idx) => (
          <div key={idx} className="card">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-3 text-gray-200 text-sm leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
