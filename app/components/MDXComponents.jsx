// Custom components for MDX blog posts
// These are server components - no 'use client' needed

export const Callout = ({ type = 'info', title, children }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    tip: 'bg-green-50 border-green-200 text-green-900',
    story: 'bg-purple-50 border-purple-200 text-purple-900',
  }

  return (
    <div className={`p-4 rounded-lg border my-6 ${styles[type] || styles.info}`}>
      {title && <p className="font-semibold mb-2">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  )
}

export const TimeSaved = ({ hours, task, frequency = 'per week' }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6 text-center">
    <p className="text-3xl font-bold text-green-700">{hours}+ hours saved</p>
    <p className="text-green-600 text-sm">{task} • {frequency}</p>
  </div>
)

export const BeforeAfter = ({ before, after, context }) => (
  <div className="grid md:grid-cols-2 gap-4 my-6">
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-xs font-semibold text-red-600 uppercase mb-2">Before</p>
      <p className="text-red-900 text-sm">{before}</p>
    </div>
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <p className="text-xs font-semibold text-green-600 uppercase mb-2">After</p>
      <p className="text-green-900 text-sm">{after}</p>
    </div>
    {context && (
      <p className="md:col-span-2 text-xs text-slate-500 text-center">{context}</p>
    )}
  </div>
)

export const Tool = ({ name, description, link, free }) => (
  <div className="border border-slate-200 rounded-lg p-4 my-4 flex items-start gap-4">
    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-lg">
      🔧
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <a href={link} className="font-medium text-navy hover:text-orange-600" target="_blank" rel="noopener noreferrer">
          {name}
        </a>
        {free && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Free</span>
        )}
      </div>
      <p className="text-sm text-slate-600 mt-1">{description}</p>
    </div>
  </div>
)

export const RelatedPost = ({ slug, title, context }) => (
  <a 
    href={`/blog/${slug}`} 
    className="block border border-slate-200 rounded-lg p-4 my-6 hover:border-slate-300 hover:shadow-sm transition-all no-underline"
  >
    {context && <p className="text-xs text-slate-500 mb-1">{context}</p>}
    <p className="font-medium text-navy">{title}</p>
  </a>
)

export const YouTube = ({ id, title }) => (
  <div className="my-6 aspect-video">
    <iframe
      className="w-full h-full rounded-lg"
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)

// FIXED: Changed /booking to /#contact
export const CallToAction = ({ 
  text = "Ready to get your time back?", 
  link = "/#contact" 
}) => (
  <div className="bg-navy text-white rounded-lg p-6 my-8 text-center">
    <p className="text-lg mb-4">{text}</p>
    <a 
      href={link}
      className="inline-block px-6 py-3 rounded-lg font-medium bg-amber-500 text-navy hover:bg-amber-400 transition-colors no-underline"
    >
      Book a Free Call
    </a>
  </div>
)

// Default export for MDXRemote
const MDXComponents = {
  Callout,
  TimeSaved,
  BeforeAfter,
  Tool,
  RelatedPost,
  YouTube,
  CallToAction,
}

export default MDXComponents
