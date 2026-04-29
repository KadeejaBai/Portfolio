"use client";

export default function CodingPage() {
  return (
    <section className="py-10 grid md:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[60vh]">
      <div className="md:col-span-12 space-y-8 text-gray-300 leading-relaxed font-light flex flex-col items-start text-left">
        <h2 className="text-3xl font-bold tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
          CODING
        </h2>
        <div className="max-w-3xl space-y-6">
          <p>
            With over 8 years of experience in JavaScript, I specialize in architecting high-scale commerce journeys where analytical thinking meets creative problem-solving. My work focuses on crafting seamless user flows and high-performance systems that balance technical complexity with intuitive design.
          </p>
          <p>
            I began my career developing automation tools using image processing algorithms, a foundation in technical precision that eventually led me to master LightningJS for large-scale TV and streaming applications. My commitment to building reliable, innovative technology is backed by a patent in Automated Test Systems (IN 428225).
          </p>
          <p>
            At my core, I am a builder. Beyond enterprise architecture, I enjoy exploring new frameworks to create small, purposeful apps that simplify daily life and reduce stress. Whether I am designing for millions of users or tinkering with a new tool for a personal project, I thrive on turning complex challenges into elegant, functional experiences.
          </p>
        </div>
        <div className="w-full max-w-3xl p-6 bg-gray-900/40 border border-gray-700/50 rounded-sm relative overflow-hidden text-left mt-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 via-white to-gray-500" />
          <div className="grid grid-cols-2 gap-8 font-mono text-sm">
            <div>
              <h3 className="text-white mb-4 tracking-widest uppercase text-xs border-b border-gray-700 pb-2">STACK_TRACE</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> JavaScript / TypeScript / HTML5 </li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Lightning / Node.js / Next.js</li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Git / GitHub / VS Code</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4 tracking-widest uppercase text-xs border-b border-gray-700 pb-2">PROTOCOLS</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Always learning</li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Problem-solving</li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Communication</li>
                <li className="flex items-center gap-2"><span className="text-gray-500">›</span> Commerce Journey Expert</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
