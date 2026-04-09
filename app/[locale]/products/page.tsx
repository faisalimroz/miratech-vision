// app/[locale]/page.tsx

import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ko' }
  ];
}

export default async function IndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  setRequestLocale(locale);   // Important for next-intl + static export

  return (
    <div className="min-h-screen bg-[#0a1219] text-white">
      <h1>Welcome to Our Drone Solutions</h1>
      <p>This is the homepage.</p>
    </div>
  );
}