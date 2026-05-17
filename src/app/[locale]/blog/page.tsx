import { useTranslations } from "next-intl"
import { setRequestLocale, getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { getAllPosts } from "@/lib/blog"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "blog" })
  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const posts = await getAllPosts()

  return <BlogList posts={posts} />
}

function BlogList({
  posts,
}: {
  posts: Awaited<ReturnType<typeof getAllPosts>>
}) {
  const t = useTranslations("blog")

  return (
    <section className="py-20 md:py-28">
      <header className="mb-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {t("title")}
        </p>
        <h1 className="text-balance text-3xl font-medium tracking-tight md:text-4xl">
          {t("description")}
        </h1>
      </header>

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t("empty")}</p>
      ) : (
        <ul className="flex flex-col">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="group border-b border-border/60 last:border-b-0"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-1.5 py-5 transition-colors"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-base font-medium tracking-tight text-foreground transition-opacity group-hover:opacity-80">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
