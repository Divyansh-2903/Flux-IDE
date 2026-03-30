import { motion } from 'motion/react';

export function ProductPreview() {
  return (
    <section className="relative px-6 pb-32 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 rounded-2xl border border-white/10 bg-[#111117]/80 backdrop-blur-xl overflow-hidden shadow-[0_0_100px_-20px_rgba(59,130,246,0.3)]"
      >
        {/* Editor Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#0B0B0F]/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs font-mono text-[#A1A1AA]">src/components/Hero.tsx — Flux</span>
          </div>
        </div>
        
        {/* Editor Body */}
        <div className="flex flex-col md:flex-row h-[400px] md:h-[600px]">
          {/* Sidebar */}
          <div className="hidden md:block w-64 border-r border-white/10 bg-[#0B0B0F]/30 p-4">
            <div className="text-xs font-mono text-[#A1A1AA] mb-4 uppercase tracking-wider">Explorer</div>
            <div className="space-y-2 text-sm font-mono text-[#A1A1AA]">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">â</span> src
              </div>
              <div className="pl-4 space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-blue-400">â</span> components
                </div>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-white cursor-pointer">
                    <span className="text-blue-400">â</span> Hero.tsx
                  </div>
                  <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-white cursor-pointer">
                    <span className="text-blue-400">â</span> Navbar.tsx
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-white cursor-pointer">
                  <span className="text-blue-400">â</span> App.tsx
                </div>
                <div className="flex items-center gap-2 text-[#A1A1AA] hover:text-white cursor-pointer">
                  <span className="text-yellow-400">â</span> index.css
                </div>
              </div>
            </div>
          </div>
          
          {/* Code Area */}
          <div className="flex-1 p-6 overflow-hidden bg-[#0B0B0F]/50 font-mono text-sm leading-relaxed">
            <div className="flex">
              <div className="w-8 text-right pr-4 text-[#A1A1AA]/50 select-none">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
              </div>
              <div className="flex-1 text-[#A1A1AA]">
                <span className="text-[#7C3AED]">import</span> &#123; motion &#125; <span className="text-[#7C3AED]">from</span> <span className="text-green-400">'motion/react'</span>;<br/>
                <br/>
                <span className="text-[#7C3AED]">export function</span> <span className="text-blue-400">Hero</span>() &#123;<br/>
                &nbsp;&nbsp;<span className="text-[#7C3AED]">return</span> (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">section</span> <span className="text-yellow-200">className</span>=<span className="text-green-400">"relative flex min-h-screen"</span>&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">motion.div</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">initial</span>=&#123;&#123; opacity: <span className="text-orange-400">0</span>, y: <span className="text-orange-400">20</span> &#125;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">animate</span>=&#123;&#123; opacity: <span className="text-orange-400">1</span>, y: <span className="text-orange-400">0</span> &#125;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h1</span>&gt;Code in Flow.&lt;/<span className="text-blue-400">h1</span>&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">motion.div</span>&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">section</span>&gt;<br/>
                &nbsp;&nbsp;);<br/>
                &#125;
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
