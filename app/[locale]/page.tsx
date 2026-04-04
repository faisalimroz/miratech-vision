import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

import { ArrowRight, FileText, Shield, Zap } from "lucide-react";
import { Link } from '@/navigation';
import { Header } from '../component/shared/header';


export default function HomePage() {
  // 'Index' corresponds to a key in your ko.json / en.json
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col items-center">
        <Header></Header>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-900">
                {t('title')}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {t('description')}
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/documents">
                  {t('getStarted')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title={t('features.fast.title')}
              desc={t('features.fast.desc')}
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title={t('features.secure.title')}
              desc={t('features.secure.desc')}
            />
            <FeatureCard 
              icon={<FileText className="h-10 w-10 text-blue-600" />}
              title={t('features.easy.title')}
              desc={t('features.easy.desc')}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm transition-hover hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}