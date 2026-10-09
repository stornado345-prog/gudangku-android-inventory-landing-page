/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppPreview } from './components/AppPreview';
import { Benefits } from './components/Benefits';
import { ProjectTech } from './components/ProjectTech';
import { ProjectCTA } from './components/ProjectCTA';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleOpenDownload = () => {
    setDownloadModalOpen(true);
  };

  const handleExploreDemo = () => {
    const previewEl = document.getElementById('pratinjau');
    if (previewEl) {
      previewEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Header / Navbar */}
      <Navbar
        onOpenDownload={handleOpenDownload}
        onExploreDemo={handleExploreDemo}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section A: Hero */}
        <Hero
          onOpenDownload={handleOpenDownload}
          onExploreDemo={handleExploreDemo}
        />

        {/* Section B: Verified Features */}
        <Features />

        {/* Section C: Real Application Preview & Interactive Simulator */}
        <AppPreview />

        {/* Section D: Practical Benefits */}
        <Benefits />

        {/* Section E: Technical Specifications & About Project */}
        <ProjectTech />

        {/* Section F: Conversion CTA */}
        <ProjectCTA
          onOpenDownload={handleOpenDownload}
          onExploreDemo={handleExploreDemo}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={handleOpenDownload}
        onExploreDemo={handleExploreDemo}
      />

      {/* Download APK & Release Details Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
