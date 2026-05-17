import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons"
import { site } from "@/lib/data/site"

export function Footer() {
  const t = useTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-3xl flex-col-reverse items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          © {year} {site.name}. {t("rights")}
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
