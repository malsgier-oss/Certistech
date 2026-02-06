import type { Lang } from "@/lib/i18n";

export default function Products({ lang, t }: { lang: Lang; t: any }) {
  return (
    <section id="audita" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{t["products.title"]}</h2>
        <div className="h-px flex-1 bg-white/10 hidden md:block" />
      </div>

      <div className="mt-8 card">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <h3 className="text-xl font-semibold">{t["products.audita.title"]}</h3>
            <p className="mt-3 text-gray-200 leading-relaxed">{t["products.audita.body"]}</p>
            <p className="mt-4 text-sm text-gray-300">{t["products.audita.features"]}</p>
          </div>

          <div className="flex gap-3">
            <a href="#contact" className="btn-primary">{lang === "ar" ? "اطلب عرضًا" : "Request a Demo"}</a>
            <a href="#solutions" className="btn-secondary">{lang === "ar" ? "الحلول" : "Solutions"}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
