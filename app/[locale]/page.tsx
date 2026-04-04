import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Link } from '@/navigation';



export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return (
    <main className="flex flex-col items-center bg-[#0a1219] min-h-[calc(100vh-80px)]">
      <section className="w-full py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center space-y-8">
            
            <h1 className="text-5xl font-bold tracking-[0.1em] uppercase sm:text-7xl text-white max-w-4xl leading-tight">
              {t('title')}
            </h1>
            
            <p className="mx-auto max-w-[800px] text-white/60 text-lg md:text-xl font-light tracking-wide">
              {t('description')}
            </p>
            
            <Button asChild className="bg-[#f68b1f] hover:bg-[#f68b1f]/90 text-[#0a1219] rounded-full px-10 h-14 text-[15px] font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(246,139,31,0.2)]">
              <Link href="/documents">
                {t('getStarted')}
              </Link>
            </Button>

          </div>
        </div>
      </section>
    </main>
  );
}