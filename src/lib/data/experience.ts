export type LocationKey = "ontarioCanada" | "saoLuisBrazil" | "brazil"

export type ExperienceEntry = {
  id: string
  status: "present" | "past"
  /** ISO yyyy-MM */
  start: string
  /** ISO yyyy-MM, null while ongoing */
  end: string | null
  role: {
    en: string
    pt: string
  }
  org: string
  orgUrl?: string
  locationKey: LocationKey
  remote: boolean
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: "carltonone",
    status: "present",
    start: "2026-04",
    end: null,
    role: { en: "Software Engineer", pt: "Engenheiro de Software" },
    org: "CarltonOne",
    orgUrl: "https://www.carltonone.com",
    locationKey: "ontarioCanada",
    remote: true,
    stack: ["TypeScript", "NestJS", "AWS", "PostgreSQL"],
  },
  {
    id: "sanar",
    status: "past",
    start: "2025-05",
    end: "2026-04",
    role: { en: "Software Engineer", pt: "Engenheiro de Software" },
    org: "Sanar",
    orgUrl: "https://www.sanarsaude.com",
    locationKey: "brazil",
    remote: true,
    stack: ["TypeScript", "Node.js", "AI dev workflows", "Cursor"],
  },
  {
    id: "emserh",
    status: "past",
    start: "2023-09",
    end: "2025-05",
    role: { en: "Software Developer", pt: "Desenvolvedor de Software" },
    org: "EMSERH",
    locationKey: "saoLuisBrazil",
    remote: false,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Jest"],
  },
  {
    id: "r2-tecnologia",
    status: "past",
    start: "2023-02",
    end: "2023-08",
    role: { en: "Web Developer", pt: "Desenvolvedor Web" },
    org: "R2 Tecnologia",
    locationKey: "brazil",
    remote: true,
    stack: ["WordPress", "JavaScript", "CSS", "PHP"],
  },
]
