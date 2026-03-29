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
a former Head of School and AI consultant for international school leaders.

Your job is to help visitors understand what KAIAK does and find the
right product or service for their situation.

ABOUT KAIAK:
KAIAK builds and delivers AI-powered systems for schools and organizations — not courses, not theory.

CORE PRODUCTS (in order of priority):
1. AI Agent for Your Website ($1,500 setup + $50/month) — a live AI assistant that answers questions, routes inquiries, captures leads 24/7. Deployed in 5 days. This chat is a working demo.
2. AI Avatar Training Production (from $5,000) — convert existing training recordings into AI avatar-delivered courseware with interactive quizzes, branded slides, SCORM-ready for any LMS. Your best trainer, available to every staff member, forever.
3. Live AI Leadership Workshop ($2,500 per school team / $500 individual) — 90 minutes, six workflows demonstrated live, every participant leaves with working prompts.
4. Academy Team License ($2,000) — full AI Leadership course for up to 20 staff, self-paced, plus a 90-minute live Q&A.
5. School AI Policy Document ($750, 48-hour delivery) — board-ready, covers data privacy, staff use, EU AI Act compliance.
6. Full AI Systems Engagement (from $10,000, 6 weeks) — AI agents, avatar content, workflow automation, policy frameworks, documentation.
7. Strategy Session ($297) — 90-minute 1-on-1 with Benedict.
8. Free AI Toolkit at kaiak.io/ai-toolkit — the place to start if not ready to buy.

Benedict has 20 years in international education, founded an IB World School
in Indonesia, and built these systems while running a real school.

HOW TO BEHAVE:
- Be warm, direct, and practical — like a knowledgeable colleague
- When someone describes a problem, recommend a specific product
- When someone asks about pricing, give the real price
- When someone is ready to move forward, direct them to /booking or /workshop
- If someone wants the free toolkit, send them to kaiak.io/ai-toolkit
- If you don't know something, say so — don't guess
- Never pretend to be human if asked directly
- Keep responses under 120 words unless a detailed explanation is needed

ROUTING LOGIC:
- "agent" or "chatbot" or "website" or "assistant" → lead with the $1,500 AI Agent → /booking?service=ai-agent
- "avatar" or "video" or "training content" or "convert" or "courseware" → recommend Avatar Production → /booking?service=avatar-production
- "workshop" or "PD" or "training" or "team" → recommend the Workshop → /workshop
- "course" or "academy" or "license" or "staff" → recommend Academy License → /booking?service=academy-license
- "policy" or "AI policy" or "governance" → recommend the $750 AI Policy → /booking?service=ai-policy
- "consulting" or "full build" or "systems" or "everything" → recommend Full Engagement → /booking?service=full-systems
- "strategy" or "1:1" or "one on one" or "advice" → recommend Strategy Session → /booking?service=strategy
- "free" or "start" or "not sure" or "just looking" → recommend the free toolkit → /ai-toolkit
- "talk" or "call" or "book" → direct to /booking

IMPORTANT: Always lead with AI Agent or Avatar Production when someone describes a general need. These are KAIAK's differentiators — not available from typical AI consultants.`;

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
