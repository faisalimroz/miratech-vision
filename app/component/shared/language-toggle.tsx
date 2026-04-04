"use client";
import { Languages, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/navigation";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'ko';

  const languages = [
    { label: "한국어", value: "ko" },
    { label: "English", value: "en" },
  ];

const handleLanguageChange = (newLocale: string) => {
  router.push(pathname, { locale: newLocale });
  router.refresh(); 
};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 w-9 px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Languages className="h-[1.2rem] w-[1.2rem] text-muted-foreground hover:text-foreground transition-colors" />
         
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px] notranslate">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => handleLanguageChange(lang.value)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className={cn(
              "text-sm",
              // We check the raw window path for the active UI state
              (typeof window !== 'undefined' && window.location.pathname.startsWith(`/${lang.value}`)) 
                ? "font-bold text-blue-600" 
                : "text-foreground"
            )}>
              {lang.label}
            </span>
            {(typeof window !== 'undefined' && window.location.pathname.startsWith(`/${lang.value}`)) && (
              <Check className="h-4 w-4 text-blue-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}