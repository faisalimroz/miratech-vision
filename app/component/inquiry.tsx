import { getTranslations } from 'next-intl/server';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default async function InquirySection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'Index.inquiry' });

    const faqs = [
        { q: t('questions.q1'), a: t('questions.a1') },
        { q: t('questions.q2'), a: t('questions.a2') },
        { q: t('questions.q3'), a: t('questions.a3') },
        { q: t('questions.q4'), a: t('questions.a4') },
    ];

    return (
        <section id='support' className="w-full bg-[#E9EFF4] py-12 lg:py-18 border-t border-slate-100">
            <div className="mx-auto max-w-4xl px-6">

                {/* Header Block */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="inline-flex items-center border border-[#f68b1f] gap-2 px-3 py-1 rounded-full bg-[#E9EFF4] mb-4">
                        <HelpCircle className="w-3.5 h-3.5 text-[#f68b1f]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f68b1f]">
                            {t('badge')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#081521] uppercase tracking-tight mb-4">
                        {t('title')}
                    </h2>
                    <p className="max-w-xl text-slate-500 font-light leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Shadcn Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-4 border-none">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-slate-200 rounded-xl px-6 bg-white hover:bg-white transition-all duration-300"
                        >
                            <AccordionTrigger className="text-left cursor-pointer text-[#081521] font-semibold hover:no-underline py-6 ">
                                <span className="flex gap-4 items-center">
                                    <span className="text-[#f68b1f] font-mono text-xs ">0{index + 1}</span>
                                    {faq.q}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-700 leading-relaxed pl-10  text-[15px]">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Bottom Accent */}
                <div className="mt-16 flex justify-center">
                    <div className="h-px w-20 bg-slate-200" />
                </div>
            </div>
        </section>
    );
}