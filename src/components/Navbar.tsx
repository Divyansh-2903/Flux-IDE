import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto max-w-7xl backdrop-blur-md bg-[#0B0B0F]/50 border-b border-white/10"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#3B82F6]">
          <Terminal className="w-4 h-4 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Flux</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#why-flux" className="hover:text-white transition-colors">Why Flux</a>
      </div>
      <div>
        <button className="px-4 py-2 text-sm font-medium text-white transition-all rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95">
          Download
        </button>
      </div>
    </motion.nav>
  );
}
