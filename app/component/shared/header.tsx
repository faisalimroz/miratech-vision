"use client";

import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";
// Ensure this path matches where you put your navigation.ts

import { LanguageToggle } from "./language-toggle";
import { Link, usePathname } from '@/navigation';

export function Header() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const navItems = [
    { label: t('dashboard'), href: '/dashboard' },
    { label: t('documents'), href: '/documents' },
    { label: t('settings'), href: '/settings' },
  ];
return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <nav className="hidden md:flex h-full items-center gap-8 notranslate">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex h-full items-center text-sm font-medium transition-colors hover:text-blue-600",
                  isActive ? "text-blue-600" : "text-muted-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-2" />
          <LanguageToggle />
        </div>

      </div>
    </header>
  );
}