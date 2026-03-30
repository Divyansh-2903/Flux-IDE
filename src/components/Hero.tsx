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

  const springConfig = { damping: 30, stiffness: 100, mass: 3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-1, 1], [45, -45]);
  const rotateY = useTransform(smoothX, [-1, 1], [-45, 45]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-[2000px] overflow-hidden">
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-[600px] h-[600px] transform-style-3d"
      >
        {/* The Core */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`outer-${i}`}
            className="absolute inset-0 border-[2px] border-[#7C3AED]/20 rounded-full mix-blend-screen"
            style={{
              rotateX: i * 30,
              rotateY: i * 30,
            }}
            animate={{
              rotateZ: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`inner-${i}`}
            className="absolute inset-24 border-[1px] border-[#3B82F6]/30 rounded-full mix-blend-screen"
            style={{
              rotateX: i * 45,
              rotateY: i * 45,
            }}
            animate={{
              rotateZ: -360,
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] rounded-full blur-[80px] opacity-30 animate-pulse" />
      </motion.div>
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-[110vh] px-6 pt-20 overflow-hidden text-center">
      <InteractiveHeroBackground />

      <motion.div
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center max-w-4xl mt-[-10vh]"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-xs font-medium border rounded-full text-[#A1A1AA] border-white/10 bg-white/5 backdrop-blur-md uppercase tracking-widest"
        >
          <span className="flex w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          Introducing Flux 2.0
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[0.9]">
          Code in <br className="md:hidden" />
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">Flow.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-2xl leading-relaxed font-light tracking-tight">
          A fast, modern IDE built for developers. Experience lightning-fast performance, minimal distractions, and a smarter way to build software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <MagneticButton 
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:opacity-90 shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]"
          >
            Download for macOS
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton 
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
          >
            View Documentation
          </MagneticButton>
        </div>
        
        <p className="mt-8 text-xs text-[#A1A1AA]/50 font-mono tracking-wider">
          npm install -g flux-cli
        </p>
      </motion.div>
    </section>
  );
}
