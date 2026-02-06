export type Lang = "ar" | "en";
export const LANGS: Lang[] = ["ar", "en"];
export function isLang(v: string): v is Lang { return v === "ar" || v === "en"; }
