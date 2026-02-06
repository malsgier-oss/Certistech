import { isLang } from "@/lib/i18n";
import { getMessages } from "@/components/messages";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Standards from "@/components/Standards";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import HowWeWork from "@/components/HowWeWork";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "ar";
  const t = await getMessages(lang);

  return (
    <main>
      <Hero lang={lang} t={t} />
      <About lang={lang} t={t} />
      <Standards lang={lang} t={t} />
      <Solutions lang={lang} t={t} />
      <Products lang={lang} t={t} />
      <HowWeWork lang={lang} t={t} />
      <Compliance lang={lang} t={t} />
      <Contact lang={lang} t={t} />
    </main>
  );
}
