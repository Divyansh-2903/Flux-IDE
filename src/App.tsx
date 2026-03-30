/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductPreview } from './components/ProductPreview';
import { Features } from './components/Features';
import { WhyFlux } from './components/WhyFlux';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#3B82F6]/30">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <Features />
        <WhyFlux />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
