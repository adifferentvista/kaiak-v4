import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export default function sitemap() {
  const baseUrl = 'https://kaiak.io';
  
  // Get all blog posts
  const slugs = getAllPostSlugs();
  const blogUrls = slugs.map((slug) => {
    const post = getPostBySlug(slug);
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/second-brain-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogUrls];
}
