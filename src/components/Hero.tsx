import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-32 overflow-hidden text-center">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6]/20 rounded-full blur-[100px] opacity-50 pointer-events-none translate-x-20 translate-y-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium border rounded-full text-[#A1A1AA] border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="flex w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          Flux 2.0 is now available
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
          Code in Flow.
        </h1>
        
        <p className="text-lg md:text-xl text-[#A1A1AA] mb-10 max-w-xl leading-relaxed">
          A fast, modern IDE built for developers. Experience lightning-fast performance, minimal distractions, and a smarter way to build software.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:opacity-90 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
            Download Flux
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95">
            View Documentation
          </button>
        </div>
        
        <p className="mt-6 text-xs text-[#A1A1AA] font-mono">
          npm install -g flux-cli
        </p>
      </motion.div>
    </section>
  );
}
