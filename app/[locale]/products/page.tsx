import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import ProductCard from '@/app/component/products/product-card';


export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });   // or just await getMessages() if you already have it configured

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>   {/* ← Add locale here */}
      <div className="bg-white min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-12 py-20">
          <ProductCard slug="dronesentry-c2" image="/drone.webp" />
          <ProductCard slug="rfpatrol-mk2" image="/drone.webp" />
          <ProductCard slug="dronecannon-rf" image="/drone.webp" />
    
        </div>
      </div>
    </NextIntlClientProvider>
  );
}