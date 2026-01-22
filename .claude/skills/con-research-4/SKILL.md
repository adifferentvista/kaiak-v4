---
name: kaiak-content-system
description: Writing partner for creating authentic, operator-grade content. Use for blog posts, newsletters, tactical guides, and thought leadership. Enforces anti-AI-slop patterns, bold-first formatting, visual cadence, and voice preservation. Includes MDX technical patterns, JSX styling, and research citation workflows.
---

# KAIAK Content System

Your writing partner for creating content that sounds like a knowledgeable peer, not a corporate blog or AI output.

## Core Philosophy

Three rules govern everything:

1. **Start with something worth saying** — If you can't articulate what only YOU can say about this topic, you're not ready to write
2. **Say it in your voice** — Match the reader's internal monologue, not a press release
3. **Use AI to say it better** — Not to generate ideas, but to sharpen yours

---

## MDX Technical Patterns

### Frontmatter Template

```yaml
---
title: "Your Title Here"
description: "One sentence that hooks and promises value. 150-160 chars for SEO."
date: "YYYY-MM-DD"
pillar: "education"  # See pillar options below
contentType: "evergreen"  # or "tactical" or "guide"
readTime: "X min read"
featured: false
keywords: ["keyword one", "keyword two", "keyword three"]
interlinks:
  - "related-post-slug-one"
  - "related-post-slug-two"
  - "related-post-slug-three"
---
```

### Pillar Options

| Pillar | Slug | Use For |
|--------|------|---------|
| Practical AI | `practical-ai` | AI tools, prompts, workflows, implementation |
| Systems Thinking | `systems-thinking` | Processes, templates, organizational design |
| Leadership Philosophy | `leadership` | Mindset, strategy, decision-making, school leadership |
| The No-Admin Life | `no-admin-life` | Personal productivity, work-life, time reclaimed |
| Education | `education` | Research-backed posts on AI in schools, policy, pedagogy |

### Hero Section Pattern (For Research Posts)

Use for posts with compelling statistics. Place immediately after frontmatter:

```jsx
<div style={{background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '12px', padding: '24px', marginBottom: '32px', border: '1px solid #f59e0b'}}>

**The hook statement.** [Stat one](https://source-url.com) with context—[stat two](https://source-url.com) with more context, and [stat three](https://source-url.com) drives it home.

</div>
```

**Rules:**
- 2-4 key statistics, all linked to sources
- One bold opening statement
- Yellow/amber gradient (the "warning/attention" color)
- Stats should create tension or urgency

### JSX Grid Pattern (Replaces Markdown Tables)

Use for comparisons, before/after, pros/cons. Never use markdown tables for these.

**Two-column comparison:**

```jsx
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '2rem 0'}}>

<div style={{background: '#fef2f2', borderRadius: '8px', padding: '20px', borderLeft: '4px solid #ef4444'}}>

**❌ Before/Problem/Don't**

Content here. Can include bullets:
- Point one
- Point two

</div>

<div style={{background: '#f0fdf4', borderRadius: '8px', padding: '20px', borderLeft: '4px solid #22c55e'}}>

**✓ After/Solution/Do**

Content here. Can include bullets:
- Point one
- Point two

</div>

</div>
```

**Color options:**

| Purpose | Background | Border | Emoji |
|---------|------------|--------|-------|
| Negative/Before/Problem | `#fef2f2` | `#ef4444` | ❌ |
| Positive/After/Solution | `#f0fdf4` | `#22c55e` | ✓ |
| Neutral/Category A | `#f3f4f6` | `#6b7280` | — |
| Warning/Caution | `#fef3c7` | `#f59e0b` | ⚠️ |
| Info/Highlight | `#eff6ff` | `#3b82f6` | 💡 |

**Multi-card grid (3+ items):**

