import React, { useState, useEffect } from 'react';
import { IntroSlide, ProblemSlide, AutomationSlide, FutureScalingSlide, ConversionSlide } from './components/Slides';
import { ChevronRight, ChevronLeft, Download, X, Printer, Link, Check, Share2, Copy } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [showPrintInstructions, setShowPrintInstructions] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(curr => curr + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  const slides = [
    { component: <IntroSlide onStart={handleNext} />, id: 'intro' },
    { component: <ProblemSlide />, id: 'problem' },
    { component: <ConversionSlide />, id: 'conversion' },
    { component: <AutomationSlide />, id: 'automation' },
    { component: <FutureScalingSlide />, id: 'scaling' }
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isPrintMode || showPrintInstructions || showShareModal) return;
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  const handleShareLink = async () => {
    // Check if running locally
    if (window.location.protocol === 'file:') {
      alert("⚠️ Local File Detected\n\nYou are running this presentation from a file on your computer. You cannot create a web link for others to see.\n\nPlease use the 'Share as PDF' button to email the file to your client instead.");
      return;
    }

    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    } catch (err) {
      // If auto-copy fails (security restriction), open the manual modal
      setShowShareModal(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isPrintMode, showPrintInstructions, showShareModal]);

  // Handle Printing
  useEffect(() => {
    if (isPrintMode) {
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPrintMode]);

  // If in Print Mode, render all slides vertically
  if (isPrintMode) {
    return (
      <div className="bg-black min-h-screen text-white">
        <button 
          onClick={() => {
            setIsPrintMode(false);
            setShowPrintInstructions(false);
          }}
          className="fixed top-6 right-6 z-50 bg-white text-black px-6 py-2 rounded-full font-bold shadow-xl hover:bg-gray-200 transition-colors no-print flex items-center gap-2"
        >
          <X className="w-4 h-4" />
          Exit PDF View
        </button>
        <div className="print-container">
          {slides.map((slide, index) => (
            <div key={index} className="print-slide min-h-screen w-full relative border-b border-gray-800 flex flex-col justify-center bg-black">
              {slide.component}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative font-sans">
      {/* Current Slide Render */}
      <div className="h-full w-full">
        {slides[currentSlide].component}
      </div>

      {/* Link Copied Toast */}
      {linkCopied && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[70] bg-white text-luxury-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-fade-in-up">
          <Check className="w-5 h-5 text-green-500" />
          <span className="font-bold">Link Copied!</span>
          <span className="text-sm text-gray-500 border-l pl-2 ml-1">Paste it to your client</span>
        </div>
      )}

      {/* Manual Share Modal (Fallback) */}
      {showShareModal && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white text-black rounded-2xl max-w-md w-full p-6 shadow-2xl border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-serif font-bold text-luxury-900">Share Presentation</h3>
              <button onClick={() => setShowShareModal(false)} className="text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              We couldn't auto-copy the link. Please copy it below:
            </p>
            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg border border-gray-200 mb-6">
              <input 
                type="text" 
                readOnly 
                value={window.location.href} 
                className="bg-transparent border-none focus:outline-none text-gray-800 text-sm flex-1 w-full font-mono select-all"
                onClick={(e) => e.currentTarget.select()}
              />
            </div>
            <div className="flex gap-3">
               <button 
                onClick={() => setShowShareModal(false)}
                className="flex-1 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                   // Try one last force copy
                   navigator.clipboard.writeText(window.location.href);
                   setLinkCopied(true);
                   setShowShareModal(false);
                }}
                className="flex-1 py-3 bg-luxury-900 text-white font-bold rounded-lg hover:bg-luxury-800 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print Instructions Modal */}
      {showPrintInstructions && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white text-black rounded-2xl max-w-lg w-full p-8 shadow-2xl border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-luxury-900">How to Share as PDF</h3>
              <button onClick={() => setShowPrintInstructions(false)} className="text-gray-400 hover:text-black">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 text-luxury-900 font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg">Select "Save as PDF"</h4>
                  <p className="text-gray-600">In the print window, change "Printer" or "Destination" to <span className="font-bold bg-yellow-100 px-1 rounded">Save as PDF</span>.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 text-luxury-900 font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg">Enable Graphics</h4>
                  <p className="text-gray-600">Ensure <span className="font-bold bg-yellow-100 px-1 rounded">Background graphics</span> is checked for full quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/20 text-luxury-900 font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg">Save & Email</h4>
                  <p className="text-gray-600">Save the file to your computer, then attach it to an email to send to your client.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowPrintInstructions(false)}
                className="flex-1 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsPrintMode(true)}
                className="flex-1 py-3 bg-luxury-900 text-white font-bold rounded-lg hover:bg-luxury-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Printer className="w-5 h-5" />
                Proceed to PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Controls Overlay (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 no-print">
         
         {/* Share Link Button */}
         <button
            onClick={handleShareLink}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-gray-700 hover:scale-105 transition-all transform border border-gray-700"
            title="Copy link to clipboard"
         >
            <Link className="w-4 h-4" />
            <span className="text-sm">Copy Link</span>
         </button>

         {/* Download PDF Button */}
         <button
            onClick={() => setShowPrintInstructions(true)}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold shadow-lg hover:bg-gray-200 hover:scale-105 transition-all transform"
            title="Export presentation as PDF"
         >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share as PDF</span>
         </button>

         {/* Navigation Container */}
         <div className="flex items-center gap-4 bg-black/80 backdrop-blur-md p-2 rounded-xl border border-white/10 ml-2">
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