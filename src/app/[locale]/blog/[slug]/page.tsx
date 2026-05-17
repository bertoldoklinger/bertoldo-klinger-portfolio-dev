import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote-client/rsc"
import { Link } from "@/i18n/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const t = await getTranslations({ locale, namespace: "blog" })

  return (
    <article className="py-20 md:py-28">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        {t("backToBlog")}
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {t("publishedOn")}{" "}
          {new Date(post.publishedAt).toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-medium tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-pretty text-base text-muted-foreground">
          {post.description}
        </p>
      </header>

      <div className="prose prose-invert mt-10 max-w-none">
        <MDXRemote source={post.body} />
      </div>
    </article>
  )
}
