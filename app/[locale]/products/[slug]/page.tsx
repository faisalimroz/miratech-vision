import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Image from 'next/image';
import { Cpu } from 'lucide-react';
import ProductImageGallery from '@/app/component/products/product-card';
export const dynamic = 'force-static';
export async function generateStaticParams() {
  const locales = ['en', 'ko'];
  const slugs = [
    'detection-identification-equipment',
    'neutralization-equipment',
    'spoofing-equipment'
  ];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}
export default async function ProductDetailsPage({ 
  params 
}: { 
  params: Promise<{ locale: string, slug: string }> 
}) {
  const { locale, slug } = await params;
  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale, namespace: 'Products' });
  const productTitle = t(`${slug}.title`);
  const listKey = `${slug}.component_list`;
  const rawData = t.has(listKey) ? t.raw(listKey) : [];
  const componentList = Array.isArray(rawData) ? rawData : [];
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <main className="bg-[#0a1219] min-h-screen text-white pb-20">
        <section className="relative h-[35vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-15 grayscale">
            <Image src="/drone.webp" alt="Banner" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1219] via-transparent to-transparent" />
          
          <div className="relative z-10 text-center px-6">
            <span className="text-[#f68b1f] font-mono tracking-[0.4em] text-[10px] uppercase mb-3 block opacity-80">
              Technical Specifications
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              {productTitle}
            </h1>
          </div>
        </section>
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-12 relative z-20">
          <div className="bg-[#0f1a24] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 border-r border-white/5 bg-black/20">
                {componentList.length > 0 ? (
                   <ProductImageGallery 
                    components={componentList} 
                    productTitle={productTitle} 
                  />
                ) : (
                  <div className="flex items-center justify-center h-64 text-white/20">No Images Available</div>
                )}
              </div>
              <div className="lg:col-span-7 p-8 lg:p-16 space-y-10">
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {t(`${slug}.main_title`)}
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-[#f68b1f] to-transparent" />
                </div>               
                <div className="grid grid-cols-1 gap-6">
                  {componentList.map((comp: any, index: number) => (
                    <div key={comp.id || index} className="group p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/[0.07] transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className="p-3 bg-[#f68b1f]/10 rounded-2xl text-[#f68b1f] group-hover:scale-110 transition-transform">
                          <Cpu size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-white uppercase tracking-wide mb-4">
                            {comp.title}
                          </h4>
                          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                            <div>
                              <div className="text-[10px] text-white/30 uppercase font-mono tracking-widest mb-1">{comp.label1}</div>
                              <div className="text-sm text-white/90 font-medium">{comp.val1}</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-white/30 uppercase font-mono tracking-widest mb-1">{comp.label2}</div>
                              <div className="text-sm text-white/90 font-medium">{comp.val2}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </NextIntlClientProvider>
  );
}