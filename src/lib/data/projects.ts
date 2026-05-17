export type Project = {
  id: string
  name: string
  description: {
    en: string
    pt: string
  }
  href: string
  sourceUrl?: string
  stack: string[]
  /** Highlight on the projects grid (renders larger) */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "pizza-shop",
    name: "pizza.shop",
    description: {
      en: "Restaurant management dashboard with orders, menus, and reviews. Built to explore production-grade React patterns: TanStack Query, server state, optimistic updates, and a clean shadcn/ui foundation.",
      pt: "Dashboard de gestão de restaurantes com pedidos, cardápios e avaliações. Feito para explorar padrões de React production-grade: TanStack Query, estado de servidor, atualizações otimistas e shadcn/ui.",
    },
    href: "https://github.com/bertoldoklinger/pizzashop-web",
    sourceUrl: "https://github.com/bertoldoklinger/pizzashop-web",
    stack: ["TypeScript", "React", "TanStack Query", "Tailwind", "shadcn/ui"],
    featured: true,
  },
  {
    id: "sleepr",
    name: "Sleepr",
    description: {
      en: "Hotel reservation system implemented as a NestJS microservices monorepo with CI/CD. Each service runs independently and communicates via message broker.",
      pt: "Sistema de reserva de hotéis implementado como monorepo de microservices NestJS com CI/CD. Cada serviço roda independentemente e se comunica via message broker.",
    },
    href: "https://github.com/bertoldoklinger/sleepr-microservices-nest",
    sourceUrl: "https://github.com/bertoldoklinger/sleepr-microservices-nest",
    stack: ["NestJS", "Microservices", "Docker", "MongoDB", "RabbitMQ"],
  },
  {
    id: "codepix",
    name: "CodePix",
    description: {
      en: "Pix-style payment simulator with microservices in NestJS and Go, using Kafka for messaging. Models real banking flows: keys registration, transactions, confirmations.",
      pt: "Simulador de pagamentos Pix com microservices em NestJS e Go, usando Kafka para mensageria. Modela fluxos bancários reais: cadastro de chaves, transações, confirmações.",
    },
    href: "https://github.com/bertoldoklinger/codepix",
    sourceUrl: "https://github.com/bertoldoklinger/codepix",
    stack: ["NestJS", "Go", "Kafka", "Next.js", "PostgreSQL"],
  },
]
