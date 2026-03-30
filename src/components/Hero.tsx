import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { playHoverSound, playClickSound } from '../lib/audio';
import { useRef, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';

function InteractiveHeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 40, stiffness: 50, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const x1 = useTransform(smoothX, [-1, 1], [-150, 150]);
  const y1 = useTransform(smoothY, [-1, 1], [-150, 150]);
  
  const x2 = useTransform(smoothX, [-1, 1], [150, -150]);
  const y2 = useTransform(smoothY, [-1, 1], [150, -150]);

  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden bg-[#050507]">
      {/* Deep cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050507_100%)] z-10 opacity-90" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-15">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: 0.1 + Math.random() * 0.3,
              boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`,
              x: useTransform(smoothX, [-1, 1], [-(p.size * 10), p.size * 10]),
              y: useTransform(smoothY, [-1, 1], [-(p.size * 10), p.size * 10]),
            }}
            animate={{
              y: [`${p.y}%`, `${p.y - 10}%`, `${p.y}%`],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>
      
      {/* Cinematic Light Leaks / Aurora */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[5%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-[#E56B30] rounded-full blur-[160px] mix-blend-screen" 
      />
      <motion.div 
        style={{ x: x2, y: y2 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#F2A65A] rounded-full blur-[140px] mix-blend-screen" 
      />
      
      {/* Core bright spot */}
      <motion.div 
        style={{ x: useTransform(smoothX, [-1, 1], [-50, 50]), y: useTransform(smoothY, [-1, 1], [-50, 50]) }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-white rounded-full blur-[150px] mix-blend-overlay" 
      />
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-[110vh] px-6 pt-20 overflow-hidden text-center">
      <InteractiveHeroBackground />

      <motion.div
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-col items-center max-w-5xl mt-[-10vh]"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-12 text-xs font-medium border rounded-full text-white/80 border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(229,107,48,0.2)] uppercase tracking-[0.2em]"
        >
          <span className="flex w-1.5 h-1.5 rounded-full bg-[#E56B30] animate-pulse shadow-[0_0_10px_rgba(229,107,48,0.8)]" />
          Introducing Flux 2.0
        </motion.div>
        
        <h1 className="text-7xl md:text-[10rem] font-light tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 mb-8 leading-[0.85] drop-shadow-2xl">
          Code in <br className="md:hidden" />
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F2A65A] via-[#E56B30] to-[#E56B30] drop-shadow-[0_0_40px_rgba(229,107,48,0.3)]">Flow.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#A1A1AA] mb-14 max-w-2xl leading-relaxed font-light tracking-tight mix-blend-plus-lighter">
          A fast, modern IDE built for developers. Experience lightning-fast performance, minimal distractions, and a smarter way to build software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <MagneticButton 
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-[#050507] transition-all rounded-full bg-gradient-to-b from-white to-white/90 hover:from-white hover:to-white shadow-[0_0_40px_-10px_rgba(229,107,48,0.3)] hover:shadow-[0_0_60px_-15px_rgba(229,107,48,0.5)] hover:scale-[1.02]"
          >
            Download for macOS
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton 
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md"
          >
            View Documentation
          </MagneticButton>
        </div>
        
        <p className="mt-10 text-[11px] text-[#A1A1AA]/40 font-mono tracking-[0.2em] uppercase">
          npm install -g flux-cli
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0 overflow-hidden relative">
          <motion.div 
            animate={{ y: [-20, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#E56B30] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
