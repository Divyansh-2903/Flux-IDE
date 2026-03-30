import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scene 1: 0 to 0.33
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [50, 0, -50]);

  // Scene 2: 0.33 to 0.66
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.48, 0.63], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.48, 0.63], [50, 0, -50]);

  // Scene 3: 0.66 to 1.0
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.81, 1], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.66, 0.81, 1], [50, 0, -50]);

  // Visual scaling and rotation
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const visualRotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0B0B0F]">
      <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
        
        {/* Background Visual */}
        <motion.div 
          style={{ scale: visualScale, rotateX: visualRotateX, opacity: visualOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[1000px]"
        >
          <div className="w-[80vw] md:w-[60vw] h-[60vh] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-3xl shadow-[0_0_100px_rgba(124,58,237,0.15)] flex flex-col overflow-hidden transform-style-3d">
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
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#3B82F6] rounded-full blur-[100px] opacity-20"
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
              The IDE, <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">reimagined.</span>
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
              Infinite <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">power.</span>
            </h2>
            <p className="text-xl text-[#A1A1AA] font-light max-w-2xl mx-auto">Native performance meets limitless extensibility.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
