import { motion } from 'motion/react';
import { Zap, Layout, Brain, Settings2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#3B82F6]" />,
    title: "Lightning Fast Performance",
    description: "Built on a native core, Flux opens instantly and handles massive codebases without breaking a sweat."
  },
  {
    icon: <Layout className="w-6 h-6 text-[#7C3AED]" />,
    title: "Minimal & Distraction-Free UI",
    description: "A clean, glassmorphism interface that gets out of your way so you can focus entirely on your code."
  },
  {
    icon: <Brain className="w-6 h-6 text-[#3B82F6]" />,
    title: "Smart Developer Experience",
    description: "AI-powered completions, intelligent refactoring, and real-time error highlighting that actually helps."
  },
  {
    icon: <Settings2 className="w-6 h-6 text-[#7C3AED]" />,
    title: "Customizable Workflow",
    description: "Tailor every shortcut, theme, and layout. Flux adapts to how you work, not the other way around."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Designed for focus.</h2>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">Everything you need to build great software, wrapped in an interface that feels like magic.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-[#111117] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
