import { getTranslations } from 'next-intl/server';
import HeroVideo from '../component/video';
import CounterSection from '../component/shared/counter-section';
import CEOSection from '../component/CeoSection';
import OverviewSection from '../component/overview';
import InquirySection from '../component/inquiry';
import ServicesBanner from '../component/services';

export const dynamic = "force-dynamic";

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index'
  });
  return (
    <main className="flex flex-col items-center bg-[#0a1219] min-h-[calc(100vh-80px)] w-full">
      <HeroVideo locale={locale} />
      <CounterSection locale={locale} />
      <div className="hidden">{t('title')}</div>
      <CEOSection locale={locale} />
      
      <OverviewSection locale={locale} />
      <InquirySection locale={locale} />
      <ServicesBanner></ServicesBanner>
    </main>
  );
}