import { useTranslations } from "next-intl"
import { Section } from "@/components/sections/section"
import { stack } from "@/lib/data/stack"

export function Stack() {
  const t = useTranslations("stack")

  return (
    <Section id="stack" eyebrow={t("eyebrow")} heading={t("heading")}>
      <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-[10rem_1fr]">
        {stack.map((group) => (
          <div
            key={group.id}
            className="contents"
          >
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground sm:pt-0.5">
              {t(`groups.${group.id}`)}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2 py-1 text-xs text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