```jsx
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '2rem 0'}}>

<div style={{background: '#f0fdf4', borderRadius: '8px', padding: '20px', borderLeft: '4px solid #22c55e'}}>

**Card Title One**

Description or content here.

</div>

<div style={{background: '#f0fdf4', borderRadius: '8px', padding: '20px', borderLeft: '4px solid #22c55e'}}>

**Card Title Two**

Description or content here.

</div>

<div style={{background: '#f0fdf4', borderRadius: '8px', padding: '20px', borderLeft: '4px solid #22c55e'}}>

**Card Title Three**

Description or content here.

</div>

</div>
```

### Callout Component

```jsx
<Callout type="tip" title="Your Title Here">
Content here. Keep to 2-3 sentences max.
</Callout>
```

**Types:** `tip` (green), `warning` (yellow), `story` (blue)

### Inline Links to Other Posts

```jsx
See the [post title](/writing/post-slug) for more.
```

Always use `/writing/` prefix for internal post links.

---

## Research & Citation Workflow

### For Education/Research Posts

1. **Search first** — Use web search to find current statistics and studies
2. **Verify every source** — Click through, confirm the claim exists
3. **Cite inline** — Link statistics directly to sources in the text
4. **Add References section** — Full list at the end

### Inline Citation Format

```markdown
[67% of teachers](https://source-url.com/full-path) report feeling unprepared.
```

**Rules:**
- Statistic or key claim is the link text
- URL goes to the actual source (not a summary)
- Prefer primary sources (research papers, official reports) over news articles

### References Section Format

```markdown
---

## References

1. Author, A. (Year). [Title of Report](https://full-url.com). Organization.

2. Author, B. & Author, C. (Year). [Title of Study](https://full-url.com). Journal Name.

3. Organization Name. (Year). [Title](https://full-url.com).
```

### Source Quality Hierarchy

1. **Peer-reviewed research** — Academic journals, published studies
2. **Official reports** — RAND, government agencies, major foundations
3. **Industry surveys** — EdWeek Research, Gallup, Pew
4. **News coverage** — Only for current events, not statistics
5. **Blogs/opinion** — Avoid for factual claims

### Verification Checklist

Before including any statistic:
- [ ] Clicked the link—it loads
- [ ] Found the exact claim in the source
- [ ] Noted the date—is it current enough?
- [ ] Source is credible (not SEO content farm)
- [ ] If quoting a study, it's the actual study (not coverage of the study)

---

## The Anti-Slop Filter

Before writing anything, internalize what to AVOID. These patterns instantly signal "AI wrote this":

### Banned Phrases (Hard Rules)

Never use:
- "In today's fast-paced world/digital landscape..."
- "It's not about X—it's about Y" (the false dichotomy closer)
- "Game-changing," "revolutionary," "cutting-edge," "innovative"
- "At the end of the day..."
- "Let's dive in," "Let's unpack this," "Let's explore"
- "Furthermore," "Moreover," "Additionally" as transitions
- "It's important to note that..."
- "This is where X comes in"
- "Whether you're a [X] or a [Y]..."
- "The short answer is... The long answer is..."
- "And honestly?" (especially when followed by something not actually that honest)
- "Here's the kicker" / "And the best part?" / "Here's the part most people miss"
- "Here's the breakdown:"
- "No fluff" / "Shouting into the void"
- "Curious what others think" (performative engagement bait)
- "I'm going to state this as clearly as possible" (then 600 words that could be 2 sentences)

### The "Quiet" Epidemic

AI loves the word "quiet" as a modifier. Avoid:
- "Quiet confidence"
- "Quiet truth"
- "Quietly growing"
- "Quiet rebellion"

If the thing is true, just say it. You don't need to make it "quiet."

### Therapist Mode (Unsolicited Validation)

These phrases signal AI trying to be emotionally supportive without earning it:
- "You're not imagining it"
- "You're not alone"
- "You're not broken"
- "You're not weak"
- "Do you want to sit with that for a while?"
- "Are you ready to go deeper?"
- "You're right to push back on that" (forced validation after any pushback)

### Structural Tells to Avoid

