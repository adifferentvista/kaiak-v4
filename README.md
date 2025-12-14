# KAIAK v4

A complete Next.js website for KAIAK with integrated MDX blog.

## What's Included

### Pages
- **Homepage** (`/`) - Hero, about, services, products, blog preview, newsletter, contact
- **Blog** (`/blog`) - MDX-powered blog with 10 posts across 4 pillars
- **Blog Posts** (`/blog/[slug]`) - Individual post pages with related posts
- **Second Brain Guide** (`/products/second-brain-guide`) - Product sales page
- **Academy** (`/products/academy`) - Coming soon page

### Blog Features
- **4 Content Pillars:** Practical AI, Systems Thinking, Leadership, The No-Admin Life
- **10 Ready-to-Edit Posts:** Expanded outlines (300-500 words each)
- **Custom MDX Components:** Callout, TimeSaved, BeforeAfter, Tool, RelatedPost, YouTube, CallToAction
- **Featured Posts:** Shows in "Start Here" section
- **Interlinking:** Automatic related posts based on pillar or explicit links

### Design System
- Cream/Navy color palette
- Custom KAIAK logo SVG
- Serif headings (Georgia), Sans body (system fonts)
- Responsive mobile navigation
- Tailwind CSS for styling

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Folder Structure

```
kaiak-v4/
├── app/
│   ├── components/
│   │   ├── Icons.jsx          # SVG icons + Logo
│   │   └── MDXComponents.jsx  # Custom blog components
│   ├── blog/
│   │   ├── page.jsx           # Blog index
│   │   └── [slug]/
│   │       └── page.jsx       # Individual posts
│   ├── products/
│   │   ├── second-brain-guide/
│   │   └── academy/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx               # Homepage
├── content/
│   └── posts/                 # Your MDX blog posts
│       ├── claude-parent-emails.mdx
│       ├── notion-cathedral-kitchen.mdx
│       └── ... (10 total)
├── lib/
│   └── posts.js               # Blog utility functions
├── mdx-components.jsx
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

## Writing Blog Posts

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
description: "A one-sentence hook for the post"
date: "2024-01-15"
pillar: "practical-ai"
contentType: "evergreen"
readTime: "5 min read"
featured: false
interlinks:
  - "related-post-slug"
---

Your content here. You can use **markdown** and custom components.

<Callout type="tip" title="Pro Tip">
  This is a highlighted callout box.
</Callout>

<TimeSaved hours={4} task="email triage" />

<BeforeAfter 
  before="Spending 2 hours on reports"
  after="15 minutes with AI assistance"
/>
```

### Frontmatter Fields

| Field | Required | Options |
|-------|----------|---------|
| `title` | Yes | String |
| `description` | Yes | String (the "hook") |
| `date` | Yes | YYYY-MM-DD |
| `pillar` | Yes | `practical-ai`, `systems-thinking`, `leadership`, `no-admin-life` |
| `contentType` | Yes | `evergreen`, `trending` |
| `readTime` | Yes | e.g., "5 min read" |
| `featured` | No | `true` shows in "Start Here" section |
| `interlinks` | No | Array of related post slugs |

## Custom MDX Components

### Callout
```mdx
<Callout type="tip" title="Optional Title">
  Highlighted content here.
</Callout>
```
Types: `info`, `warning`, `tip`, `story`

### TimeSaved
```mdx
<TimeSaved hours={4} task="email triage" frequency="per week" />
```

### BeforeAfter
```mdx
<BeforeAfter 
  before="Old way"
  after="New way"
  context="Optional context"
/>
```

### Tool
```mdx
<Tool 
  name="NotebookLM" 
  description="Google's AI notebook"
  link="https://notebooklm.google.com"
  free
/>
```

### RelatedPost
```mdx
<RelatedPost 
  slug="other-post" 
  title="Related Post Title"
  context="This connects to..."
/>
```

### CallToAction
```mdx
<CallToAction text="Book a Call" link="/#contact" />
```

## TO-DO Before Launch

- [ ] Replace `YOUR_BOOKING_LINK` with actual Calendly/Google Calendar link
- [ ] Replace `YOUR_HANDLE` with your LinkedIn username
- [ ] Add your headshot to the About section
- [ ] Connect newsletter form to email service (ConvertKit, etc.)
- [ ] Expand the 10 blog post outlines to full 1,500+ word articles
- [ ] Update pricing if needed
- [ ] Add analytics (Google Analytics, Plausible, etc.)

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Other Platforms
Works with any Node.js hosting that supports Next.js 14.

## Content Strategy

### The 4 Pillars

1. **Practical AI** - Tutorials, how-tos, tool recommendations
2. **Systems Thinking** - Frameworks, workflows, organizational approaches
3. **Leadership** - Philosophy, decision-making, strategic thinking
4. **The No-Admin Life** - Personal stories, lifestyle, the "why"

### Featured vs. Recent

- Posts with `featured: true` appear in the "Start Here" section (your best evergreen content)
- All other posts appear in "Recent Posts" in reverse chronological order

### Interlinking

Use the `interlinks` frontmatter to explicitly connect related posts. The "Keep Reading" section at the bottom of each post pulls from this, falling back to same-pillar posts.
