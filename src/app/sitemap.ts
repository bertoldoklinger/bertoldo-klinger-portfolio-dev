import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { getAllPosts } from "@/lib/blog"
import { site } from "@/lib/data/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const lastModified = new Date()

  const staticRoutes = ["", "/blog"]

  const routes = staticRoutes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${site.url}${locale === routing.defaultLocale ? "" : `/${locale}`}${route}`,
      lastModified,
    })),
  )

  const postRoutes = posts.flatMap((post) =>
    routing.locales.map((locale) => ({
      url: `${site.url}${locale === routing.defaultLocale ? "" : `/${locale}`}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  )

  return [...routes, ...postRoutes]
}
