import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export const pillarLabels = {
  'practical-ai': 'Practical AI',
  'systems-thinking': 'Systems Thinking',
  'leadership': 'Leadership',
  'no-admin-life': 'The No-Admin Life',
};

export const pillarColors = {
  'practical-ai': { bg: '#ede9fe', text: '#7c3aed' },
  'systems-thinking': { bg: '#fef3c7', text: '#d97706' },
  'leadership': { bg: '#d1fae5', text: '#059669' },
  'no-admin-life': { bg: '#fce7f3', text: '#db2777' },
};

export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => name.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      pillar: data.pillar || 'practical-ai',
      contentType: data.contentType || 'evergreen',
      readTime: data.readTime || '5 min read',
      featured: data.featured || false,
      interlinks: data.interlinks || [],
      image: data.image,
    };
  } catch {
    return null;
  }
}

// Helper function to check if a post should be published
function isPublished(post) {
  if (!post.date) return true; // No date = publish immediately
  const postDate = new Date(post.date);
  const today = new Date();
  // Set both to midnight for date-only comparison
  postDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return postDate <= today;
}

export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)
    .filter(isPublished) // ← Only show posts with date <= today
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
  return posts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostsByPillar(pillar) {
  return getAllPosts().filter((post) => post.pillar === pillar);
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  const allPosts = getAllPosts();
  
  // First, check for explicit interlinks
  const interlinked = (currentPost.interlinks || [])
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  // Then fill with same-pillar posts
  const samePillar = allPosts.filter(
    (p) => p.pillar === currentPost.pillar && p.slug !== currentSlug
  );

  const combined = [...interlinked, ...samePillar];
  const unique = Array.from(new Map(combined.map((p) => [p.slug, p])).values());
  
  return unique.slice(0, limit);
}

export function getLatestPosts(limit = 3) {
  return getAllPosts().slice(0, limit);
}