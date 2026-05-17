import { setRequestLocale } from "next-intl/server"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Stack } from "@/components/sections/stack"
import { Timeline } from "@/components/sections/timeline"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Stack />
      <Contact />
    </>
  )
}
