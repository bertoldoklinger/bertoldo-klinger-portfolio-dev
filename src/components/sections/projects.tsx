import { ArrowUpRight } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Section } from "@/components/sections/section"
import { projects } from "@/lib/data/projects"

export function Projects() {
  const t = useTranslations("projects")
  const locale = useLocale()

  return (
    <Section id="projects" eyebrow={t("eyebrow")} heading={t("heading")}>
      <ul className="flex flex-col">
        {projects.map((project) => {
          const description =
            locale === "pt" ? project.description.pt : project.description.en

          return (
            <li
              key={project.id}
              className="group border-b border-border/60 last:border-b-0"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-3 py-6 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-medium tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
