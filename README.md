# bertoldoklinger.vercel.app

Personal portfolio for Bertoldo Klinger — Software Engineer.

Built with Next.js 16, Tailwind v4, shadcn/ui, next-intl (EN/PT), Framer Motion,
and cmdk for the command palette. Deployed on Vercel.

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build

```bash
pnpm build
pnpm start
```

## Conventions

See [.cursorrules](.cursorrules) for the full set of rules. In short:

- Server Components by default; `"use client"` only when needed.
- All copy lives in `messages/{en,pt}.json` via `next-intl`.
- All career/projects/stack data lives in `src/lib/data/*.ts`.
- Design tokens are in `src/app/globals.css` under `@theme` + `:root` / `.dark`.

## Project structure

```
src/
  app/
    [locale]/
      layout.tsx        # root layout (fonts, providers, nav, footer, OG metadata)
      page.tsx          # landing
      blog/             # MDX blog
      not-found.tsx
      opengraph-image.tsx
    globals.css
    sitemap.ts
    robots.ts
  components/
    sections/           # hero, about, timeline, projects, stack, contact
    providers/          # theme + command palette
    ui/                 # shadcn primitives
  i18n/                 # routing, navigation, request config
  lib/
    data/               # site, experience, projects, stack
    blog.ts
    utils.ts
  middleware.ts         # next-intl routing
content/posts/          # MDX blog posts
messages/               # en.json, pt.json
```
