import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Zap, Layout, Brain, Settings2, Search } from 'lucide-react';
import { playHoverSound } from '../lib/audio';

function PerformanceGraph() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-48 overflow-hidden rounded-b-[32px] pointer-events-none">
      <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E56B30" stopOpacity="0" />
            <stop offset="50%" stopColor="#F2A65A" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F2A65A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F2A65A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 150 C 100 150, 200 100, 300 120 C 400 140, 500 50, 600 80 C 700 110, 750 40, 800 20 L 800 200 L 0 200 Z"
          fill="url(#fillGrad)"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
          d="M 0 150 C 100 150, 200 100, 300 120 C 400 140, 500 50, 600 80 C 700 110, 750 40, 800 20"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        />
        <motion.circle
          cx="800"
          cy="20"
          r="6"
          fill="#FFFFFF"
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.2 }}
        />
      </svg>
    </div>
  );
}

function FloatingUI() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
      {/* Command Palette */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-48 p-3 rounded-xl bg-[#111117]/90 border border-white/10 backdrop-blur-md shadow-2xl"
      >
        <div className="flex items-center gap-2 pb-2 border-b border-white/10 mb-2">
          <Search className="w-3 h-3 text-[#A1A1AA]" />
          <div className="w-20 h-2 rounded bg-white/10" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#E56B30]/20" />
            <div className="w-24 h-2 rounded bg-white/5" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#F2A65A]/20" />
            <div className="w-16 h-2 rounded bg-white/5" />
          </div>
        </div>
      </motion.div>

      {/* Theme Switcher */}
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 right-32 w-32 p-3 rounded-xl bg-[#111117]/90 border border-white/10 backdrop-blur-md shadow-2xl flex gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E56B30] to-[#F2A65A]" />
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#333333]" />
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E5E5E5] to-[#FFFFFF]" />
      </motion.div>

      {/* Code Snippet */}
      <motion.div 
        animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-32 right-48 w-40 p-4 rounded-xl bg-[#0B0B0F]/90 border border-white/10 backdrop-blur-md shadow-2xl hidden md:block"
      >
        <div className="space-y-2">
          <div className="w-12 h-2 rounded bg-[#F2A65A]/50" />
          <div className="w-24 h-2 rounded bg-[#E56B30]/50 ml-4" />
          <div className="w-16 h-2 rounded bg-white/50 ml-4" />
          <div className="w-8 h-2 rounded bg-[#F2A65A]/50" />
        </div>
      </motion.div>
    </div>
  );
}

function BentoCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    e.currentTarget.style.setProperty('--mouse-x', `${mouseX}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playHoverSound}
      className={`group relative overflow-hidden rounded-[32px] bg-white/[0.02] border border-white/5 p-8 md:p-10 transition-colors hover:bg-white/[0.04] transform-style-3d ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      <div className="relative z-10 h-full flex flex-col transform-translate-z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-32 px-6 mx-auto max-w-7xl">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">Designed for <span className="font-medium">focus.</span></h2>
        <p className="text-[#A1A1AA] text-xl max-w-2xl mx-auto font-light tracking-tight">Everything you need to build great software, wrapped in an interface that feels like magic.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
        {/* Large Feature - Performance */}
        <BentoCard className="md:col-span-2 md:row-span-2" delay={0}>
          <div className="flex items-center justify-center w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br from-[#E56B30]/20 to-transparent border border-[#E56B30]/20 text-[#E56B30]">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-medium mb-4 text-white tracking-tight">Lightning Fast Performance</h3>
          <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-md relative z-20">Built on a native core, Flux opens instantly and handles massive codebases without breaking a sweat. Sub-100ms startup times mean you're coding before you even realize it.</p>
          
          <div className="mt-auto pt-32 relative">
            <PerformanceGraph />
          </div>
        </BentoCard>

        {/* Medium Feature - UI */}
        <BentoCard delay={0.1}>
          <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-[#F2A65A]/20 to-transparent border border-[#F2A65A]/20 text-[#F2A65A]">
            <Layout className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-medium mb-3 text-white tracking-tight">Minimal UI</h3>
          <p className="text-[#A1A1AA] leading-relaxed">A clean, glassmorphism interface that gets out of your way so you can focus entirely on your code.</p>
        </BentoCard>

        {/* Medium Feature - DX */}
        <BentoCard delay={0.2}>
          <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-white">
            <Brain className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-medium mb-3 text-white tracking-tight">Smart DX</h3>
          <p className="text-[#A1A1AA] leading-relaxed">AI-powered completions and real-time error highlighting that actually helps.</p>
        </BentoCard>

        {/* Wide Feature - Customizable */}
        <BentoCard className="md:col-span-3 min-h-[300px]" delay={0.3}>
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-20 h-full">
            <div className="flex-1">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-[#E56B30]/20 to-transparent border border-[#E56B30]/20 text-[#E56B30]">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-medium mb-3 text-white tracking-tight">Endlessly Customizable</h3>
              <p className="text-[#A1A1AA] leading-relaxed max-w-lg">Tailor every shortcut, theme, and layout. Flux adapts to how you work, not the other way around. Write your own plugins in TypeScript.</p>
            </div>
            <div className="flex-1 w-full h-full relative min-h-[200px]">
              <FloatingUI />
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
