import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | KAIAK',
  description: 'Terms governing use of kaiak.io and academy.kaiak.io.',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy-dark">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
          &larr; Back to home
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mt-8 mb-2">
          Terms of Service
        </h1>
        <p className="text-slate-500 mb-12">Last updated: March 29, 2026</p>

        <article className="prose-kaiak">
          <h2>Agreement</h2>
          <p>
            By using kaiak.io or academy.kaiak.io, you agree to these terms. If you
            don't agree, don't use the site. Simple as that.
          </p>

          <h2>What We Provide</h2>
          <p>
            KAIAK provides educational content, blog posts, online courses, downloadable
            resources, and an AI chat assistant. All content is created for informational
            and educational purposes.
          </p>

          <h2>Academy Accounts</h2>
          <ul>
            <li>You need an account to access course content on academy.kaiak.io</li>
            <li>You're responsible for keeping your login credentials secure</li>
            <li>One account per person — don't share account access</li>
            <li>We can suspend or terminate accounts that violate these terms</li>
          </ul>

          <h2>Course Content</h2>
          <p>
            When you enroll in a course (free or paid), you get a personal,
            non-transferable license to access the content for your own professional
            development. You may not:
          </p>
          <ul>
            <li>Redistribute, resell, or republish course materials</li>
            <li>Record, screenshot, or copy course content for distribution</li>
            <li>Use course content to create competing products</li>
            <li>Share your account credentials with others</li>
          </ul>
          <p>
            You're welcome to apply what you learn — that's the point. Implementing
            frameworks, using templates in your own work, and sharing concepts with
            colleagues is encouraged. Just don't copy and sell the materials.
          </p>

          <h2>AI Chat Assistant</h2>
          <p>
            The AI chat on our sites is powered by Anthropic's Claude. Important things
            to understand:
          </p>
          <ul>
            <li><strong>It can be wrong.</strong> AI generates responses based on patterns, not verified facts. Always verify important information independently.</li>
            <li><strong>It's not a substitute for professional advice.</strong> Nothing the AI says constitutes legal, financial, medical, or professional advice.</li>
            <li><strong>Don't share sensitive data.</strong> Do not enter student records, confidential business information, personal identification numbers, or any data you wouldn't want a third party to process.</li>
            <li><strong>We don't store conversations.</strong> Messages are sent to Anthropic for processing and are not retained by KAIAK.</li>
          </ul>

          <h2>Blog Content and Recommendations</h2>
          <p>
            Blog posts represent our views and experience as of the date published.
            AI tools, pricing, and features change frequently. We make reasonable
            efforts to keep information current but can't guarantee accuracy of every
            detail over time.
          </p>
          <p>
            Some posts contain affiliate links. See our{' '}
            <Link href="/disclosure">Affiliate Disclosure</Link> for details.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All original content on kaiak.io and academy.kaiak.io — including text,
            graphics, course materials, and code — is owned by KAIAK unless otherwise
            noted. Third-party tools, frameworks, and research cited in our content
            belong to their respective owners and are attributed accordingly.
          </p>

          <h2>Payments and Refunds</h2>
          <p>
            Paid courses are processed through Stripe. Prices are displayed in USD
            unless otherwise noted.
          </p>
          <p>
            If you're unsatisfied with a paid course, contact us within 14 days of
            purchase at <a href="mailto:ben@kaiak.io">ben@kaiak.io</a> for a full
            refund. No questions asked. After 14 days, refunds are at our discretion.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            KAIAK provides educational content and tools on an "as is" basis. We are
            not liable for:
          </p>
          <ul>
            <li>Decisions you make based on our content or AI chat responses</li>
            <li>Third-party tool performance, pricing changes, or service interruptions</li>
            <li>Data loss from account issues or technical problems</li>
            <li>Any indirect, incidental, or consequential damages</li>
          </ul>
          <p>
            Our maximum liability for any claim is limited to the amount you paid us
            in the 12 months preceding the claim, or $100, whichever is greater.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms. Continued use of the site after changes
            constitutes acceptance. The date at the top tells you when they were last
            revised.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of the jurisdiction in which KAIAK
            operates. Any disputes will be resolved through good-faith negotiation
            first.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{' '}
            <a href="mailto:ben@kaiak.io">ben@kaiak.io</a>.
          </p>
        </article>
      </div>
    </div>
  );
}
