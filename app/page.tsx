import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Certistech — قريبًا",
  description: "الموقع قيد التحديث. سنعود قريبًا.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ComingSoon />;
}
