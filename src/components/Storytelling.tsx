import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';

export function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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

  const parallaxX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const parallaxY = useTransform(smoothY, [-1, 1], [-30, 30]);
  const parallaxRotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const parallaxRotateY = useTransform(smoothX, [-1, 1], [-10, 10]);

  // Scene 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.35], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.35], [50, 0, -50]);

  // Scene 2
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5, 0.7], [50, 0, -50]);

  // Scene 3
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.85, 1], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.85, 1], [50, 0, -50]);

  // Visual scaling and base rotation from scroll
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-[#0B0B0F]">
      <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
        
        {/* Background Visual with Mouse Parallax */}
        <motion.div 
          style={{ 
            scale: visualScale, 
            opacity: visualOpacity,
            x: parallaxX,
            y: parallaxY,
            rotateX: parallaxRotateX,
            rotateY: parallaxRotateY
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[1000px] will-change-transform"
        >
          <div className="w-[80vw] md:w-[60vw] h-[60vh] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-3xl shadow-[0_0_100px_rgba(229,107,48,0.15)] flex flex-col overflow-hidden transform-style-3d">
            {/* Fake IDE Header */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]/50" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]/50" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]/50" />
            </div>
            {/* Fake IDE Body */}
            <div className="flex-1 p-8 flex flex-col gap-4 relative">
               <div className="w-1/2 h-4 rounded bg-white/10" />
               <div className="w-3/4 h-4 rounded bg-white/5" />
               <div className="w-2/3 h-4 rounded bg-white/5" />
               <div className="w-1/3 h-4 rounded bg-white/10 mt-8" />
               
               {/* Glowing accent inside the fake IDE */}
               <motion.div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#E56B30] rounded-full blur-[100px] opacity-20"
                 animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
            </div>
          </div>
        </motion.div>

        {/* Text Overlays */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-6 text-center pointer-events-none">
          <motion.div style={{ opacity: opacity1, y: y1, position: 'absolute' }} className="w-full">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6">
              The IDE, <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F2A65A] to-[#E56B30]">reimagined.</span>
            </h2>
            <p className="text-xl text-[#A1A1AA] font-light max-w-2xl mx-auto">We tore down the bloated editors of the past and built Flux from the ground up.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity2, y: y2, position: 'absolute' }} className="w-full">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6">
              Zero <span className="font-medium text-white">distractions.</span>
            </h2>
            <p className="text-xl text-[#A1A1AA] font-light max-w-2xl mx-auto">Your code takes center stage. The UI fades away when you don't need it.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity3, y: y3, position: 'absolute' }} className="w-full">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6">
              Infinite <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#E56B30] to-[#F2A65A]">power.</span>
            </h2>
            <p className="text-xl text-[#A1A1AA] font-light max-w-2xl mx-auto">Native performance meets limitless extensibility.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
