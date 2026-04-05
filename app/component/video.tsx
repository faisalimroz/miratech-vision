import { getTranslations } from 'next-intl/server';

interface HeroVideoProps {
  locale: string;
}

export default async function HeroVideo({ locale }: HeroVideoProps) {
  const t = await getTranslations({ locale, namespace: 'Index.heroVideo' });

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#0a1219]">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Dark Gradient Overlay (Improves text readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1219]/40 via-transparent to-[#0a1219]" />

      {/* 3. Centered Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-6xl lg:text-7xl">
          {t('title')}
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg font-light tracking-wide text-white/80 md:text-xl lg:text-2xl">
          {t('content')}
        </p>

        {/* Optional: Industrial Accent Line */}
        <div className="mt-10 h-[2px] w-24 bg-[#f68b1f] shadow-[0_0_15px_rgba(246,139,31,0.5)]" />
      </div>
    </section>
  );
}