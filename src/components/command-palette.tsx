"use client"

import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Globe,
  Mail,
  Moon,
  Pencil,
  Sun,
} from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { useCallback, useState } from "react"
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useCommandPalette } from "@/components/providers/command-palette-provider"
import { usePathname, useRouter } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { site } from "@/lib/data/site"

export function CommandPalette() {
  const t = useTranslations("commandPalette")
  const tNav = useTranslations("nav")
  const { open, setOpen } = useCommandPalette()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale() as Locale
  const { resolvedTheme, setTheme } = useTheme()
  const [emailCopied, setEmailCopied] = useState(false)

  const runCommand = useCallback(
    (command: () => void | Promise<void>) => {
      setOpen(false)
      command()
    },
    [setOpen],
  )

  const copyEmail = useCallback(async () => {
    if (typeof navigator === "undefined") return
    await navigator.clipboard.writeText(site.email)
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 1500)
  }, [])

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) setEmailCopied(false)
  }

  const isDark = resolvedTheme === "dark"
  const nextLocale: Locale = locale === "en" ? "pt" : "en"

  return (
    <CommandDialog
      open={open}
      onOpenChange={handleOpenChange}
      title={tNav("openCommandPalette")}
      description={t("placeholder")}
      showCloseButton={false}
    >
      <CommandInput placeholder={t("placeholder")} />
      <CommandList>
        <CommandEmpty>{t("empty")}</CommandEmpty>

        <CommandGroup heading={t("groups.navigate")}>
          <CommandItem
            value="home go-home"
            onSelect={() => runCommand(() => router.push("/"))}
          >
            <ArrowRight className="size-4" />
            <span>{t("items.home")}</span>
          </CommandItem>
          <CommandItem
            value="blog writing"
            onSelect={() => runCommand(() => router.push("/blog"))}
          >
            <Pencil className="size-4" />
            <span>{t("items.blog")}</span>
          </CommandItem>
          <CommandItem
            value="projects work"
            onSelect={() =>
              runCommand(() => {
                if (pathname === "/") {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                } else {
                  router.push("/#projects")
                }
              })
            }
          >
            <ArrowRight className="size-4" />
            <span>{t("items.projects")}</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={t("groups.general")}>
          <CommandItem
            value="theme toggle dark light"
            onSelect={() =>
              runCommand(() => setTheme(isDark ? "light" : "dark"))
            }
          >
            {isDark ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
            <span>{t("items.toggleTheme")}</span>
          </CommandItem>
          <CommandItem
            value="language locale switch"
            onSelect={() =>
              runCommand(() => router.replace(pathname, { locale: nextLocale }))
            }
          >
            <Globe className="size-4" />
            <span>{t("items.switchLanguage")}</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={t("groups.links")}>
          <CommandItem
            value="linkedin"
            onSelect={() =>
              runCommand(() => {
                window.open(site.linkedin, "_blank")
              })
            }
          >
            <LinkedinIcon className="size-4" />
            <span>{t("items.linkedin")}</span>
            <ExternalLink className="ml-auto size-3.5 text-muted-foreground" />
          </CommandItem>
          <CommandItem
            value="github"
            onSelect={() =>
              runCommand(() => {
                window.open(site.github, "_blank")
              })
            }
          >
            <GithubIcon className="size-4" />
            <span>{t("items.github")}</span>
            <ExternalLink className="ml-auto size-3.5 text-muted-foreground" />
          </CommandItem>
          <CommandItem
            value="email send"
            onSelect={() =>
              runCommand(() => {
                window.location.href = `mailto:${site.email}`
              })
            }
          >
            <Mail className="size-4" />
            <span>{t("items.email")}</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={t("groups.copy")}>
          <CommandItem
            value="copy email address"
            onSelect={() => {
              void copyEmail()
            }}
          >
            {emailCopied ? (
              <Check className="size-4 text-foreground" />
            ) : (
              <Copy className="size-4" />
            )}
            <span>{t("items.copyEmail")}</span>
            <span className="ml-auto font-mono text-xs text-muted-foreground">
              {site.email}
            </span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
