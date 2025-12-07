import React from 'react';
import { Database, Zap, Bot, ArrowRight, BarChart, Users, MessageSquare, MapPin, Filter, CheckCircle, MousePointerClick, PhoneCall, Trash2, Tag, Mail } from 'lucide-react';

// Shared Slide Layout
const SlideContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`h-full w-full flex flex-col justify-center items-center px-8 md:px-20 ${className}`}>
    {children}
  </div>
);

export const IntroSlide: React.FC<{ onStart?: () => void }> = ({ onStart }) => (
  <SlideContainer className="text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
    <div className="relative z-10 animate-fade-in-up flex flex-col items-center">
      <div className="inline-block px-4 py-1.5 border border-luxury-gold/50 rounded-full text-luxury-gold text-sm font-medium tracking-widest mb-6 bg-black/50 backdrop-blur-sm">
        AGENCY GROWTH SYSTEM V2.0
      </div>
      <h1 className="text-6xl md:text-8xl font-serif text-white font-bold mb-6 tracking-tight">
        Estate<span className="text-luxury-gold">Flow</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
        Stop relying on digital business cards. Start using a high-conversion acquisition engine powered by Automation & AI.
      </p>
      
      {onStart && (
        <button 
          onClick={onStart}
          className="group relative bg-luxury-gold text-luxury-900 px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-3 mb-8"
        >
          <span>Start Presentation</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      )}

      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-2 text-white/50 text-sm uppercase tracking-widest">
          <span className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></span>
          Use Arrow Keys or Swipe
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
                <div className="px-3 py-2 bg-white/5 rounded-md border border-white/10 text-white flex items-center gap-2">
                   <span>User is a <span className="text-blue-300 font-bold">New Lead</span></span>
                   <span className="text-gray-500 text-xs italic">(part of our automation)</span>
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

export const FutureScalingSlide = () => (
  <SlideContainer className="bg-gradient-to-br from-gray-900 to-black text-center">
    <div className="max-w-4xl w-full">
      <div className="inline-block px-4 py-1.5 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium tracking-widest mb-8 bg-purple-500/10">
        GROWTH ROADMAP
      </div>
      <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Future Scaling</h2>
      <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
        Once your foundation is built, we can activate advanced features to multiply your results.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ScalingCard 
          icon={<Bot className="w-8 h-8 text-blue-400" />}
          title="AI Agents"
          tag="COMING SOON"
          desc="We can deploy sophisticated AI in the future to handle conversations, qualify leads, and book appointments 24/7."
        />
        <ScalingCard 
          icon={<Mail className="w-8 h-8 text-green-400" />}
          title="Email Marketing"
          tag="READY TO DEPLOY"
          desc="Professional, high-converting email templates and sequences designed to nurture leads into clients automatically."
        />
      </div>
    </div>
  </SlideContainer>
);

const ScalingCard = ({ icon, title, tag, desc }: any) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-left hover:bg-white/10 transition-colors group">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
      <span className={`text-[10px] font-bold tracking-widest px-2 py-1 rounded border ${tag === 'COMING SOON' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : 'border-green-500/30 text-green-400 bg-green-500/10'}`}>
        {tag}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);