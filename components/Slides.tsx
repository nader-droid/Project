import React from 'react';
import { Database, Zap, Bot, ArrowRight, BarChart, Users, MessageSquare, MapPin, Filter, CheckCircle, MousePointerClick, PhoneCall, Trash2, Tag } from 'lucide-react';

// Shared Slide Layout
const SlideContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`h-full w-full flex flex-col justify-center items-center px-8 md:px-20 ${className}`}>
    {children}
  </div>
);

export const IntroSlide = () => (
  <SlideContainer className="text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
    <div className="relative z-10 animate-fade-in-up">
      <div className="inline-block px-4 py-1.5 border border-luxury-gold/50 rounded-full text-luxury-gold text-sm font-medium tracking-widest mb-6 bg-black/50 backdrop-blur-sm">
        AGENCY GROWTH SYSTEM V2.0
      </div>
      <h1 className="text-6xl md:text-8xl font-serif text-white font-bold mb-6 tracking-tight">
        Estate<span className="text-luxury-gold">Flow</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
        Stop relying on digital business cards. Start using a high-conversion acquisition engine powered by Automation & AI.
      </p>
      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-2 text-white/50 text-sm uppercase tracking-widest">
          <span className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></span>
          Press Right Arrow to Start
        </div>
      </div>
    </div>
  </SlideContainer>
);

export const ProblemSlide = () => (
  <SlideContainer className="text-left bg-gradient-to-br from-gray-900 to-black">
    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
          The <span className="text-red-500">Old Way</span> is <br/>Costing You Deals.
        </h2>
        <p className="text-xl text-gray-400 leading-relaxed">
          Most real estate websites are just brochures. They look nice but they don't capture leads, qualify prospects, or follow up instantly.
        </p>
        
        <div className="space-y-6">
           <ProblemItem 
             title="Slow Response Time" 
             desc="Leads go cold in 5 minutes. Can you reply instantly at 2 AM?" 
           />
           <ProblemItem 
             title="Zero Qualification" 
             desc="You waste hours talking to people who aren't ready to buy or sell." 
           />
           <ProblemItem 
             title="Manual Follow-up" 
             desc="Sticky notes and spreadsheets don't scale. You need a system." 
           />
        </div>
      </div>
      <div className="relative h-[500px] bg-white/5 rounded-2xl border border-white/10 p-8 flex items-center justify-center">
         {/* Visual representation of a 'broken' funnel */}
         <div className="space-y-4 w-full max-w-sm opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-40 bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
         </div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 text-red-500 border border-red-500/50 px-6 py-3 rounded-lg font-mono font-bold rotate-12 backdrop-blur-md">
            LEADS LOST
         </div>
      </div>
    </div>
  </SlideContainer>
);

const ProblemItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0 border border-red-500/20">
      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  </div>
);

