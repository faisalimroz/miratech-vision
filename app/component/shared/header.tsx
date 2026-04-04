"use client"

import { Globe } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { Link, usePathname } from "@/navigation"
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./language-toggle";
import { Menu } from "lucide-react"; 
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const t = useTranslations("Navbar")
  const pathname = usePathname()

  const navItems = [
    { label: t("solutions"), href: "/solutions" },
    { label: t("capabilities"), href: "/capabilities" },
    { label: t("sectors"), href: "/sectors" },
    { label: t("company"), href: "/company" },
    { label: t("investorRelations"), href: "/investor-relations" },
  ]

  return (
   <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a1219] shadow-2xl">
      <div className="mx-auto flex h-20 w-full max-w-[1920px] items-center justify-between px-6 lg:px-10">
        
        {/* LEFT: Logo Section */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center gap-3">
            {/* The Orange Shield Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#f68b1f] shadow-[0_0_15px_rgba(246,139,31,0.3)]">
              <span className="text-xl font-black italic text-[#0a1219]">D</span>
            </div>
            <span className="text-2xl font-bold tracking-[0.15em] text-white uppercase">
              Drone<span className="font-light text-white/90">Shield</span>
            </span>
          </Link>
        </div>

        {/* CENTER: Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-[0.1em] text-white/60 transition-all hover:text-[#f68b1f]",
                    isActive && "text-white underline underline-offset-8 decoration-[#f68b1f] decoration-2"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* RIGHT: Actions */}
        <div className="flex shrink-0 items-center gap-3 lg:gap-6">
          <div className="hidden lg:block border-r border-white/10 pr-4">
             <LanguageToggle />
          </div>
          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a1219] border-white/10 text-white w-[300px]">
                <nav className="flex flex-col gap-6 mt-12">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className="text-lg font-bold uppercase tracking-widest hover:text-[#f68b1f]">
                      {item.label}
                    </Link>
                  ))}
                  <hr className="border-white/10" />
                  <LanguageToggle />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}