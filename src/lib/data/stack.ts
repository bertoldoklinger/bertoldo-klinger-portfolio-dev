export type StackGroup = {
  id:
    | "languages"
    | "backend"
    | "cloud"
    | "data"
    | "observability"
    | "ai"
    | "testing"
    | "certifications"
  items: string[]
}

export const stack: StackGroup[] = [
  {
    id: "languages",
    items: ["TypeScript", "JavaScript", "Go", "SQL"],
  },
  {
    id: "backend",
    items: ["Node.js", "NestJS", "REST", "Microservices", "Kafka", "RabbitMQ"],
  },
  {
    id: "cloud",
    items: ["AWS (EKS, Lambda, S3)", "Docker", "CI/CD", "IaC", "Vercel"],
  },
  {
    id: "data",
    items: ["PostgreSQL", "Redis", "MongoDB"],
  },
  {
    id: "observability",
    items: [
      "OpenTelemetry",
      "SigNoz",
      "Datadog",
      "Circuit breakers",
      "Retries",
    ],
  },
  {
    id: "ai",
    items: ["Cursor", "Claude Code", "MCP", "Agentic workflows"],
  },
  {
    id: "testing",
    items: ["Jest", "TDD", "Integration tests"],
  },
  {
    id: "certifications",
    items: [
      "AWS Certified Cloud Practitioner",
      "Datadog: Intro to Observability",
      "EF SET C2 — English",
    ],
  },
]
