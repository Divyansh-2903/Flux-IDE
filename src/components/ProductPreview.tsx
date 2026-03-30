import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';

export function ProductPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);

  // Mouse parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
        mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  const springConfig = { damping: 40, stiffness: 50, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const parallaxY = useTransform(smoothY, [-1, 1], [-15, 15]);
  const parallaxRotateX = useTransform(smoothY, [-1, 1], [3, -3]);
  const parallaxRotateY = useTransform(smoothX, [-1, 1], [-3, 3]);

  return (
    <section ref={ref} className="relative px-6 pb-48 mx-auto max-w-7xl perspective-[2000px]">
      <motion.div
        style={{ 
          scale, 
          opacity, 
          rotateX,
          x: parallaxX,
          y: parallaxY,
          rotateY: parallaxRotateY,
          transformPerspective: 2000 
        }}
        className="relative z-10 rounded-2xl border border-white/10 bg-[#0B0B0F]/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_120px_-20px_rgba(229,107,48,0.2)] ring-1 ring-white/5 will-change-transform"
      >
        {/* Editor Header */}
        <div className="flex items-center px-4 py-4 border-b border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[11px] font-mono text-[#A1A1AA]/70 tracking-widest uppercase">src/components/Hero.tsx</span>
          </div>
        </div>
        
        {/* Editor Body */}
        <div className="flex flex-col md:flex-row h-[400px] md:h-[650px]">
          {/* Sidebar */}
          <div className="hidden md:block w-64 border-r border-white/5 bg-white/[0.01] p-6">
            <div className="text-[10px] font-mono text-[#A1A1AA]/50 mb-6 uppercase tracking-widest">Explorer</div>
            <div className="space-y-3 text-xs font-mono text-[#A1A1AA]/80">
              <div className="flex items-center gap-3 text-white">
                <span className="text-[#E56B30] opacity-80">â</span> src
              </div>
              <div className="pl-5 space-y-3 border-l border-white/5 ml-1.5 mt-3">
                <div className="flex items-center gap-3 text-white">
                  <span className="text-[#E56B30] opacity-80">â</span> components
                </div>
                <div className="pl-5 space-y-3 border-l border-white/5 ml-1.5 mt-3">
                  <div className="flex items-center gap-3 text-white cursor-pointer bg-white/5 -ml-5 pl-5 py-1 rounded-r-md border-l-2 border-[#E56B30]">
                    <span className="text-[#E56B30] opacity-80">â</span> Hero.tsx
                  </div>
                  <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                    <span className="text-[#E56B30] opacity-80">â</span> Navbar.tsx
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                  <span className="text-[#E56B30] opacity-80">â</span> App.tsx
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                  <span className="text-[#F2A65A] opacity-80">â</span> index.css
                </div>
              </div>
            </div>
          </div>
          
          {/* Code Area */}
          <div className="flex-1 p-8 overflow-hidden bg-transparent font-mono text-[13px] leading-[1.8]">
            <div className="flex">
              <div className="w-10 text-right pr-6 text-[#A1A1AA]/30 select-none">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
              </div>
              <div className="flex-1 text-[#A1A1AA]/90">
                <span className="text-[#C678DD]">import</span> &#123; motion &#125; <span className="text-[#C678DD]">from</span> <span className="text-[#98C379]">'motion/react'</span>;<br/>
                <br/>
                <span className="text-[#C678DD]">export function</span> <span className="text-[#61AFEF]">Hero</span>() &#123;<br/>
                &nbsp;&nbsp;<span className="text-[#C678DD]">return</span> (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#E06C75]">section</span> <span className="text-[#D19A66]">className</span>=<span className="text-[#98C379]">"relative flex min-h-screen"</span>&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#E06C75]">motion.div</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#D19A66]">initial</span>=&#123;&#123; opacity: <span className="text-[#D19A66]">0</span>, y: <span className="text-[#D19A66]">20</span> &#125;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#D19A66]">animate</span>=&#123;&#123; opacity: <span className="text-[#D19A66]">1</span>, y: <span className="text-[#D19A66]">0</span> &#125;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#E06C75]">h1</span>&gt;Code in Flow.&lt;/<span className="text-[#E06C75]">h1</span>&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#E06C75]">motion.div</span>&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#E06C75]">section</span>&gt;<br/>
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
