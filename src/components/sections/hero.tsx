"use client"

import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useCommandPalette } from "@/components/providers/command-palette-provider"
import { site } from "@/lib/data/site"

export function Hero() {
  const t = useTranslations("hero")
  const { toggle } = useCommandPalette()

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-[480px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-120px] size-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--brand-muted),transparent_70%)] opacity-70 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_88%)]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M.5 32V.5H32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <a
        href={site.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 py-1 pl-2 pr-3 backdrop-blur-sm transition-colors hover:border-foreground/30 hover:bg-card"
      >
        <span
          aria-hidden
          className="relative flex size-2 items-center justify-center"
        >
          <span className="absolute inline-flex size-2.5 animate-pulse-soft rounded-full bg-emerald-500/70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t("currentlyAt")}{" "}
          <span className="text-foreground">{t("company")}</span>
        </span>
        <ArrowUpRight className="size-3 text-muted-foreground/60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </a>

      <h1 className="mt-8 text-balance text-5xl font-medium leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
        <span className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/40 bg-clip-text text-transparent">
          {t("name")}
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-balance text-lg leading-snug text-muted-foreground md:text-xl">
        <span className="text-foreground">{t("title")}.</span>{" "}
        {t("tagline")}{" "}
        <span className="text-foreground/80">{t("remoteFrom")}.</span>
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex h-9 items-center gap-1.5 rounded-md bg-foreground px-3.5 font-medium text-background transition-all hover:opacity-90"
        >
          {t("primaryCta")}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          onClick={toggle}
          aria-label="Open command palette"
          className="group inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card/40 px-2.5 text-muted-foreground backdrop-blur-sm transition-colors hover:border-foreground/20 hover:bg-card hover:text-foreground"
        >
          <span className="text-xs">or press</span>
          <span className="inline-flex h-5 items-center gap-0.5 rounded border border-border bg-background/60 px-1.5 font-mono text-[11px] text-foreground">
            <span className="text-[14px] leading-none">⌘</span>
            <span>K</span>
          </span>
        </button>
      </div>
    </section>
  )
}
