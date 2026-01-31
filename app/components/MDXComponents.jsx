import Link from 'next/link';

// Heading ID helpers
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getTextContent(children) {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getTextContent).join('');
  if (children?.props?.children) return getTextContent(children.props.children);
  return '';
}

// Heading components with auto-generated IDs
function H2({ children, ...props }) {
  const text = getTextContent(children);
  const id = slugify(text);
  return <h2 id={id} className="scroll-mt-24" {...props}>{children}</h2>;
}

function H3({ children, ...props }) {
  const text = getTextContent(children);
  const id = slugify(text);
  return <h3 id={id} className="scroll-mt-24" {...props}>{children}</h3>;
}

// Comparison table component
export function ComparisonTable({ columns, rows }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800">
            {columns.map((col, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-navy dark:text-white border-b border-slate-200 dark:border-slate-700">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Call to Action component
export function CallToAction({ 
  text = "Book a Call", 
  link = "/#contact",
  variant = "primary" 
}) {
  const styles = variant === 'primary' 
    ? 'bg-navy text-white hover:bg-navy-light' 
    : 'bg-white text-navy border border-slate-300 hover:bg-slate-50';
  
  return (
    <div className="my-8 p-6 bg-blue-gray rounded-lg border border-slate-200">
      <p className="text-slate-700 mb-4">
        Want help building systems like this for your organization?
      </p>
      <Link 
        href={link}
        className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${styles}`}
      >
        {text}
      </Link>
    </div>
  );
}

// Callout/highlight box
export function Callout({ type = 'info', title, children }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    tip: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    story: 'bg-purple-50 border-purple-200 text-purple-900',
  };

  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    tip: '💡',
    story: '📖',
  };

  return (
    <div className={`my-6 p-4 rounded-lg border-l-4 ${styles[type]}`}>
      {title && (
        <p className="font-semibold mb-2">
          {icons[type]} {title}
        </p>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

// Tool recommendation card
export function Tool({ name, description, link, free = false }) {
  const content = (
    <div className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors bg-white">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-navy">{name}</h4>
        {free && (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
            Free
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block my-4">
        {content}
      </a>
    );
  }

  return <div className="my-4">{content}</div>;
}

// Before/After comparison
export function BeforeAfter({ before, after, context }) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-4">
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">
          Before
        </p>
        <p className="text-slate-800">{before}</p>
      </div>
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">
          After
        </p>
        <p className="text-slate-800">{after}</p>
      </div>
      {context && (
        <p className="md:col-span-2 text-sm text-slate-500 italic">{context}</p>
      )}
    </div>
  );
}

// Time saved calculator/display
export function TimeSaved({ hours, task, frequency = "per week" }) {
  const yearly = Math.round(hours * 52);
  
  return (
    <div className="my-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-4xl font-bold text-emerald-700">{hours}h</span>
        <span className="text-slate-600">{frequency}</span>
      </div>
      <p className="text-slate-700 mb-2">saved by automating {task}</p>
      <p className="text-sm text-emerald-600">
        That&apos;s roughly <strong>{yearly} hours per year</strong> back in your life.
      </p>
    </div>
  );
}

// Internal link to related post
export function RelatedPost({ slug, title, context }) {
  return (
    <div className="my-6 p-4 border-l-4 border-slate-300 bg-slate-50">
      {context && <p className="text-sm text-slate-600 mb-2">{context}</p>}
      <Link 
        href={`/blog/${slug}`}
        className="font-medium text-navy hover:text-orange-600"
      >
        → {title}
      </Link>
    </div>
  );
}

// YouTube embed component
export function YouTube({ id, title = "Video" }) {
  return (
    <div className="my-8 aspect-video rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

// Default export as object for MDXRemote
const MDXComponents = {
  h2: H2,
  h3: H3,
  CallToAction,
  Callout,
  Tool,
  BeforeAfter,
  TimeSaved,
  RelatedPost,
  YouTube,
  ComparisonTable,
};

export default MDXComponents;
