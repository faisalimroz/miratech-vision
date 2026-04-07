import { getTranslations } from 'next-intl/server';
import { AnimatedCounter } from "../animated-counter";

interface CounterSectionProps {
  locale: string;
}
export default async function CounterSection({ locale }: CounterSectionProps) {
  const t = await getTranslations({ locale, namespace: 'Index.stats' });
  const stats = [
    { number: 4000, label: t('unitsSold'), suffix: "+" },
    { number: 74, label: t('inCountryPartners'), suffix: "" },
    { number: 12, label: t('yearsOfInnovation'), suffix: "" },
  ];

  return (
    <section className="w-full bg-[#E9EFF4] py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr,2fr] lg:gap-24 items-start">
          
   
          <div className="max-w-[380px]">           
            <p className="text-[18px] font-medium leading-relaxed text-[#081521]/70">
              {t('trustedBy')}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center border-t border-[#081521]/10 pl-6 lg:pl-10">              
                <AnimatedCounter
                  value={stat.number}
                  suffix={stat.suffix}
                  className="text-[32px] md:text-[56px] mt-3 font-black tracking-tight text-[#081521] leading-none"
                />
                
                <p className="mt-5 text-[16px] font-bold uppercase tracking-[0.15em] text-[#f68b1f]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-24">
           <h2 className="text-[44px] md:text-[48px] lg:text-[64px] font-medium leading-[1.1] tracking-tight text-[#081521] max-w-[1100px]">
             {t('heroMessage') || "Intuitive control in even the most complex environments."}
           </h2>
        </div>
      </div>
    </section>
  );
}