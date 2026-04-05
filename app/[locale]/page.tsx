import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Link } from '@/navigation';
import HeroVideo from '../component/video';

// Force dynamic to ensure params are fresh
export const dynamic = "force-dynamic";

export default async function HomePage(props: { 
  params: Promise<{ locale: string }> 
}) {
  // 1. Await params safely
  const { locale } = await props.params;

  // 2. Fetch translations
  const t = await getTranslations({ 
    locale, 
    namespace: 'Index' 
  });

  return (
    <main className="flex flex-col items-center bg-[#0a1219] min-h-[calc(100vh-80px)] w-full">
      <HeroVideo locale={locale} />
      
      {/* Test translation rendering to ensure 't' is working */}
      <div className="hidden">{t('title')}</div>
    </main>
  );
}