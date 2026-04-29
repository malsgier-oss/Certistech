import { isLang } from "@/lib/i18n";
import AuditaDemoFrame from "@/components/audita-demo/AuditaDemoFrame";
import "@/components/audita-demo/audita-theme.css";

export default async function AuditaDemoPage({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "ar";

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <section className="w-full max-w-6xl rounded-3xl p-1 surface-glass border border-[rgba(180,191,204,0.2)] shadow-panel">
        <div className="p-4 md:p-6">
          <div className="mb-4">
            <p className="status-pill inline-flex">AUDITA product demo</p>
            <h1 className="mt-2 text-2xl font-semibold text-text">
              {lang === "ar" ? "عرض تجريبي تفاعلي" : "Interactive demo experience"}
            </h1>
          </div>
          <AuditaDemoFrame />
        </div>
      </section>
    </main>
  );
}
