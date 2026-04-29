"use client";

export default function ContactPage() {
  return (
    <section className="py-10 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          LET'S CONNECT
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mt-8">
          <a
            href="mailto:kadeejabai@gmail.com"
            className="group flex items-center gap-3 px-6 py-4 bg-gray-950 border border-gray-800 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <MailIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors font-mono tracking-wider">kadeejabai@gmail.com</span>
            <ArrowUpRightIcon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors ml-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/kadeeja-bai-418321128"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-gray-950 border border-gray-800 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <LinkedInIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors font-mono tracking-wider">LinkedIn Profile</span>
            <ArrowUpRightIcon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors ml-2" />
          </a>
          <a
            href="https://www.youtube.com/@kadeejabai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-gray-950 border border-gray-800 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <YoutubeIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors font-mono tracking-wider">YouTube Channel</span>
            <ArrowUpRightIcon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}
