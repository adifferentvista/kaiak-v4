// Logo component - NO Link wrapper (parent handles linking to prevent nested <a> hydration error)
export const Logo = () => (
  <svg 
    width="100" 
    height="34" 
    viewBox="0 0 260 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-8 w-auto hover:opacity-90 transition-opacity"
  >
    {/* Left K */}
    <rect x="10" y="20" width="12" height="60" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
    <path d="M28 50 L48 20 L62 20 L38 55 L62 80 L48 80 L28 55" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
    
    {/* First A */}
    <text x="85" y="80" textAnchor="middle" className="fill-[#0F172A] dark:fill-[#F8FAFC]" fontFamily="monospace" fontWeight="bold" fontSize="64">A</text>
    
    {/* Center I (the "Spark") - Orange dot + stem */}
    <rect x="122" y="15" width="16" height="15" fill="#EA580C"/>
    <rect x="122" y="35" width="16" height="45" className="fill-[#334155] dark:fill-[#F8FAFC]"/>
    
    {/* Second A */}
    <text x="175" y="80" textAnchor="middle" className="fill-[#0F172A] dark:fill-[#F8FAFC]" fontFamily="monospace" fontWeight="bold" fontSize="64">A</text>
    
    {/* Right K (mirrored) */}
    <g transform="translate(260, 0) scale(-1, 1)">
      <rect x="10" y="20" width="12" height="60" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
      <path d="M28 50 L48 20 L62 20 L38 55 L62 80 L48 80 L28 55" className="fill-[#0F172A] dark:fill-[#F8FAFC]"/>
    </g>
  </svg>
);

// Icon components
export const Icons = {
  Check: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  
  ArrowRight: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  
  Menu: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  
  Close: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  
  Mail: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  
  Calendar: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  
  Clock: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  
  Download: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  
  ExternalLink: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
};

export default Icons;
