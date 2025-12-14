import { mdxComponents } from '@/app/components/MDXComponents';

export function useMDXComponents(components) {
  return {
    ...components,
    ...mdxComponents,
  };
}
