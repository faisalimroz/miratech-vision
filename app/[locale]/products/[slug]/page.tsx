import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { NextIntlClientProvider } from 'next-intl';
import { ChevronRight, Shield, Zap, Target, Activity } from 'lucide-react';

export default async function ProductDetailsPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale, namespace: `Products.${slug}` });

  if (!messages.Products || !(messages.Products as any)[slug]) {
    notFound();
  }

  const productData = (messages.Products as any)[slug];

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <main className="bg-[#060a0f] min-h-screen text-white font-mono selection:bg-[#f68b1f]">
        
        {/* --- HERO SECTION: MISSION OVERVIEW --- */}
        <section className="relative w-full h-[80vh] flex items-end pb-16 overflow-hidden border-b border-white/5">
          <Image 
            src={`/drone.webp`} 
            alt={t('title')}
            fill
            className="object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a0f] via-transparent to-transparent" />
          
          {/* Tactical Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
            <div className="flex items-center gap-3 text-[#f68b1f] mb-8 text-[10px] tracking-[0.5em] uppercase">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>System.Initialize({slug})</span>
              <ChevronRight className="w-3 h-3 text-white/20" />
              <span className="text-white/40">{t('category')}</span>
            </div>
            
            <h1 className="text-7xl lg:text-[10rem] font-black uppercase tracking-tighter mb-4 leading-none">
              {t('title')}
            </h1>
            
            <p className="max-w-3xl text-lg lg:text-xl text-white/50 font-light leading-relaxed border-l border-[#f68b1f] pl-6 ml-2 mt-8">
              {t('description')}
            </p>
          </div>
        </section>

        {/* --- TECHNICAL MATRIX (HUD BAR) --- */}
        <section className="bg-[#f68b1f] py-1 text-black overflow-hidden whitespace-nowrap">
           <div className="flex animate-marquee font-black uppercase text-[10px] tracking-[1em]">
              Operational Excellence • Mirae Tech Vision • Tactical Defense • 
              Operational Excellence • Mirae Tech Vision • Tactical Defense • 
           </div>
        </section>

        <section className="bg-white/[0.02] border-b border-white/5 py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {Object.entries(productData.specs || {}).map(([key, value]) => (
                <div key={key} className="relative group">
                  <div className="absolute -left-4 top-0 h-full w-[1px] bg-white/10 group-hover:bg-[#f68b1f] transition-colors" />
                  <p className="text-[10px] uppercase text-white/30 font-bold tracking-widest mb-2">
                    {productData.spec_labels?.[key] || key}
                  </p>
                  <p className="text-2xl font-black tracking-tight text-white uppercase italic">
                    {value as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURE MATRIX --- */}
        <section className="py-32 max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <FeatureBlock 
              icon={<Shield />} 
              title={t('features.f1_title')} 
              desc={t('features.f1_desc')} 
            />
            <FeatureBlock 
              icon={<Target />} 
              title={t('features.f2_title')} 
              desc={t('features.f2_desc')} 
            />
            <FeatureBlock 
              icon={<Zap />} 
              title={t('features.f3_title')} 
              desc={t('features.f3_desc')} 
            />
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="py-40 border-t border-white/5 bg-black relative flex justify-center items-center">
           <div className="text-center relative z-10">
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-12">
                Secure Your <br/> Airspace
              </h2>
              <button className="px-16 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-[#f68b1f] hover:text-white transition-all duration-500 rounded-none shadow-[10px_10px_0px_0px_rgba(246,139,31,0.3)]">
                Deploy Specialist
              </button>
           </div>
           {/* Decorative BG Text */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-[20vw] font-black text-white/[0.02] uppercase leading-none">MIRAE</span>
           </div>
        </section>
      </main>
    </NextIntlClientProvider>
  );
}

function FeatureBlock({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-12 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-500 group relative">
      <div className="text-[#f68b1f] mb-8 w-12 h-12 border border-[#f68b1f]/20 flex items-center justify-center group-hover:bg-[#f68b1f] group-hover:text-black transition-all">
        {icon}
      </div>
      <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">{title}</h3>
      <p className="text-white/40 font-light leading-relaxed text-sm">
        {desc}
      </p>
      {/* Corner Bracket */}
      <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-[#f68b1f] transition-colors" />
    </div>
  );
}