export const ConversionSlide = () => (
  <SlideContainer className="bg-white">
    <div className="max-w-6xl w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-luxury-900 mb-6">High-Converting Lead Funnel</h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          We don't just put up a "Contact Us" page. We deploy a multi-step qualification funnel designed to maximize lead quality and volume.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10 translate-y-4"></div>

        <ConversionCard 
          step="01"
          icon={<MousePointerClick className="w-6 h-6" />}
          title="Low-Friction Entry"
          subtitle="Capture Attention"
          desc="We start with a simple question: 'What is your address?'. This micro-commitment increases form initiation by 300%."
        />
        
        <ConversionCard 
          step="02"
          icon={<Filter className="w-6 h-6" />}
          title="Smart Qualification"
          subtitle="Filter Intent"
          desc="We ask critical questions: Selling Timeline, Property Condition, and Motivation. This separates 'window shoppers' from serious sellers."
          highlight
        />

        <ConversionCard 
          step="03"
          icon={<CheckCircle className="w-6 h-6" />}
          title="Value Exchange"
          subtitle="Capture Contact"
          desc="To receive their custom valuation report, the user happily provides their Name, Email, and Phone number."
        />
      </div>

      {/* KPI Section */}
      <div className="mt-16 bg-luxury-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="flex items-center gap-6">
           <div className="bg-white/10 p-4 rounded-full">
             <BarChart className="w-8 h-8 text-luxury-gold" />
           </div>
           <div>
             <h3 className="text-xl font-bold">Why this works?</h3>
             <p className="text-gray-400">Standard forms convert at ~2%. Our funnels average <span className="text-white font-bold">8-12%</span>.</p>
           </div>
        </div>
        <div className="flex gap-12 text-center">
            <div>
                <div className="text-3xl font-serif font-bold text-luxury-gold">3x</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">More Leads</div>
            </div>
             <div>
                <div className="text-3xl font-serif font-bold text-luxury-gold">100%</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Qualified</div>
            </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

const ConversionCard = ({ step, icon, title, subtitle, desc, highlight }: any) => (
  <div className={`p-8 rounded-xl border transition-all duration-500 ${highlight ? 'bg-luxury-gold text-luxury-900 border-luxury-gold shadow-xl scale-105 transform' : 'bg-white border-gray-100 hover:border-gray-300'}`}>
    <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${highlight ? 'bg-white text-luxury-900' : 'bg-luxury-900 text-white'}`}>
            {icon}
        </div>
        <span className={`text-4xl font-serif font-bold opacity-20 ${highlight ? 'text-black' : 'text-gray-300'}`}>{step}</span>
    </div>
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    <div className={`text-xs uppercase tracking-wider font-bold mb-4 ${highlight ? 'text-luxury-900/60' : 'text-blue-600'}`}>{subtitle}</div>
    <p className={`leading-relaxed ${highlight ? 'text-luxury-900' : 'text-gray-500'}`}>{desc}</p>
  </div>
);

export const AutomationSlide = () => (
  <SlideContainer className="bg-[#0B1120]">
    <div className="max-w-6xl w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Intelligent Automation</h2>
        <p className="text-gray-400">The system sorts, tags, and communicates so you only talk to ready-to-act leads.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/30 to-luxury-gold/0 -translate-y-1/2 z-0"></div>

        <StepCard 
          icon={<Database className="text-blue-400" />}
          step="01"
          title="Lead Capture"
          desc="Seamlessly collect prospect details via high-conversion forms."
        />
        <StepCard 
          icon={<Zap className="text-yellow-400" />}
          step="02"
          title="Instant SMS"
          desc="Engage immediately with automated text messages to keep the lead warm."
        />
        <StepCard 
          icon={<Tag className="text-green-400" />}
          step="03"
          title="Tags & Automation"
          desc="Automatically categorize leads and trigger custom follow-up sequences."
        />
      </div>

      <div className="mt-16 bg-black/50 rounded-xl border border-white/10 p-8 font-mono text-sm md:text-lg text-gray-300 overflow-hidden shadow-2xl flex flex-col justify-center items-center">
        <div className="w-full max-w-3xl space-y-8">
          <div className="flex items-center gap-4 text-gray-500 border-b border-white/10 pb-2 mb-4 text-xs tracking-widest uppercase">
            <span>Automation Rules</span>
          </div>
          
          {/* Rule 1: New Lead */}
          <div className="space-y-3">
             <div className="flex items-center gap-3">
                <span className="text-purple-400 font-bold w-12 text-right">IF:</span>
                <div className="px-3 py-2 bg-white/5 rounded-md border border-white/10 text-white">
                   User is a <span className="text-blue-300 font-bold">New Lead</span>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold w-12 text-right mt-2">THEN:</span>
                <div className="flex-1 flex gap-4">
                    <div className="px-3 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-md flex items-center gap-2">
                      <Tag className="w-4 h-4 text-luxury-gold" />
                      <span>Add Tag: <span className="text-luxury-gold font-bold">"New Lead"</span></span>
                    </div>
                    <div className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-md flex items-center gap-2">
                       <MessageSquare className="w-4 h-4 text-blue-400" />
                       <span>Send SMS</span>
                    </div>
                </div>
             </div>
          </div>

          <div className="h-px bg-white/10 w-full"></div>

          {/* Rule 2: Not Qualified */}
          <div className="space-y-3">
             <div className="flex items-center gap-3">
                <span className="text-purple-400 font-bold w-12 text-right">IF:</span>
                <div className="px-3 py-2 bg-white/5 rounded-md border border-white/10 text-white">
                   User is <span className="text-red-400 font-bold">Not Qualified</span>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold w-12 text-right mt-2">THEN:</span>
                <div className="px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-md flex items-center gap-2">
                   <Trash2 className="w-4 h-4 text-red-500" />
                   <span className="text-red-300">Remove from CRM</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  </SlideContainer>
);

const StepCard = ({ icon, step, title, desc }: { icon: React.ReactNode, step: string, title: string, desc: string }) => (
  <div className="relative z-10 bg-gray-900 border border-white/10 p-8 rounded-2xl hover:border-luxury-gold/50 transition-colors group">
    <div className="text-4xl font-serif font-bold text-white/10 absolute top-4 right-6 group-hover:text-luxury-gold/20 transition-colors">{step}</div>
    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6">
      {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export const AiSlide = () => (
  <SlideContainer className="bg-black text-center">
    <div className="max-w-4xl w-full">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
        <Bot className="w-4 h-4" /> Powered by Google Gemini
      </div>
      
      <h2 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white mb-8">
        Your AI Sales Assistant
      </h2>
      
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        While you sleep, the AI agent qualifies leads on your site. It asks the right questions, understands context, and books appointments.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        <AiFeature 
          title="24/7 Availability"
          desc="Never miss a lead because it's after hours. The AI is always on."
        />
        <AiFeature 
          title="Natural Conversation"
          desc="Uses LLMs to understand nuance, not just basic button clicks."
        />
        <AiFeature 
          title="Lead Qualification"
          desc="Determines budget, timeline, and intent before handing off to you."
        />
        <AiFeature 
          title="Instant Handoff"
          desc="Seamlessly transfers hot leads to human agents when complex issues arise."
        />
      </div>
    </div>
  </SlideContainer>
);

const AiFeature = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
    <div className="mt-1">
      <MessageSquare className="w-5 h-5 text-purple-400" />
    </div>
    <div>
      <h3 className="text-white font-bold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  </div>
);

export const OfferSlide = () => (
  <SlideContainer className="bg-luxury-900 text-center relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent"></div>
    <div className="max-w-4xl w-full relative z-10">
      <h2 className="text-5xl font-serif text-white mb-6">Ready to Scale?</h2>
      <p className="text-xl text-gray-400 mb-12">
        We implement the full system: Landing Page + GHL Setup + AI Agent.
      </p>

      <div className="bg-white text-luxury-900 rounded-2xl p-10 max-w-md mx-auto shadow-2xl relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-luxury-gold text-luxury-900 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
          Full Package
        </div>
        <div className="text-center mb-8">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">One-Time Setup</div>
          <div className="text-5xl font-serif font-bold">$2,997</div>
          <div className="text-gray-400 text-sm mt-2">+ $297/mo for software</div>
        </div>
        
        <ul className="space-y-4 text-left mb-8">
          <li className="flex items-center gap-3">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</div>
            Custom Landing Page
          </li>
          <li className="flex items-center gap-3">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</div>
            Full GHL Automation Setup
          </li>
          <li className="flex items-center gap-3">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</div>
            Gemini AI Agent Integration
          </li>
          <li className="flex items-center gap-3">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">✓</div>
            30 Days of Support
          </li>
        </ul>

        <button className="w-full py-4 bg-luxury-900 text-white rounded-xl font-bold hover:bg-luxury-800 transition-colors flex items-center justify-center gap-2">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </SlideContainer>
);