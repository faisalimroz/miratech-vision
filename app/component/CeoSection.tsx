import { getTranslations } from 'next-intl/server';
import { CheckCircle2 } from "lucide-react";

export default async function CEOSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'Index.ceo' });

    const milestones = [
        t('milestones.0'),
        t('milestones.1'),
        t('milestones.2'),
        t('milestones.3'),
    ];

    return (
        <section id='ceo' className="w-full bg-[#0a1219] py-24 lg:py-32 border-t border-white/5">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* LEFT: Identity & Vision */}
                    <div className="flex flex-col justify-center">
                        <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#f68b1f] mb-6">
                            {t('badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-8">
                            {t('title')}
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl font-light">
                            {t('description')}
                        </p>

                        {/* Signature Industrial Line */}
                        <div className="mt-12 h-[1px] w-24 bg-[#f68b1f]/50" />
                    </div>

                    {/* RIGHT: Professional Milestones */}
                    <div className="relative space-y-8 bg-white/5 p-8 lg:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-3 group">
                                <div className="flex-shrink-0 mt-1">
                                    <CheckCircle2 className="h-5 w-5 text-[#f68b1f] opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div>
                                    <p className="text-white/80 text-[15px] md:text-[17px] leading-snug font-medium transition-colors group-hover:text-white">
                                        {milestone}
                                    </p>

                                    {index !== milestones.length - 1 && (
                                        <div className="mt-6 h-[1px] w-full bg-white/5" />
                                    )}
                                </div>
                            </div>
                        ))}


                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-8 h-8 border-t-2 border-r-2 border-[#f68b1f]/30 rounded-tr-lg" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <div className="w-8 h-8 border-b-2 border-l-2 border-[#f68b1f]/30 rounded-bl-lg" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}