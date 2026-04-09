import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroVideo from '../component/video';
import CounterSection from '../component/shared/counter-section';
import CEOSection from '../component/CeoSection';
import OverviewSection from '../component/overview';
import InquirySection from '../component/inquiry';
import ServicesBanner from '../component/services';
import SoftwareSection from '../component/products/product-hero';
import CustomerCenter from '../component/customerCenter';

// 1. Define the locales you support
const locales = ['en', 'ko'];

// 2. REQUIRED FOR STATIC EXPORT: Tell Next.js to build /en and /ko
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params;

  // 3. REQUIRED FOR NEXT-INTL STATIC RENDERING
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'Index'
  });

  const sections = [
    { id: "hero", component: <HeroVideo locale={locale} /> },
    { id: "stats", component: <CounterSection locale={locale} /> },
    { id: "products", component: <SoftwareSection /> },
    { id: "ceo", component: <CEOSection locale={locale} /> },
    { id: "overview", component: <OverviewSection locale={locale} /> },
    { id: "support", component: <InquirySection locale={locale} /> },
    { id: "contact-us", component: <CustomerCenter /> },
    { id: "services", component: <ServicesBanner  /> },
  ]

  return (
    <main className="flex flex-col items-center bg-[#0a1219] min-h-[calc(100vh-80px)] w-full">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="w-full scroll-mt-[76px]"
        >
          {section.component}
        </section>
      ))}
    </main>
  );
}