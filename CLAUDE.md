# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm start        # Serve production build
npm run lint     # Run Next.js linter
```

No test framework is configured. No `.env` file is used; external service IDs (GA, ConvertKit, Calendly, iubenda) are hardcoded in `app/layout.jsx`.

## Architecture

**Next.js 14 App Router** static marketing site with MDX blog. No database, no API routes, no authentication. JSX throughout (not TypeScript). Path alias `@/*` maps to project root.

### Routing

All routes use App Router (`app/` directory). Key pages:
- `/` — Homepage (hero, pain points, CTA, testimonials, FAQ)
- `/blog` — Blog index with client-side search/filter by pillar
- `/blog/[slug]` — Blog posts, statically generated via `generateStaticParams()`
- `/booking` — Calendly embed
- `/work-with-me` — Services page
- `/ai-toolkit` — Free toolkit landing page
- `/products/second-brain-guide` and `/products/academy` — Product pages

### Blog Content System

Posts live in `content/posts/*.mdx` with YAML frontmatter:

```yaml
title: "Post Title"
description: "One-line hook"
date: "YYYY-MM-DD"
pillar: "practical-ai" | "systems-thinking" | "leadership" | "no-admin-life" | "education"
contentType: "evergreen" | "trending"
readTime: "5 min read"
featured: false
interlinks: ["related-post-slug"]
```

`lib/posts.js` parses frontmatter with `gray-matter` and exports: `getAllPosts()`, `getPostBySlug()`, `getFeaturedPosts()`, `getRelatedPosts()`, `getPostsByPillar()`, `getLatestPosts()`. Posts with a future `date` are filtered out at build time.

Blog posts render MDX server-side via `next-mdx-remote`. Custom MDX components are in `app/components/MDXComponents.jsx`:
- `<Callout type="tip|info|warning|story">` — Highlighted box
- `<TimeSaved hours={4} task="..." frequency="per week" />` — Time calculator
- `<BeforeAfter before="..." after="..." />` — Comparison card
- `<Tool name="..." description="..." link="..." free />` — Tool card
- `<RelatedPost slug="..." title="..." />` — Internal link
- `<YouTube id="..." />` — Video embed
- `<CallToAction text="..." link="..." variant="primary|secondary" />` — CTA button

### Styling

Tailwind CSS only (no CSS modules, no CSS-in-JS). Dark mode via `class` strategy, persisted to `localStorage` as `kaiak-theme`. Custom colors defined in `tailwind.config.js`:
- `cream` / `cream-dark` — Light mode backgrounds
- `navy` (with `light`, `mid`, `dark`, `border` shades) — Primary text/dark backgrounds
- `orange` (with `light`, `dark`) — Accent color
- `blue-gray` — Subtle backgrounds

Fonts loaded via `next/font`: Inter (sans), Instrument Serif (headings), mono. Available as CSS vars `--font-inter`, `--font-instrument`, `--font-mono`.

### Pillar System

Content is categorized by "pillars" with associated colors defined in `lib/posts.js` (`pillarLabels` and `pillarColors` objects):
- `practical-ai` — Purple
- `systems-thinking` — Amber
- `leadership` — Green
- `no-admin-life` — Pink
- `education` — Purple

### Client Components

Components using `'use client'`: `Navbar.jsx` (mobile menu), `BlogContent.jsx` (search/filter), `ThemeProvider.jsx` / `ThemeToggle.jsx` (dark mode), `ExitIntentPopup.jsx` (newsletter), `NewsletterForm.jsx`, `WaitlistForm.jsx`. State management is React hooks only.

### External Integrations

- **Google Analytics 4** — Script in layout, ID `G-EFQFMJWN6P`
- **ConvertKit** — Newsletter forms post to ConvertKit API, form ID `8895661`
- **Calendly** — Embedded iframe at `/booking`
- **iubenda** — Cookie consent banner scripts in layout

### SEO

Dynamic sitemap in `app/sitemap.js`. Blog posts include JSON-LD structured data. Each page exports a `metadata` object for `<head>` tags.

## Author Context

The author is a **former head of school** (past tense — not currently in the role). All content referencing school leadership, boards, or school policy must use past tense ("my school" → "my last school", "I'm approaching" → "I approached"). The author works from home — no commute references.

## Agent Routing Rules

When a task matches one of the patterns below, delegate to the appropriate skill. If a task spans multiple skills, execute them in the pipeline order shown.

### Single-Skill Routing

| Trigger | Skill | What It Does |
|---------|-------|-------------|
| "research [topic]", "find sources on", "run the pipeline", "what's new in" | `automated-research` | Search academic + web sources, summarize, generate digest |
| "outline a post", "find evidence for", "source this claim", "pre-mortem this idea" | `content-research-writer` | Research sourcing, outline frameworks, citation standards, source quality evaluation |
| "draft this post", "review this draft", "check for slop", "does this sound like me" | `content-voice-style` | Anti-AI-slop filter, voice preservation, hook patterns, section feedback |
| "format for publishing", "add frontmatter", "prep MDX", "SEO check", "optimize for AI search" | `kaiak-web-publishing` | MDX formatting, frontmatter, pillar taxonomy, SEO/GEO, content type templates |
| "write a LinkedIn post", "prep for LinkedIn", "adapt this for LinkedIn" | `linkedin-post-generator` | Practitioner-style LinkedIn posts, trust-optimized, anti-engagement-bait |
| "build a component", "design a page", "create a landing page", "update the UI" | `frontend-design` | Production-grade frontend interfaces, Tailwind + Next.js components |

### Multi-Skill Pipelines

**Full Content Production** — "write a post about [topic]" or "full production run"
1. `automated-research` → produce research digest on the topic
2. `content-research-writer` → outline post using digest findings, source claims with inline citations
3. `content-voice-style` → draft in Executive Engineer style, run anti-slop and voice checks
4. `kaiak-web-publishing` → format MDX, set frontmatter, optimize SEO/GEO, populate interlinks
5. Review checkpoint: present draft for author approval before publishing

**Post + Distribution** — "publish and distribute [post]"
1. `kaiak-web-publishing` → final MDX formatting and SEO/GEO pass
2. `linkedin-post-generator` → create LinkedIn distribution post from the published content
3. Deliver both files for review

**Research to Brief** — "brief me on [topic]"
1. `automated-research` → search and summarize latest sources
2. `content-research-writer` → structure findings into a content brief with source quality ratings

### Routing Principles

- **Never skip the voice check.** Every post draft must pass through `content-voice-style` before publishing.
- **Always check tense.** Scan for present-tense school leadership references before any content is finalized (see Author Context above).
- **Skills work together, not alone.** `content-research-writer` handles the sourcing; `content-voice-style` handles the writing quality; `kaiak-web-publishing` handles the formatting. Do not collapse these into a single step.
- **Author approval before publish.** No content goes to `content/posts/` without explicit author sign-off.
