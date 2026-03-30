export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center text-sm text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-br from-[#E56B30] to-[#F2A65A]" />
          <span className="font-bold text-white">Flux</span>
        </div>
        <p>© 2026 Flux IDE. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
