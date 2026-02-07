import { isLang } from "@/lib/i18n";
import AuditaDemoFrame from "@/components/audita-demo/AuditaDemoFrame";
import "@/components/audita-demo/audita-theme.css";

export default async function AuditaDemoPage({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "ar";

  return (
    <main className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#e5e5e5" }}>
      <AuditaDemoFrame />
    </main>
  );
}
