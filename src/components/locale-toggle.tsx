"use client"

import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"

export function LocaleToggle() {
  const t = useTranslations("nav")
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const next: Locale = locale === "en" ? "pt" : "en"

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={t("toggleLanguage")}
      title={t("toggleLanguage")}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.replace(pathname, { locale: next })
        })
      }}
      className="h-8 gap-1 px-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
    >
      <span className={locale === "en" ? "text-foreground" : ""}>EN</span>
      <span className="text-muted-foreground/40">/</span>
      <span className={locale === "pt" ? "text-foreground" : ""}>PT</span>
    </Button>
  )
}
