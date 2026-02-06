import type { Lang } from "@/lib/i18n";

export default function Partners({ lang, t }: { lang: Lang; t: any }) {
  return (
    <section id="partners" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{t["partners.title"]}</h2>
        <div className="h-px flex-1 bg-white/10 hidden md:block" />
      </div>

      <div className="mt-8 card">
        <p className="text-gray-200 leading-relaxed">{t["partners.body"]}</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="h-14 rounded-xl border" style={{ borderColor: "rgba(234,242,246,0.12)", background: "rgba(18,24,26,0.35)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
