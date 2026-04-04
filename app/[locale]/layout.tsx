import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import { Header } from '../component/shared/header';
export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
            <body className="notranslate">

                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Header />
                    <main className="min-h-screen flex flex-col">
                        {children}
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}