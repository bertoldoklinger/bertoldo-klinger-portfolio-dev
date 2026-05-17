"use client"

import { ArrowUpRight, Check, Copy, Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons"
import { Section } from "@/components/sections/section"
import { site } from "@/lib/data/site"

export function Contact() {
  const t = useTranslations("contact")
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    if (typeof navigator === "undefined") return
    await navigator.clipboard.writeText(site.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Section id="contact" eyebrow={t("eyebrow")} heading={t("heading")}>
      <p className="max-w-prose text-pretty text-base leading-relaxed text-muted-foreground">
        {t("body")}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent"
        >
          <span className="flex items-center gap-2.5">
            <Mail className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium">{t("openEmail")}</span>
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent"
        >
          <span className="flex items-center gap-2.5">
            <LinkedinIcon className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium">{t("linkedin")}</span>
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent"
        >
          <span className="flex items-center gap-2.5">
            <GithubIcon className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium">{t("github")}</span>
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </a>
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={() => {
            void copyEmail()
          }}
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {copied ? (
            <Check className="size-3.5 text-foreground" />
          ) : (
            <Copy className="size-3.5" />
          )}
          <span>{site.email}</span>
          <span className="text-xs uppercase tracking-wider text-muted-foreground/60">
            {copied ? t("emailCopied") : t("copyEmail")}
          </span>
        </button>
      </div>
    </Section>
  )
}
