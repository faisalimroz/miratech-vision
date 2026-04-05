import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Link } from '@/navigation';
import HeroVideo from '../component/video';
import { AnimatedCounter } from '../component/animated-counter';
import CounterSection from '../component/shared/counter-section';

// Force dynamic to ensure params are fresh
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

      {/* Test translation rendering to ensure 't' is working */}
      <div className="hidden">{t('title')}</div>
    </main>
  );
}