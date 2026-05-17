import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

export type PostFrontmatter = {
  title: string
  description: string
  publishedAt: string
  draft?: boolean
}

export type Post = PostFrontmatter & {
  slug: string
  body: string
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts")

async function readPostsDir(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR)
    return files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
  } catch {
    return []
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await readPostsDir()
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, "")
      const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf-8")
      const { data, content } = matter(raw)
      const fm = data as PostFrontmatter
      return {
        slug,
        title: fm.title,
        description: fm.description,
        publishedAt: fm.publishedAt,
        draft: fm.draft,
        body: content,
      } satisfies Post
    }),
  )
  return posts
    .filter((post) => !post.draft)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug) ?? null
}
