import { Link } from "@/i18n/navigation"

export default function NotFound() {
  return (
    <section className="flex min-h-[60svh] flex-col items-start justify-center py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="mt-2 text-3xl font-medium tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1 text-sm text-foreground underline-offset-4 hover:underline"
      >
        ← Back home
      </Link>
    </section>
  )
}
