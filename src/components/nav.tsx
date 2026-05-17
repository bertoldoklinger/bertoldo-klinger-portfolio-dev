import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { CommandPaletteTrigger } from "@/components/command-palette-trigger"
import { LocaleToggle } from "@/components/locale-toggle"
import { ThemeToggle } from "@/components/theme-toggle"

export function Nav() {
  const t = useTranslations("nav")

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={t("home")}
          className="font-mono text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          bertoldoklinger
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="hidden h-8 items-center px-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            {t("home")}
          </Link>
          <Link
            href="/blog"
            className="hidden h-8 items-center px-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            {t("blog")}
          </Link>

          <div className="mx-1 hidden h-4 w-px bg-border sm:block" />

          <CommandPaletteTrigger />
          <LocaleToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
