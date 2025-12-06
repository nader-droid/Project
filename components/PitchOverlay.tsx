import React from 'react';
import { ViewMode } from '../types';
import { Database, Zap, Users, MessageSquareText, TrendingUp } from 'lucide-react';

interface PitchOverlayProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const PitchOverlay: React.FC<PitchOverlayProps> = ({ viewMode, setViewMode }) => {
  return (
    <>
      {/* Control Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-black/90 text-white px-6 py-3 flex justify-between items-center backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg tracking-wider text-luxury-gold">DEV.PRESENTATION</span>
          <div className="h-4 w-px bg-gray-700"></div>
          <span className="text-sm text-gray-400 hidden sm:inline">Pitching to: Real Estate Agency</span>
        </div>
        <div className="flex bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setViewMode(ViewMode.CLIENT)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${viewMode === ViewMode.CLIENT ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
          >
            Client View
          </button>
          <button
            onClick={() => setViewMode(ViewMode.PITCH)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${viewMode === ViewMode.PITCH ? 'bg-luxury-gold text-black' : 'text-gray-400 hover:text-white'}`}
          >
            System Backend
          </button>
        </div>
      </div>

      {/* Pitch Details Overlay - Only visible in PITCH mode */}
      {viewMode === ViewMode.PITCH && (
        <div className="fixed inset-0 z-50 bg-luxury-900/95 pt-20 overflow-y-auto">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">The "EstateFlow" System</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Don't just buy a website. Buy a lead conversion machine powered by GoHighLevel and Gemini AI.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <PitchCard 
                icon={<Database className="w-8 h-8 text-blue-400" />}
                title="Lead Capture & CRM"
                description="The form you saw automatically pushes data to GHL. A contact is created, tagged 'Lead', and assigned to you immediately."
              />
              <PitchCard 
                icon={<Zap className="w-8 h-8 text-yellow-400" />}
                title="Instant Automation"
                description="Trigger immediate SMS and Email workflows. 'Thanks for your inquiry, John! When can we chat?' sent within 30 seconds."
              />
              <PitchCard 
                icon={<MessageSquareText className="w-8 h-8 text-green-400" />}
                title="AI Qualification"
                description="The Gemini AI chatbot handles 24/7 inquiries, qualifying budget and timeline before you ever pick up the phone."
              />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-6">Future Scaling: Full AI Agency</h3>
                  <ul className="space-y-4">
                    <FeatureRow text="Auto-booking appointments directly into your GHL calendar" />
                    <FeatureRow text="AI Voice Agents calling leads within 1 minute of submission" />
                    <FeatureRow text="Automated property valuation reports generated via API" />
                    <FeatureRow text="Social media content generation and auto-posting" />
                  </ul>
                  <button onClick={() => setViewMode(ViewMode.CLIENT)} className="mt-8 text-luxury-gold hover:text-white underline underline-offset-4 transition-colors">
                    Back to Live Demo
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/20 to-purple-500/20 rounded-xl blur-2xl"></div>
                  <div className="relative bg-black/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-500 ml-auto">automation_workflow.json</span>
                    </div>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="text-blue-400">trigger: <span className="text-white">Form_Submission</span></div>
                      <div className="text-purple-400">action: <span className="text-white">Add_Tag("Hot Lead")</span></div>
                      <div className="text-purple-400">action: <span className="text-white">SMS_Send(Template_1)</span></div>
                      <div className="text-yellow-400">wait: <span className="text-white">5_minutes</span></div>
                      <div className="text-purple-400">condition: <span className="text-white">If_No_Reply -> AI_Follow_Up()</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const PitchCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
    <div className="mb-4 p-3 bg-black/30 w-fit rounded-lg">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const FeatureRow = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-gray-300">
    <CheckCircle className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
    <span>{text}</span>
  </li>
);

// Helper Icon
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);