/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Storytelling } from './components/Storytelling';
import { ProductPreview } from './components/ProductPreview';
import { Features } from './components/Features';
import { WhyFlux } from './components/WhyFlux';
import { Team } from './components/Team';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BottomNav } from './components/BottomNav';
import { initAudio, startBackgroundMusic } from './lib/audio';

export default function App() {
  useEffect(() => {
    const unlockAudio = () => {
      initAudio();
      startBackgroundMusic();
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('click', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#3B82F6]/30 relative">
      {/* Global Noise Texture - Optimized by removing mix-blend-overlay which is very heavy on GPU */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.015]" 
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
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
