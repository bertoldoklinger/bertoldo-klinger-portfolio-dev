import { cn } from "@/lib/utils"
import type { ComponentProps, ReactNode } from "react"

type SectionProps = ComponentProps<"section"> & {
  eyebrow?: ReactNode
  heading?: ReactNode
}

export function Section({
  eyebrow,
  heading,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("scroll-mt-20 py-20 md:py-28", className)} {...props}>
      {(eyebrow || heading) && (
        <header className="mb-10">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="text-balance text-2xl font-medium tracking-tight md:text-3xl">
              {heading}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
