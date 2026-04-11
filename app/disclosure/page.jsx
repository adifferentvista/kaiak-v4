import Link from 'next/link';

export const metadata = {
  title: 'Affiliate Disclosure | KAIAK',
  description: 'How KAIAK earns from affiliate recommendations and how we choose what to recommend.',
};

export default function Disclosure() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy-dark">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
          &larr; Back to home
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mt-8 mb-2">
          Affiliate Disclosure
        </h1>
        <p className="text-slate-500 mb-12">Last updated: March 29, 2026</p>

        <article className="prose-kaiak">
          <h2>The Short Version</h2>
          <p>
            Some links on this site are affiliate links. When you click one and make
            a purchase, I earn a commission at no extra cost to you. This helps support
            the site and allows me to keep creating free content.
          </p>
          <p>
            I only recommend tools I actually use in my own work. If something has an
            affiliate link, it's because I've used it professionally — not because
            someone offered me a commission.
          </p>

          <h2>How I Choose What to Recommend</h2>
          <p>
            I'm a former Head of School who now builds AI systems and courses for
            leaders and educators. Every tool I recommend on this site meets the same
            criteria:
          </p>
          <ul>
            <li><strong>I use it myself.</strong> Not "tried it once." I use it in production — for my own courses, client projects, or daily work.</li>
            <li><strong>It solves a real problem.</strong> I don't recommend tools because they're interesting. I recommend them because they save time, improve quality, or do something you can't easily do without them.</li>
            <li><strong>I'd recommend it without the commission.</strong> I've recommended these same tools in workshops, training sessions, and conversations long before affiliate links were involved.</li>
          </ul>

          <h2>Current Affiliate Relationships</h2>
          <p>
            I currently have affiliate partnerships with the following companies:
          </p>

          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>What They Do</th>
                <th>How I Use It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ElevenLabs</td>
                <td>AI voice cloning and text-to-speech</td>
                <td>Voice clone for my AI avatar courses</td>
              </tr>
              <tr>
                <td>HeyGen</td>
                <td>AI avatar video creation</td>
                <td>Produced two full courses with it</td>
              </tr>
            </tbody>
          </table>

          <p>
            This list will be updated as new partnerships are added. Tools that appear
            on the site without affiliate links (like NotebookLM, Claude, Perplexity)
            are recommended purely because they're useful.
          </p>

          <h2>What This Means for You</h2>
          <ul>
            <li>You never pay more by using an affiliate link — the price is the same either way</li>
            <li>Affiliate relationships don't influence my reviews — I'll tell you what doesn't work as readily as what does</li>
            <li>Blog posts with affiliate links will include a brief notice at the top or bottom</li>
            <li>Course content on academy.kaiak.io does not contain affiliate links</li>
          </ul>

          <h2>FTC Compliance</h2>
          <p>
            This disclosure is provided in accordance with the Federal Trade Commission's
            guidelines on endorsements and testimonials (16 CFR Part 255). The FTC requires
            that material connections between endorsers and advertisers be clearly disclosed.
          </p>

          <h2>Questions</h2>
          <p>
            If you're unsure whether a link is an affiliate link, or if you have questions
            about any recommendation, email{' '}
            <a href="mailto:ben@kaiak.io">ben@kaiak.io</a>. I'm happy to explain why I
            recommend anything on this site.
          </p>
        </article>
      </div>
    </div>
  );
}
