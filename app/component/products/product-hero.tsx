'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Shield, Search, Zap } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function SoftwareSection() {
  const t = useTranslations('Products');
  const dronelist = [
    {
      id: 'detection-identification-equipment',
      icon: Search
    },
    {
      id: 'neutralization-equipment',
      icon: Zap
    },
    {
      id: 'spoofing-equipment',
      icon: Shield
    },
  ];

  return (
    <section id="products" className="relative w-full min-h-[700px] xl:h-[950px] flex items-center overflow-hidden">  
      <div className="absolute inset-0 z-0">
        <Image
          src="/drone.webp" 
          alt="Background"
          fill
          className="object-cover "
          priority
        />
      
        <div className="absolute inset-0 bg-gradient-to-r from-[#081521]/30 via-[#081521]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            
            {t('header')}
          </h2>
          <p className="text-white text-lg leading-relaxed mb-12 font-light">
         
            {t('description')}
          </p>

          {/* Dynamic Navigation List */}
          <nav className="flex flex-col border-t border-white/10">
            {dronelist.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/5 transition-all px-4"
              >
                <div className="flex items-center gap-5">
                  <item.icon className="w-5 h-5 text-[#f68b1f] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-base font-bold text-white uppercase tracking-[0.2em] group-hover:translate-x-3 transition-transform duration-300">
                    {/* Since 't' is already scoped to 'Products', just use the ID */}
                    {t(`${item.id}.title`)}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#f68b1f] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </Link>
            ))}
          </nav>
        </div>

      
        <div className="hidden lg:block relative h-[500px] w-full">
  
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#f68b1f]/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 w-64 h-64 rotate-45 animate-pulse" />
        </div>
      </div>
    </section>
  );
}