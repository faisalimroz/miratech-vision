'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const params = useParams();
  const locale = params?.locale || 'en';
  const t = useTranslations('NotFound');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a1219] text-white">
      <div className="relative mb-12 animate-pulse">
        <h1 className="text-[10rem] md:text-[15rem] font-black text-white/5 leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-[#f68b1f]">
            {t('title')}
          </h2>
        </div>
      </div>

      <p className="text-slate-400 text-center max-w-md px-6 mb-12 text-lg font-light">
        {t('message')}
      </p>

   
      <Link 
        href={`/${locale}`}
        className="group relative px-12 py-4 bg-white text-black font-black uppercase tracking-[0.2em] transition-all hover:bg-[#f68b1f] hover:text-white"
      >
        <span className="relative z-10">{t('button')}</span>
        <div className="absolute inset-0 bg-[#f68b1f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </Link>
    </div>
  );
}