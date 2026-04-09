'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Phone, Clock, MessageSquare, Zap } from 'lucide-react';

export default function CustomerCenter() {
  const t = useTranslations('Contact');

  return (
    <div className="relative group overflow-hidden w-full h-full flex items-center justify-center min-h-[400px]">
      <div className="absolute -inset-1 bg-gradient-to-r from-bg-[#0f1a24]  to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
      
      <div className="relative flex flex-col items-center bg-[#0f1a24] border border-white/10 rounded-[2rem] w-full max-w-sm md:max-w-md lg:max-w-lg p-10 md:p-14 lg:p-16 shadow-[0_20px_50px_rgba(246,139,31,0.1)]">
        
        {/* Localized Badge */}
        <div className="flex items-center gap-3 mb-10 px-6 py-3 border border-dashed border-[#f68b1f]/30 rounded-full">
            <Zap size={14} className="text-[#f68b1f]" />
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#f68b1f]">
                {t('badge')}
            </span>
            <Zap size={14} className="text-[#f68b1f]" />
        </div>

        <div className="flex flex-col items-center gap-6 mb-12 text-center">
            {/* Phone Icon */}
            <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center bg-black/30 border border-white/10 rounded-3xl text-[#f68b1f]">
                <Phone size={28} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f68b1f] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#f68b1f]"></span>
                </span>
            </div>
            
            {/* Localized Contact Details */}
            <div>
                <p className="text-xs md:text-sm font-mono uppercase tracking-widest text-white/40 mb-2">
                    {t('line_label')}
                </p>
                <a href={`tel:${t('phone').replace(/\./g, '')}`} className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter hover:text-[#f68b1f] transition-colors">
                    {t('phone')}
                </a>
            </div>
        </div>

        {/* Localized Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-10 w-full">
            <div className="flex items-center justify-center gap-3 text-white/60 p-4 bg-white/5 rounded-xl">
                <Clock size={16} className="text-[#f68b1f]" />
                <span className="text-xs font-medium">{t('hours')}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/60 p-4 bg-white/5 rounded-xl">
                <MessageSquare size={16} className="text-[#f68b1f]" />
                <span className="text-xs font-medium">{t('status')}</span>
            </div>
        </div>
      </div>
    </div>
  );
}