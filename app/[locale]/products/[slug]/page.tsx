import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { NextIntlClientProvider } from 'next-intl';
import { ChevronRight, Shield, Zap, Target } from 'lucide-react';

export default async function ProductDetailsPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  const messages = await getMessages({ locale });
  
  // 1. Setup translation for this specific product
  const t = await getTranslations({ locale, namespace: `Products.${slug}` });

  // 2. Safety check: If the product slug doesn't exist in your JSON, show 404
  if (!messages.Products || !(messages.Products as any)[slug]) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages}>
      <main className="bg-[#0a1219] min-h-screen text-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full h-[70vh] flex items-end pb-20">
          <Image 
            // src={`/products/${slug}-banner.jpg`} // Ensure you have these images
            src={`/drone.webp`} // Ensure you have these images
            alt={t('title')}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1219] via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
            <div className="flex items-center gap-2 text-[#f68b1f] mb-6 font-mono text-xs uppercase tracking-[0.3em]">
              <span>Products</span>
              <ChevronRight className="w-3 h-3" />
              <span>{t('category')}</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-4">
              {t('title')}
            </h1>
            <p className="max-w-2xl text-xl text-white/70 font-light leading-relaxed">
              {t('description')}
            </p>
          </div>
        </section>

        {/* --- SPECIFICATIONS GRID --- */}
        <section className="py-24 border-t border-white/5 bg-[#0d1721]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Feature 1 */}
            <div className="p-8 border border-white/5 rounded-2xl bg-white/5 hover:border-[#f68b1f]/30 transition-colors group">
              <Shield className="w-10 h-10 text-[#f68b1f] mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold uppercase mb-4 italic">Defense Protocol</h3>
              <p className="text-white/50 font-light leading-relaxed">
                Integrated with military-grade encryption and autonomous response logic for high-security zones.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-white/5 rounded-2xl bg-white/5 hover:border-[#f68b1f]/30 transition-colors group">
              <Target className="w-10 h-10 text-[#f68b1f] mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold uppercase mb-4 italic">Precision Tracking</h3>
              <p className="text-white/50 font-light leading-relaxed">
                Utilizes advanced RF signature analysis to distinguish between birds, commercial drones, and military threats.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-white/5 rounded-2xl bg-white/5 hover:border-[#f68b1f]/30 transition-colors group">
              <Zap className="w-10 h-10 text-[#f68b1f] mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold uppercase mb-4 italic">Rapid Deployment</h3>
              <p className="text-white/50 font-light leading-relaxed">
                Zero-configuration setup allowing operators to establish a secure perimeter in less than 5 minutes.
              </p>
            </div>

          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-20 text-center border-t border-white/5">
          <h2 className="text-3xl font-bold uppercase mb-8">Ready to secure your airspace?</h2>
          <button className="px-12 py-5 bg-[#f68b1f] text-white font-bold uppercase text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Contact Specialist
          </button>
        </section>

      </main>
    </NextIntlClientProvider>
  );
}