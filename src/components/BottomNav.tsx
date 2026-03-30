import { motion } from 'motion/react';
import { Terminal, Layout, Zap, Download } from 'lucide-react';
import { playHoverSound, playClickSound } from '../lib/audio';

export function BottomNav() {
  const navItems = [
    { icon: <Terminal className="w-4 h-4" />, label: "Overview", href: "#" },
    { icon: <Layout className="w-4 h-4" />, label: "Features", href: "#features" },
    { icon: <Zap className="w-4 h-4" />, label: "Why Flux", href: "#why-flux" },
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="fixed bottom-8 left-1/2 z-50 flex items-center p-1.5 rounded-full bg-[#111117]/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-1 px-2">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-all rounded-full hover:text-white hover:bg-white/10 active:scale-95"
          >
            {item.icon}
            <span className="hidden sm:block">{item.label}</span>
          </a>
        ))}
      </div>
      
      <div className="w-[1px] h-8 bg-white/10 mx-2" />
      
      <button 
        onMouseEnter={playHoverSound}
        onClick={playClickSound}
        className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:opacity-90 active:scale-95 shadow-[0_0_20px_-5px_rgba(124,58,237,0.4)]"
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:block">Download</span>
      </button>
    </motion.div>
  );
}
