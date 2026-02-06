import type { Lang } from "@/lib/i18n";

export default function Standards({ lang, t }: { lang: Lang; t: any }) {
  return (
    <section id="standards" className="max-w-7xl mx-auto px-6 py-16">
      <div className="card">
        <h2 className="text-2xl md:text-3xl font-semibold">{t["standards.title"]}</h2>
        <p className="mt-4 text-gray-200 leading-relaxed">{t["standards.body"]}</p>
        <p className="mt-4 text-gray-300 text-sm">{t["standards.list"]}</p>
      </div>
    </section>
  );
}
