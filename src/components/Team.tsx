import { Linkedin, Instagram, Code, Megaphone, Github, Palette } from 'lucide-react';

export function Team() {
  return (
    <section id="team" className="min-h-[80vh] pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          Meet the <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F2A65A] to-[#E56B30]">Team</span>
        </h1>
        <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto font-light">
          The core team behind Flux IDE.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Team Member 1 - Harshil */}
        <div className="rounded-[32px] p-8 flex flex-col h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E56B30] to-[#F2A65A] p-1 mb-6 mx-auto overflow-hidden">
            <img src="https://picsum.photos/seed/harshil/200/200" alt="Harshil Bhatnagar" className="w-full h-full rounded-full object-cover object-center" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-medium text-center mb-1">Harshil Bhatnagar</h2>
          <p className="text-[#E56B30] text-sm font-mono text-center mb-6 flex items-center justify-center gap-2">
            <Code size={14} /> Founder & Developer
          </p>
          <p className="text-[#A1A1AA] text-center text-sm mb-8 flex-1 font-light leading-relaxed">
            Love to fix bugs and solve real life problems by creating products through coding.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/harshil-bhatnagar-086a79360/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-[#0077b5] hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/urs.bhatnagar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/itsmebhatnagar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-white hover:text-black transition-all duration-300">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Team Member 2 - Divyansh */}
        <div className="rounded-[32px] p-8 flex flex-col h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E56B30] to-[#F2A65A] p-1 mb-6 mx-auto overflow-hidden">
            <img src="https://picsum.photos/seed/divyansh/200/200" alt="Divyansh Saxena" className="w-full h-full rounded-full object-cover object-center" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-medium text-center mb-1">Divyansh Saxena</h2>
          <p className="text-[#E56B30] text-sm font-mono text-center mb-6 flex items-center justify-center gap-2">
            <Palette size={14} /> Co-founder & Creative Designer
          </p>
          <p className="text-[#A1A1AA] text-center text-sm mb-8 flex-1 font-light leading-relaxed">
            The mind behind Flux — from the first line of code to the final design, obsessed with building tools that are fast, private, and beautiful.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/itz-mickeyyyy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-[#0077b5] hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/itz_mickeyyyy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/Divyansh-2903" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-white hover:text-black transition-all duration-300">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Team Member 3 - Harshita */}
        <div className="rounded-[32px] p-8 flex flex-col h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E56B30] to-[#F2A65A] p-1 mb-6 mx-auto overflow-hidden">
            <img src="https://picsum.photos/seed/harshita/200/200" alt="Harshita Bhargava" className="w-full h-full rounded-full object-cover object-center" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-medium text-center mb-1">Harshita Bhargava</h2>
          <p className="text-[#E56B30] text-sm font-mono text-center mb-6 flex items-start justify-center gap-2 max-w-[200px] mx-auto">
            <Megaphone size={14} className="shrink-0 mt-0.5" /> 
            <span className="text-left">Social Media Manager & Growth Expert</span>
          </p>
          <p className="text-[#A1A1AA] text-center text-sm mb-8 flex-1 font-light leading-relaxed">
            Building the Flux community from the ground up — crafting content, driving growth, and making sure the internet knows we exist.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/harshita-bhargava-950527395/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-[#0077b5] hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/areyyrharshii/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Team Member 4 - Jagrati */}
        <div className="rounded-[32px] p-8 flex flex-col h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E56B30] to-[#F2A65A] p-1 mb-6 mx-auto overflow-hidden">
            <img src="https://picsum.photos/seed/jagrati/200/200" alt="Jagrati" className="w-full h-full rounded-full object-cover object-center" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-medium text-center mb-1">Jagrati</h2>
          <p className="text-[#E56B30] text-sm font-mono text-center mb-6 flex items-center justify-center gap-2">
            <Megaphone size={14} /> Marketing Head
          </p>
          <p className="text-[#A1A1AA] text-center text-sm mb-8 flex-1 font-light leading-relaxed">
            Building the Flux community from the ground up - building contacts and relationships.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/jagrti-khatri-a39a613b4/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-[#0077b5] hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/jiya_kalra09/?__pwa=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A1A1AA] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
