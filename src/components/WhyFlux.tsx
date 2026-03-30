import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Sub-100ms startup time",
  "Native rendering engine",
  "Built-in terminal with GPU acceleration",
  "Seamless Git integration",
  "Zero-config TypeScript support",
  "Extensible plugin ecosystem"
];

export function WhyFlux() {
  return (
    <section id="why-flux" className="py-24 px-6 mx-auto max-w-7xl relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why choose Flux?</h2>
          <p className="text-[#A1A1AA] text-lg mb-8 leading-relaxed">
            Legacy IDEs are bloated, slow, and distracting. Flux was engineered from the ground up to provide a frictionless coding experience without sacrificing power.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-sm font-medium text-white/80">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111117] to-[#0B0B0F] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <span className="text-[#A1A1AA] font-mono text-sm">Startup Time</span>
                <span className="text-2xl font-bold text-white">0.08s</span>
              </div>
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <span className="text-[#A1A1AA] font-mono text-sm">Memory Footprint</span>
                <span className="text-2xl font-bold text-white">45MB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#A1A1AA] font-mono text-sm">Input Latency</span>
                <span className="text-2xl font-bold text-white">&lt;2ms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
