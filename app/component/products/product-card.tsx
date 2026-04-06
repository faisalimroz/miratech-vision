'use client';  

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/navigation';

interface ProductCardProps {
  slug: string;
  image: string;
}

export default function ProductCard({ slug, image }: ProductCardProps) {
  const t = useTranslations('Products');

  return (
    <Link 
      href={`/products/${slug}`} 
      className="group relative flex flex-col bg-white border border-slate-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#f68b1f]/30"
    >
    
      <div className="relative aspect-[5/5] w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={t(`${slug}.title`)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#081521] text-white text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1.5">
            {t(`${slug}.category`)}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-2xl font-black text-[#081521] uppercase tracking-tighter mb-4 transition-colors group-hover:text-[#f68b1f]">
            {t(`${slug}.title`)}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
            {t(`${slug}.description`)}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#081521]/40 group-hover:text-[#081521] transition-colors">
            View Specifications
          </span>
          <ArrowRight className="w-4 h-4 text-[#f68b1f] transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}