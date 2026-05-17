"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { useRef } from "react"
import { Section } from "@/components/sections/section"
import { experience, type ExperienceEntry } from "@/lib/data/experience"
import { cn, formatMonthYear } from "@/lib/utils"

export function Timeline() {
  const t = useTranslations("timeline")
  const locale = useLocale()
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"],
  })

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section
      id="timeline"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      className="relative"
    >
      <div ref={containerRef} className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[7px]" />

        <motion.div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-foreground/70 md:left-[7px]"
          style={{ scaleY: reduceMotion ? 1 : lineScale }}
        />

        <ol className="space-y-10">
          {experience.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={index}
              localeNow={t("now")}
              localePresent={t("present")}
              localeRemote={t("remote")}
              localeStack={t("stack")}
              localeLocation={(key: ExperienceEntry["locationKey"]) =>
                t(`location.${key}`)
              }
              currentLocale={locale}
            />
          ))}
        </ol>
      </div>
    </Section>
  )
}

type TimelineItemProps = {
  entry: ExperienceEntry
  index: number
  currentLocale: string
  localeNow: string
  localePresent: string
  localeRemote: string
  localeStack: string
  localeLocation: (key: ExperienceEntry["locationKey"]) => string
}

function TimelineItem({
  entry,
  index,
  currentLocale,
  localeNow,
  localePresent,
  localeRemote,
  localeLocation,
}: TimelineItemProps) {
  const reduceMotion = useReducedMotion()
  const role =
    currentLocale === "pt" ? entry.role.pt : entry.role.en
  const start = formatMonthYear(entry.start, currentLocale)
  const end = entry.end
    ? formatMonthYear(entry.end, currentLocale)
    : localePresent
  const isPresent = entry.status === "present"

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.4,
        delay: reduceMotion ? 0 : index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative pl-8"
    >
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-1.5 flex size-4 items-center justify-center",
        )}
      >
        {isPresent ? (
          <>
            <span className="absolute inline-flex size-4 animate-pulse-soft rounded-full bg-emerald-500/40" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
          </>
        ) : (
          <span className="size-2 rounded-full bg-muted-foreground/60 ring-2 ring-background" />
        )}
      </span>

      <div className="flex flex-wrap items-baseline gap-x-2">
        <h3 className="text-base font-medium text-foreground">{role}</h3>
        <span className="text-muted-foreground">·</span>
        {entry.orgUrl ? (
          <a
            href={entry.orgUrl}
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            {entry.org}
          </a>
        ) : (
          <span className="text-foreground">{entry.org}</span>
        )}
      </div>

      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        <span>{start}</span>
        <span className="text-muted-foreground/60"> — </span>
        <span className={isPresent ? "text-foreground" : ""}>
          {isPresent ? localeNow : end}
        </span>
        <span className="text-muted-foreground/60"> · </span>
        <span>{localeLocation(entry.locationKey)}</span>
        {entry.remote && (
          <>
            <span className="text-muted-foreground/60"> · </span>
            <span>{localeRemote}</span>
          </>
        )}
      </p>

      {entry.stack.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {entry.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </motion.li>
  )
}
