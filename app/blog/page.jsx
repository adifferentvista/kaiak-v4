import { getAllPosts, getFeaturedPosts, pillarLabels, pillarColors } from '@/lib/posts';
import { Logo } from '../components/Icons';
import ThemeToggle from '../components/ThemeToggle';
import BlogContent from '../components/BlogContent';

export const metadata = {
  title: 'Blog | KAIAK',
  description: 'Thoughts on AI, systems, and reclaiming your time from administrative chaos.',
};

export default function BlogPage({ searchParams }) {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const activePillar = searchParams?.pillar || null;
  const searchQuery = searchParams?.q || '';

  return (
    <BlogContent 
      allPosts={allPosts}
      featuredPosts={featuredPosts}
      initialPillar={activePillar}
      initialSearch={searchQuery}
    />
  );
}
