'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Shield, Laptop, Cpu, Globe, Lock } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function SoftwareSection() {
  // Use your existing 'Products' namespace
  const t = useTranslations('Products');

  // These IDs must match the keys in your en.json and ko.json
  const softwareList = [
    { id: 'dronesentry-c2', icon: Shield },
    { id: 'rfpatrol-mk2', icon: Laptop }, 
    { id: 'dronecannon-rf', icon: Cpu },
   
  ];

  return (
    <section className="relative w-full min-h-[700px] xl:h-[950px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/drone.webp" // Using your existing drone image
          alt="Background"
          fill
          className="object-cover "
          priority
        />
        {/* Dark Gradient to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081521]/30 via-[#081521]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="max-w-xl">
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Software
          </h2>
          <p className="text-white text-lg leading-relaxed mb-12 font-light">
            {/* You can also pull this description from Index.overview if you prefer */}
            Counter-UAS software powered by superior AI and data precision. 
            Providing true situational awareness for a decisive edge.
          </p>

          {/* Dynamic Navigation List */}
          <nav className="flex flex-col border-t border-white/10">
            {softwareList.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/5 transition-all px-4"
              >
                <div className="flex items-center gap-5">
                  <item.icon className="w-5 h-5 text-[#f68b1f] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-base font-bold text-white uppercase tracking-[0.2em] group-hover:translate-x-3 transition-transform duration-300">
                    {/* This pulls the title directly from your JSON based on language */}
                    {t(`${item.id}.title`)}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#f68b1f] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Visual Accent */}
        <div className="hidden lg:block relative h-[500px] w-full">
            {/* This simulates the UI glow from your image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#f68b1f]/5 blur-[120px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 w-64 h-64 rotate-45 animate-pulse" />
        </div>
      </div>
    </section>
  );
}