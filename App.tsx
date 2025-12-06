import React, { useState, useEffect } from 'react';
import { IntroSlide, ProblemSlide, AutomationSlide, AiSlide, OfferSlide, ConversionSlide } from './components/Slides';
import { ChevronRight, ChevronLeft, MonitorPlay, Printer, Download } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrintMode, setIsPrintMode] = useState(false);

  const slides = [
    { component: <IntroSlide />, id: 'intro' },
    { component: <ProblemSlide />, id: 'problem' },
    { component: <ConversionSlide />, id: 'conversion' },
    { component: <AutomationSlide />, id: 'automation' },
    { component: <AiSlide />, id: 'ai' },
    { component: <OfferSlide />, id: 'offer' }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(curr => curr + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isPrintMode) return;
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isPrintMode]);

  // Handle Printing
  useEffect(() => {
    if (isPrintMode) {
      // Small delay to ensure DOM is fully rendered before print dialog opens
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPrintMode]);

  // If in Print Mode, render all slides vertically
  if (isPrintMode) {
    return (
      <div className="bg-black min-h-screen">
        <button 
          onClick={() => setIsPrintMode(false)}
          className="fixed top-6 right-6 z-50 bg-white text-black px-6 py-2 rounded-full font-bold shadow-xl hover:bg-gray-200 transition-colors no-print flex items-center gap-2"
        >
          Exit PDF View
        </button>
        <div className="print-container">
          {slides.map((slide, index) => (
            <div key={index} className="print-slide min-h-screen w-full relative border-b border-gray-800 flex flex-col justify-center">
              {slide.component}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative">
      {/* Current Slide Render */}
      <div className="h-full w-full">
        {slides[currentSlide].component}
      </div>

      {/* Controls Overlay (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 no-print">
         
         {/* Download PDF Button - Distinct and Clear */}
         <button
            onClick={() => setIsPrintMode(true)}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-gray-200 hover:scale-105 transition-all transform"
            title="Export presentation as PDF"
         >
            <Download className="w-4 h-4" />
            <span className="text-sm">Save as PDF</span>
         </button>

         {/* Navigation Container */}
         <div className="flex items-center gap-4 bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10">
           <div className="px-3 text-gray-400 font-mono text-sm border-r border-white/20 pr-4">
             {currentSlide + 1} <span className="text-gray-600">/</span> {slides.length}
           </div>
           
           <button 
             onClick={handlePrev} 
             disabled={currentSlide === 0}
             className="p-2 rounded-lg hover:bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
           >
             <ChevronLeft className="w-5 h-5" />
           </button>
           
           <button 
             onClick={handleNext} 
             disabled={currentSlide === slides.length - 1}
             className="p-2 rounded-lg bg-luxury-gold text-luxury-900 hover:bg-yellow-500 disabled:opacity-50 disabled:bg-gray-700 disabled:text-gray-400 transition-colors"
           >
             <ChevronRight className="w-5 h-5" />
           </button>
         </div>
      </div>
    </div>
  );
}