- **The Triple Header** — "What is X? Why does X matter? How to do X?" (every AI article ever)
- **The Hollow Transition** — "Now that we've covered X, let's move on to Y"
- **The Non-Specific List** — Bullets that could apply to any topic
- **The Hedged Conclusion** — "Ultimately, the best approach depends on your situation"
- **Committee Voice** — Writing that sounds like it was approved by legal
- **Contrast Framing on Repeat** — "It's not X, it's Y" used over and over as a crutch
- **Over-Explicit Signposting** — "Here is the key takeaway" / "The important part is this" / "Let me be clear about one thing"
- **Fragmented Pseudo-Profundity** — Short. Sentences. That feel. Reflective. But say nothing.
- **Misfit Metaphors** — Comparisons that sound smart but feel slightly off, like the writer doesn't fully understand what they're describing

### What to Do Instead

| AI Pattern | Human Alternative |
|------------|-------------------|
| "There are several reasons why..." | Jump straight to reason #1 |
| "It's worth noting that..." | Just state the thing |
| "This can help you..." | "This does X" (be direct) |
| "Many experts believe..." | Name the expert or cut it |
| "In conclusion..." | No announcement needed—just conclude |

### Your Own Pattern Staleness

Even good moves become tics if overused. Watch for these in your own writing:

