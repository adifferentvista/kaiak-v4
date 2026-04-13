import { getAllPosts, getFeaturedPosts, getAllTags, pillarLabels, pillarColors } from '@/lib/posts';
import { Logo } from '../components/Icons';
import ThemeToggle from '../components/ThemeToggle';
import BlogContent from '../components/BlogContent';

export const metadata = {
  title: 'Blog | KAIAK',
  description: 'Thoughts on AI, systems, and reclaiming your time from administrative chaos.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const allTags = getAllTags();
  const activePillar = searchParams?.pillar || null;
  const activeTag = searchParams?.tag || null;
  const searchQuery = searchParams?.q || '';

  return (
    <BlogContent
      allPosts={allPosts}
      featuredPosts={featuredPosts}
      allTags={allTags}
      initialPillar={activePillar}
      initialTag={activeTag}
      initialSearch={searchQuery}
    />
  );
}
