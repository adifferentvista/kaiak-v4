import { getAllPosts, pillarLabels } from '@/lib/posts';

function stripMdx(content) {
  return content
    .replace(/^import\s+.*$/gm, '')
    .replace(/<\w+\s+[^>]*\/>/g, '')
    .replace(/<\/?\w+[^>]*>/g, '')
    .replace(/^export\s+.*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export async function GET() {
  const baseUrl = 'https://kaiak.io';
  const posts = getAllPosts();

  const escapeXml = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  const items = posts
    .map((post) => {
      // Use the post's actual featured image
      const imageUrl = post.image ? `${baseUrl}${post.image}` : null;
      const imageType = post.image?.endsWith('.webp') ? 'image/webp' : 'image/png';
      const imageTag = imageUrl
        ? `\n      <enclosure url="${imageUrl}" type="${imageType}" length="0"/>`
        : '';

      const categoryLabel = pillarLabels[post.pillar] || post.pillar;

      // Flipboard requires 300+ char descriptions — pad with content excerpt if needed
      let description = post.description || '';
      if (description.length < 300) {
        const contentExcerpt = stripMdx(post.content).slice(0, 500).replace(/\n/g, ' ').trim();
        description = description + ' ' + contentExcerpt;
        description = description.slice(0, 500);
      }

      const fullContent = stripMdx(post.content);

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(description)}</description>
      <dc:creator>Benedict Rinne</dc:creator>
      <category>${escapeXml(categoryLabel)}</category>
      <content:encoded><![CDATA[${fullContent}]]></content:encoded>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>${imageTag}
    </item>`;
    })
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>KAIAK — AI Systems for Leaders</title>
    <link>${baseUrl}</link>
    <description>AI automation workflows, content systems, and practical tools for leaders and professionals. By Benedict Rinne.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/kaiak-logo-png.png</url>
      <title>KAIAK</title>
      <link>${baseUrl}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
