import Image from 'next/image';

export default function AuthorBio() {
  return (
    <div className="flex items-center gap-4 py-8 border-t border-slate-200 dark:border-slate-700">
      <div className="relative w-14 h-14 flex-shrink-0">
        <Image
          src="/benedict.png"
          alt="Benedict Rinne"
          fill
          className="rounded-full object-cover"
          sizes="56px"
        />
      </div>
      <div>
        <p className="font-medium text-navy dark:text-white">Benedict Rinne, M.Ed.</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Founder of KAIAK. Helping international school leaders simplify operations with AI.{' '}
          <a
            href="https://linkedin.com/in/benedictrinne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            Connect on LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}
