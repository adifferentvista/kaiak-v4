"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const STARTER_PROMPTS = [
  "Can you build an AI agent for my school?",
  "How does avatar training production work?",
  "Tell me about the workshop",
  "What's the free toolkit?",
];

export default function AgentWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Greeting on first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setMessages([
        {
          role: "assistant",
          content:
            "Hi — I'm KAIAK's AI assistant. I can help you find the right service, answer questions about AI for school leadership, or point you to something free to start with. What's on your mind?",
        },
      ]);
    }
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, hasOpened]);

  const sendMessage = useCallback(
    async (text) => {
      const userMessage = text || input.trim();
      if (!userMessage || isStreaming) return;

      const newMessages = [
        ...messages,
        { role: "user", content: userMessage },
      ];
      setMessages(newMessages);
      setInput("");
      setIsStreaming(true);

      // Add empty assistant message to stream into
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      try {
        const response = await fetch("/api/agent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newMessages }),
        });

        if (!response.ok) {
          let errorMsg = "Sorry, something went wrong. Email ben@kaiak.io directly and I'll get back to you.";
          try {
            const errData = await response.json();
            if (errData.error) errorMsg = errData.error;
          } catch {
            // Response wasn't JSON — use default message
          }
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "assistant", content: errorMsg };
            return updated;
          });
          setIsStreaming(false);
          return;
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) return;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ") && line !== "data: [DONE]") {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.text) {
                  setMessages((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                      role: "assistant",
                      content:
                        updated[updated.length - 1].content + data.text,
                    };
                    return updated;
                  });
                }
              } catch (e) {
                console.warn("Failed to parse SSE chunk:", e);
              }
            }
          }
        }
      } catch {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content:
              "Sorry, something went wrong. Email ben@kaiak.io directly and I'll get back to you.",
          };
          return updated;
        });
      } finally {
        setIsStreaming(false);
      }
    },
    [input, isStreaming, messages]
  );

  // Escape HTML entities to prevent XSS from AI-generated content
  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Linkify URLs in responses — escape first, then linkify safe paths
  function formatResponse(text) {
    const escaped = escapeHtml(text);
    return escaped.replace(
      /\/(booking|workshop|ai-toolkit|work-with-me)(\?[^\s)]*)?/g,
      (match) => `<a href="${match}" class="agent-link">${match}</a>`
    );
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPulse(false);
        }}
        aria-label={isOpen ? "Close assistant" : "Open KAIAK assistant"}
        className="agent-fab"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {showPulse && !isOpen && <span className="agent-fab-pulse" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="agent-window">
          {/* Header */}
          <div className="agent-header">
            <div className="agent-header-dot" />
            <div style={{ flex: 1 }}>
              <div className="agent-header-name">KAIAK Assistant</div>
              <div className="agent-header-sub">
                AI for leaders &middot; by Benedict Rinne
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="agent-header-close"
              aria-label="Minimize chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="agent-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`agent-msg ${msg.role === "user" ? "agent-msg-user" : "agent-msg-ai"}`}
              >
                {msg.role === "user" ? (
                  msg.content
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: formatResponse(msg.content),
                    }}
                  />
                )}
                {isStreaming &&
                  i === messages.length - 1 &&
                  msg.role === "assistant" && (
                    <span className="agent-cursor">|</span>
                  )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Starter prompts */}
          {messages.length === 1 && (
            <div className="agent-starters">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="agent-starter-btn"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="agent-input-area">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && sendMessage()
              }
              placeholder="Ask anything..."
              disabled={isStreaming}
              className="agent-input"
            />
            <button
              onClick={() => sendMessage()}
              disabled={isStreaming || !input.trim()}
              className="agent-send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .agent-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #0f172a;
          color: #fff;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .agent-fab:hover {
          transform: scale(1.08);
          background: #1e293b;
        }
        .dark .agent-fab {
          background: #ea580c;
        }
        .dark .agent-fab:hover {
          background: #f97316;
        }

        .agent-fab-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #ea580c;
          animation: agentPulse 2s ease-in-out infinite;
        }
        @keyframes agentPulse {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }

        .agent-window {
          position: fixed;
          bottom: 92px;
          right: 24px;
          width: 380px;
          max-height: 540px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16);
          display: flex;
          flex-direction: column;
          z-index: 9999;
          overflow: hidden;
          font-family: var(--font-sans, "Inter", sans-serif);
          animation: agentSlideUp 0.25s ease;
        }
        .dark .agent-window {
          background: #1e293b;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
        }
        @keyframes agentSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .agent-header {
          padding: 16px 20px;
          background: #0f172a;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .dark .agent-header {
          background: #0b1221;
        }
        .agent-header-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
        }
        .agent-header-name {
          font-weight: 700;
          font-size: 15px;
        }
        .agent-header-sub {
          font-size: 12px;
          opacity: 0.7;
          margin-top: 1px;
        }
        .agent-header-close {
          background: rgba(255,255,255,0.1);
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s, color 0.15s;
          flex-shrink: 0;
        }
        .agent-header-close:hover {
          background: rgba(255,255,255,0.2);
          color: #fff;
        }

        .agent-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 200px;
          max-height: 340px;
        }

        .agent-msg {
          max-width: 85%;
          padding: 10px 14px;
          font-size: 14px;
          line-height: 1.55;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .agent-msg-user {
          align-self: flex-end;
          background: #0f172a;
          color: #fff;
          border-radius: 16px 16px 4px 16px;
        }
        .dark .agent-msg-user {
          background: #ea580c;
        }
        .agent-msg-ai {
          align-self: flex-start;
          background: #f1f5f9;
          color: #1e293b;
          border-radius: 16px 16px 16px 4px;
        }
        .dark .agent-msg-ai {
          background: #334155;
          color: #e2e8f0;
        }

        .agent-link {
          color: #ea580c;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: rgba(234, 88, 12, 0.3);
          text-underline-offset: 2px;
        }
        .agent-link:hover {
          text-decoration-color: #ea580c;
        }
        .dark .agent-link {
          color: #f97316;
        }

        .agent-cursor {
          opacity: 0.4;
          animation: agentBlink 0.8s step-end infinite;
        }
        @keyframes agentBlink {
          50% { opacity: 0; }
        }

        .agent-starters {
          padding: 0 16px 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .agent-starter-btn {
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          background: #fff;
          font-size: 12px;
          cursor: pointer;
          color: #475569;
          white-space: nowrap;
          font-family: inherit;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .agent-starter-btn:hover {
          border-color: #ea580c;
          color: #ea580c;
        }
        .dark .agent-starter-btn {
          background: #334155;
          border-color: #475569;
          color: #94a3b8;
        }
        .dark .agent-starter-btn:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .agent-input-area {
          padding: 12px 16px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          gap: 8px;
        }
        .dark .agent-input-area {
          border-top-color: #475569;
        }

        .agent-input {
          flex: 1;
          padding: 9px 14px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          outline: none;
          background: #fff;
          color: #1e293b;
          font-family: inherit;
          transition: border-color 0.15s ease;
        }
        .agent-input:focus {
          border-color: #ea580c;
        }
        .dark .agent-input {
          background: #0f172a;
          border-color: #475569;
          color: #e2e8f0;
        }
        .dark .agent-input:focus {
          border-color: #f97316;
        }
        .agent-input:disabled {
          opacity: 0.5;
        }

        .agent-send {
          padding: 9px 14px;
          border-radius: 10px;
          background: #0f172a;
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease;
        }
        .agent-send:hover:not(:disabled) {
          background: #1e293b;
        }
        .agent-send:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .dark .agent-send {
          background: #ea580c;
        }
        .dark .agent-send:hover:not(:disabled) {
          background: #f97316;
        }

        @media (max-width: 480px) {
          .agent-window {
            width: calc(100vw - 32px);
            right: 16px;
            bottom: 88px;
            max-height: 70vh;
          }
        }
      `}</style>
    </>
  );
}
