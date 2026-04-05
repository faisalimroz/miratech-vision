import { Inter, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import "../globals.css";
import { Header } from "../component/shared/header";

// 1. Define Professional Fonts
// Inter: Standard for modern SaaS UI
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap' 
});

// Noto Sans KR: The gold standard for Korean typography
const noto = Noto_Sans_KR({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  variable: "--font-noto",
  display: 'swap'
});

// JetBrains Mono: Perfect for the "Industrial/Defense" aesthetic (numbers/labels)
const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: 'swap' 
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  // 2. Logic to switch main font based on locale
  const activeFontFamily = locale === "ko" ? noto.className : inter.className;

  return (
    <html 
      lang={locale} 
      // Inject CSS variables for easy use in Tailwind (e.g., font-mono)
      className={cn(mono.variable, inter.variable, noto.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased bg-[#0a1219] text-white",
          activeFontFamily, // The primary font
          "notranslate", // Prevents auto-browser translation conflicts
          // Adjust tracking: Korean usually needs to be slightly tighter to look premium
          locale === "ko" ? "tracking-tight" : "tracking-normal"
        )}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          {/* You can add a Footer here later */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}