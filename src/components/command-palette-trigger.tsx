"use client"

import { Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { useCommandPalette } from "@/components/providers/command-palette-provider"

export function CommandPaletteTrigger() {
  const t = useTranslations("nav")
  const { toggle } = useCommandPalette()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("openCommandPalette")}
      className="hidden h-8 items-center gap-2 rounded-md border border-border bg-card/50 px-2 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground sm:inline-flex"
    >
      <Search className="size-3.5" />
      <span className="font-mono uppercase tracking-wider">⌘K</span>
    </button>
  )
}
