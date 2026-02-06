import type { Lang } from "@/lib/i18n";
type Messages = Record<string, any>;

export async function getMessages(lang: Lang): Promise<Messages> {
  if (lang === "en") {
    const mod = await import("@/messages/en.json");
    return mod.default as Messages;
  }
  const mod = await import("@/messages/ar.json");
  return mod.default as Messages;
}