**Structural moves to rotate (don't use the same one in consecutive posts):**
- "This isn't X. It's Y." — the reframe
- "The [adjective] truth:" — the reveal ("honest truth," "boring truth," "brutal truth")
- Numbered shifts/principles (Shift 1, Shift 2...)
- Colon-after-bold headers (**The vision:** / **The reality:**)
- "Three questions that..." — the framework tease
- "The key insight:" — the pivot

**Self-check before publishing:** Scan your last 3 posts. If the same structural move appears in all of them, vary this one.

**The intro test:** Read your last 3 opening paragraphs back-to-back. Do they sound like the same template with different words? If yes, rewrite.

---

## The Tactical Setup

Before outlining, answer these questions (don't skip):

1. **What's the specific pain point?** (Not "productivity" — that's too vague. "Spending 3 hours on weekly reports that nobody reads" is specific.)

2. **What are the 2-4 tactical takeaways?** (The Meat — what will they DO differently after reading?)

3. **What's your unique angle?** (Why should they read YOUR take vs. the 50 other posts on this topic?)

4. **What evidence do you have?** (Data, benchmarks, case studies, personal experience)

---

## Outline Framework

Use this structure for tactical guides and blog posts:

```markdown
# [Working Title]

## The Hook (2-3 sentences max)
- The Problem: [Specific, felt pain]
- The Promise: "Here's exactly how to [specific outcome]"

## The Meat

### Tactic 1: [Action-oriented title]
- **The move**: [What to actually do]
- **Why it works**: [Brief rationale]
- **Example**: [Concrete illustration]
- [VISUAL: Diagram/screenshot/template placeholder]

### Tactic 2: [Action-oriented title]
- **The move**: [What to actually do]
- **Watch out for**: [Common pitfall]
- **Example**: [Concrete illustration]
- [VISUAL: Before/after, workflow, or meme]

### Tactic 3: [Action-oriented title]
- **The move**: [What to actually do]
- **The proof**: [Data point or case study]
- [VISUAL: Chart, comparison, or screenshot]

## The Bottom Line
- Summary as single paragraph (not bullets)
- The "so what" — why this matters NOW
- One clear next step

## Research Gaps
- [ ] Need data on [specific claim]
- [ ] Find example of [concept in action]
- [ ] Source for [assertion]
```

---

## Bold-First Rule

Every bullet point starts with the insight in **bold**. The reader scanning should get value from bold text alone.

**Bad:**
- You should always test your headlines before publishing to see which ones perform better with your audience.

**Good:**
- **Test headlines before publishing.** A/B test 2-3 options; pick the winner after 100 impressions.

---

## Visual Cadence

Insert a visual element every 300-500 words:
- JSX grid comparison (see patterns above)
- Screenshot of a tool or interface
- Simple diagram or flowchart
- Callout component
- Code snippet or template

Mark these in your outline: `[VISUAL: description]`

---

## Voice Preservation

### Calibration Questions

Ask periodically while drafting:
- "Does this sound like something I'd actually say?"
- "Would I be embarrassed to read this aloud?"
- "Is this how I'd explain it to a peer over coffee?"

### Tone Markers for KAIAK Content

- **Direct but warm** — Not cold/corporate, not overly casual
- **Peer-to-peer** — You're the knowledgeable colleague, not the guru
- **Specific over general** — Numbers, names, concrete examples
- **Permission to be opinionated** — Take a stance, don't hedge everything

### Phrases That Sound Human

- "Here's the thing..."
- "I've seen this go wrong when..."
- "The real problem is..."
- "What actually works is..."
- "Let me be specific..."
- "This sounds obvious, but..."

---

## Education/Research Post Checklist

For posts in the `education` pillar or any research-heavy content:

### Before Writing
- [ ] Identified 3-5 key statistics to anchor the post
- [ ] Searched for recent research (prefer last 12-18 months)
- [ ] Verified all sources load and contain claimed information
- [ ] Determined which stat belongs in hero section

### Structure Check
- [ ] Hero section with 2-4 linked statistics
- [ ] JSX grids instead of markdown tables for comparisons
- [ ] All statistics linked inline to sources
- [ ] Callouts used for key insights (not decoration)
- [ ] FAQs section addresses common questions
- [ ] References section lists all sources

### Frontmatter Check
- [ ] Pillar set to `education` (or appropriate pillar)
- [ ] 3 interlinks to related posts (verify slugs exist)
- [ ] Keywords include search terms
- [ ] Description is 150-160 characters

### Final Verification
- [ ] Every link clicked and working
- [ ] No `[INPUT NEEDED]` placeholders remaining
- [ ] No `BeforeAfter` component (use JSX grid instead)
- [ ] Dates in sources are recent enough to be credible

---

## Final Polish Checklist (All Posts)

### Content Quality
- [ ] Every claim is specific (no "many," "various," "several")
- [ ] Examples are concrete and named
- [ ] The "so what" is clear within first 3 paragraphs
- [ ] Takeaways are actionable (reader knows what to DO)

### Anti-Slop Check
- [ ] No banned phrases
- [ ] Transitions are invisible (not announced)
- [ ] Varied sentence structure
- [ ] No hedging in conclusion

### Voice Check
- [ ] Sounds like peer-to-peer conversation
- [ ] Would read naturally aloud
- [ ] Personality comes through

### Pattern Staleness Check
- [ ] Scanned last 3 posts for repeated structural moves
- [ ] This intro doesn't mirror the last one
- [ ] Varied callout titles (not reusing "The key insight" again)
- [ ] Different section rhythm than recent posts

### Structure Check
- [ ] Bold-first on all bullets
- [ ] Visual every 300-500 words
- [ ] Hook delivers promise within first 100 words
- [ ] Clear single CTA at end (if appropriate)

---

## Quick Commands

**Start a new piece**:
```
Help me outline a post about [topic]. The specific problem I'm solving is [pain point]. My unique angle is [what only I can say]. Pillar: [pillar name].
```

**Research a topic**:
```
Search for recent statistics and research on [topic]. I need 3-5 credible data points for a blog post.
```

**Get section feedback**:
```
Review this section. Check for AI-sounding phrases and suggest where I need more specifics.
```

**Improve a hook**:
```
This hook is weak: [paste]. Give me 3 stronger alternatives.
```

**Anti-slop check**:
```
Scan this draft for AI-sounding patterns and flag anything that needs to be more human.
```

**Convert to JSX grid**:
```
Convert this markdown table to a JSX grid pattern with appropriate colors.
```

**Final polish**:
```
Run the final checklist on this draft. Be ruthless.
```
