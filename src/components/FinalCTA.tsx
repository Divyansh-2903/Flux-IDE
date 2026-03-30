import { motion } from 'motion/react';

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7C3AED]/5 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to code in flow?</h2>
        <p className="text-[#A1A1AA] text-lg mb-10">Join thousands of developers building the future with Flux.</p>
        
        <button className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-medium text-white transition-all rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:opacity-90 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
          Download Now for macOS
        </button>
        
        <p className="mt-6 text-sm text-[#A1A1AA]">
          Also available for <a href="#" className="text-white hover:underline">Windows</a> and <a href="#" className="text-white hover:underline">Linux</a>.
        </p>
      </motion.div>
    </section>
  );
}
