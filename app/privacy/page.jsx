import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | KAIAK',
  description: 'How KAIAK collects, uses, and protects your data across kaiak.io and academy.kaiak.io.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream dark:bg-navy-dark">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
          &larr; Back to home
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl text-navy dark:text-white mt-8 mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-12">Last updated: March 29, 2026</p>

        <article className="prose-kaiak">
          <h2>Who We Are</h2>
          <p>
            KAIAK is operated by Benedict Rinne. We run two web properties:
          </p>
          <ul>
            <li><strong>kaiak.io</strong> — blog, services, and resources</li>
            <li><strong>academy.kaiak.io</strong> — online course platform</li>
          </ul>
          <p>
            This policy covers both. If you have questions, email{' '}
            <a href="mailto:ben@kaiak.io">ben@kaiak.io</a>.
          </p>

          <h2>What We Collect</h2>

          <h3>When you visit the site</h3>
          <p>
            We use Vercel Analytics and Web Vitals for basic traffic data — page views,
            load times, and referral sources. This is aggregate data. We don't use cookies
            for tracking. We don't run Google Analytics.
          </p>

          <h3>When you subscribe to the newsletter</h3>
          <p>
            We collect your first name and email address through ConvertKit. ConvertKit
            stores this data on their servers under their{' '}
            <a href="https://convertkit.com/privacy" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>. You can unsubscribe at any time using the link in any email.
          </p>

          <h3>When you create an academy account</h3>
          <p>
            On academy.kaiak.io, you can sign up with email/password or Google OAuth.
            We collect:
          </p>
          <ul>
            <li>Email address</li>
            <li>Display name (from Google, or what you provide)</li>
            <li>Course progress (which lessons you've completed)</li>
            <li>Quiz responses</li>
          </ul>
          <p>
            Authentication is handled by Supabase. Your password is never stored in
            plain text. Google OAuth follows Google's standard consent flow — we receive
            your name and email, nothing else.
          </p>

          <h3>When you use the AI chat</h3>
          <p>
            Both kaiak.io and academy.kaiak.io include an AI chat assistant powered by
            Anthropic's Claude. Your messages are sent to Anthropic's API for processing.
            We do not store chat conversations. Anthropic's data handling is governed by
            their{' '}
            <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>.
          </p>
          <p>
            <strong>Do not share sensitive personal information, student data, or
            confidential organizational data in the chat.</strong> It is not a secure
            communication channel.
          </p>

          <h3>When you make a purchase</h3>
          <p>
            Payments are processed by Stripe. We do not see or store your full card
            number. Stripe handles all payment data under their{' '}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>. We receive a transaction record (amount, date, product purchased) for
            our records.
          </p>

          <h2>How We Use Your Data</h2>
          <ul>
            <li>To provide the services you signed up for (courses, newsletter, resources)</li>
            <li>To track your course progress so you can pick up where you left off</li>
            <li>To send you the newsletter (only if you subscribed)</li>
            <li>To respond to your messages if you contact us</li>
            <li>To improve the site based on aggregate usage patterns</li>
          </ul>
          <p>
            We don't sell your data. We don't share it with third parties for advertising.
            We don't build profiles for targeting.
          </p>

          <h2>Third-Party Services</h2>
          <p>We use the following services that process your data:</p>

          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Purpose</th>
                <th>Data Processed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel</td>
                <td>Hosting and analytics</td>
                <td>Page views, performance data</td>
              </tr>
              <tr>
                <td>Supabase</td>
                <td>Authentication and database</td>
                <td>Account data, course progress</td>
              </tr>
              <tr>
                <td>Google OAuth</td>
                <td>Sign-in option</td>
                <td>Name, email (from your Google account)</td>
              </tr>
              <tr>
                <td>ConvertKit</td>
                <td>Newsletter</td>
                <td>Name, email</td>
              </tr>
              <tr>
                <td>Anthropic (Claude)</td>
                <td>AI chat assistant</td>
                <td>Chat messages (not stored by us)</td>
              </tr>
              <tr>
                <td>Stripe</td>
                <td>Payment processing</td>
                <td>Payment details (handled by Stripe)</td>
              </tr>
            </tbody>
          </table>

          <h2>Cookies</h2>
          <p>
            We use essential cookies only — session cookies for authentication on
            academy.kaiak.io and theme preference (dark/light mode). We don't use
            tracking cookies or third-party advertising cookies.
          </p>

          <h2>Your Rights</h2>
          <p>You can:</p>
          <ul>
            <li><strong>Access your data</strong> — email us and we'll tell you what we have</li>
            <li><strong>Delete your account</strong> — email us and we'll remove your academy account and all associated data</li>
            <li><strong>Unsubscribe</strong> — click the link in any newsletter email</li>
            <li><strong>Export your data</strong> — email us for a copy of your data</li>
          </ul>
          <p>
            If you're in the EU, you have additional rights under GDPR including the right
            to rectification, restriction of processing, and the right to lodge a complaint
            with a supervisory authority.
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep your account data for as long as your account is active. Newsletter
            data is retained until you unsubscribe. If you request account deletion, we
            remove your data within 30 days.
          </p>

          <h2>Children</h2>
          <p>
            Our services are designed for adults — school leaders, educators, and
            professionals. We do not knowingly collect data from children under 16. If
            you believe a child has provided us with personal data, contact us and we'll
            delete it.
          </p>

          <h2>Changes</h2>
          <p>
            We'll update this page if our practices change. The date at the top tells
            you when it was last revised.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about your data? Email{' '}
            <a href="mailto:ben@kaiak.io">ben@kaiak.io</a>.
          </p>
        </article>
      </div>
    </div>
  );
}
