/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Storytelling } from './components/Storytelling';
import { ProductPreview } from './components/ProductPreview';
import { Features } from './components/Features';
import { WhyFlux } from './components/WhyFlux';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#3B82F6]/30 relative">
      {/* Global Noise Texture */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.025] mix-blend-overlay" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      <CustomCursor />
      <BottomNav />
      
      <main>
        <Hero />
        <Storytelling />
        <ProductPreview />
        <Features />
        <WhyFlux />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
