'use client';

import { useState, useRef } from 'react';

export default function CodeBlock({ children, ...props }) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef(null);

  // Extract language from className set by rehype-highlight (e.g., "hljs language-python")
  const classStr = props.className || '';
  const langMatch = classStr.match(/language-(\w+)/);
  const lang = langMatch ? langMatch[1] : '';

  function handleCopy() {
    const code = preRef.current?.textContent || '';
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        {lang && <span className="code-block-lang">{lang}</span>}
        <button
          onClick={handleCopy}
          className="code-block-copy"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
