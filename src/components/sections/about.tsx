import { useTranslations } from "next-intl"
import { Section } from "@/components/sections/section"

export function About() {
  const t = useTranslations("about")

  return (
    <Section id="about" eyebrow={t("eyebrow")} heading={t("heading")}>
      <p className="text-pretty text-base leading-relaxed text-muted-foreground">
        {t("body")}
      </p>
      <p className="mt-4 text-sm text-foreground">{t("highlight")}</p>
    </Section>
  )
}
