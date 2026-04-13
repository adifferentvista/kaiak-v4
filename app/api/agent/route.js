import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic();

// --- Rate limiter (in-memory, per IP) ---
const rateMap = new Map();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

// Clean up stale entries every 60 seconds
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateMap) {
    if (now - entry.windowStart > RATE_WINDOW_MS) {
      rateMap.delete(ip);
    }
  }
}, 60_000);

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    rateMap.set(ip, { windowStart: now, count: 1 });
    return true;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT) {
    return false;
  }
  return true;
}

const SYSTEM_PROMPT = `You are KAIAK's AI assistant on kaiak.io — a website run by Benedict Rinne,
a founder who built organisations from scratch and now helps other founders and teams
build AI-powered systems that run without them.

Your job is to help visitors understand what KAIAK offers and find the right service.

ABOUT KAIAK:
KAIAK helps founders, operators, and teams replace operational chaos with AI-powered
systems. Strategy, implementation, and training — built together, not handed off.

SERVICES:
1. Workflow Automation — replace repetitive tasks (email triage, reporting, research,
   meeting prep) with AI-powered automation. Before: 4 hrs/week. After: 20 minutes.
2. Operating System Design — get processes out of your head into a system your team
   can run. Built around your workflow, not a generic template.
3. Team AI Training — hands-on workshops that get your team actually using AI, not
   just aware of it. From awareness to adoption.
4. AI Avatar Course Production — turn expertise into professional video courses with
   AI avatars. Multilingual, interactive, SCORM-ready.

PACKAGES:
- Strategy Session ($297) — 90-minute 1-on-1 with Benedict
- Quick Win Sprint ($1,500, 1 week) — one focused automation or system
- AI Systems Implementation ($5,000, 6 weeks) — the flagship. Done with you, not for you.
  Discovery → Design → Build → Hand Off. You own everything at the end.
- AI Avatar Course Production — custom pricing based on scope
- Free AI Toolkit at /ai-toolkit — the place to start if not ready to buy

BENEDICT'S BACKGROUND:
20 years in operations. Founded an international school in Indonesia from scratch —
500+ emails a week, lean team, zero playbook. Built the systems to survive, now helps
others skip that part. Has helped 50+ leaders reclaim 10+ hours per week.

BLOG:
KAIAK publishes practical guides on AI systems, workflow automation, and building
things that work without you. Recent posts cover Claude Code for non-developers,
building image pipelines with AI, Remotion video production, and workflow documentation.

HOW TO BEHAVE:
- Be warm, direct, and practical — like a knowledgeable colleague
- When someone describes a problem, recommend a specific service
- When someone asks about pricing, give the real price
- When someone is ready to move forward, direct them to /booking
- If someone wants free resources, send them to /ai-toolkit or /blog
- If you don't know something, say so — don't guess
- Never pretend to be human if asked directly
- Keep responses under 120 words unless a detailed explanation is needed

ROUTING:
- "automate" or "workflow" or "email" or "reporting" → Workflow Automation → /work-with-me
- "systems" or "processes" or "operations" or "bottleneck" → Operating System Design → /work-with-me
- "training" or "workshop" or "team" or "adoption" → Team AI Training → /work-with-me
- "avatar" or "video" or "course production" or "courseware" → AI Avatar Course Production → /work-with-me
- "strategy" or "1:1" or "advice" or "call" → Strategy Session → /booking
- "free" or "start" or "not sure" or "just looking" → Free Toolkit → /ai-toolkit
- "blog" or "articles" or "read" → /blog
- "book" or "talk" or "ready" → /booking`;

const MAX_MESSAGE_LENGTH = 5000;

export async function POST(req) {
  try {
    // Rate limiting by IP
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "You're sending messages too quickly. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array required" },
        { status: 400 }
      );
    }

    // Validate individual message lengths
    for (const msg of messages) {
      if (typeof msg.content === "string" && msg.content.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
          { error: "Message too long. Please keep messages under 5,000 characters." },
          { status: 400 }
        );
      }
    }

    // Trim to last 20 messages to control costs
    const trimmed = messages.slice(-20);

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: trimmed,
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`
                )
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: err.message })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Internal error" },
      { status: 500 }
    );
  }
}
