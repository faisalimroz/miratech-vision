'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ComponentItem {
  image: string;
  title: string;
}

export default function ProductImageGallery({ 
  components, 
  productTitle 
}: { 
  components: ComponentItem[], 
  productTitle: string 
}) {
  // Default to the first component's image
  const [activeImage, setActiveImage] = useState(components[0].image);

  return (
    <div className="flex flex-col gap-6 p-8 lg:p-12 bg-black/20 h-full justify-center">
      {/* Main Large Display */}
      <div className="relative aspect-square w-full max-w-[500px] mx-auto group">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f68b1f_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <Image
          src={activeImage}
          alt={productTitle}
          fill
          priority
          className="object-contain transition-all duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Tactical Accents */}
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#f68b1f]/50 rounded-tr-xl" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#f68b1f]/50 rounded-bl-xl" />
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-4 mt-4">
        {components.map((comp, idx) => (
          <button
            key={idx}
            onMouseEnter={() => setActiveImage(comp.image)} // Swap on hover for "appealing" feel
            onClick={() => setActiveImage(comp.image)}
            className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              activeImage === comp.image 
              ? 'border-[#f68b1f] bg-[#f68b1f]/10 shadow-[0_0_15px_rgba(246,139,31,0.4)]' 
              : 'border-white/10 bg-white/5 hover:border-white/30'
            }`}
          >
            <Image
              src={comp.image}
              alt={comp.title}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}