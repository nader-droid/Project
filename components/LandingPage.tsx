import React from 'react';
import { LeadForm } from './LeadForm';
import { AiAssistant } from './AiAssistant';
import { Shield, Star, Clock, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-light font-sans text-gray-800 relative overflow-y-auto h-full">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-40 px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-white tracking-widest flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-luxury-gold flex items-center justify-center">
              <span className="text-luxury-gold text-lg">E</span>
            </div>
            ESTATE FLOW
          </div>
          <div className="hidden md:flex gap-8 text-white/90 text-sm font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-luxury-gold transition-colors">Buy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Sell</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Valuation</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Contact</a>
          </div>
          <button className="hidden md:block bg-luxury-gold text-luxury-900 px-6 py-2 rounded font-bold hover:bg-white transition-colors">
            (555) 123-4567
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-e32c2159f828?q=80&w=2564&auto=format&fit=crop" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-900/70 via-luxury-900/40 to-luxury-900/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4">
              #1 Real Estate Team in the City
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Unlock the True Value of <span className="text-luxury-gold italic">Your Home</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
              We combine market expertise with cutting-edge technology to get you the best price in the shortest time. Experience the difference.
            </p>
            
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-white font-bold">$150M+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">Sold in 2023</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-white font-bold">14 Days</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">Avg. on Market</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-200">
            <LeadForm />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-luxury-gold to-transparent mx-auto"></div>
        </div>
      </header>

      {/* Trust/Social Proof Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-luxury-900 mb-4">Why Trusted Clients Choose Us</h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-luxury-gold" />}
              title="Verified Buyers"
              desc="We work with a pre-vetted network of buyers ready to make competitive offers immediately."
            />
            <FeatureCard 
              icon={<Star className="w-8 h-8 text-luxury-gold" />}
              title="Premium Marketing"
              desc="Your home deserves the spotlight. We provide professional staging, 4K photography, and drone tours."
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-luxury-gold" />}
              title="24/7 Support"
              desc="Our AI-powered systems and dedicated team ensure no lead is ever missed, day or night."
            />
          </div>
        </div>
      </section>

      {/* Featured Listing (Static Demo) */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-luxury-900 mb-2">Featured Listings</h2>
              <p className="text-gray-500">Curated properties just for you</p>
            </div>
            <button className="text-luxury-900 font-bold hover:text-luxury-gold transition-colors hidden md:block">
              View All Properties &rarr;
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ListingCard 
              image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
              price="$1,250,000"
              address="4521 Regency Lane"
              specs="4 Bed | 3 Bath | 2,800 Sqft"
            />
             <ListingCard 
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
              price="$2,100,000"
              address="880 Ocean View Blvd"
              specs="5 Bed | 4.5 Bath | 4,200 Sqft"
            />
             <ListingCard 
              image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2592&auto=format&fit=crop"
              price="$890,000"
              address="123 Maple District"
              specs="3 Bed | 2 Bath | 1,950 Sqft"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-serif font-bold tracking-widest mb-6">ESTATE FLOW</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Redefining the real estate experience with technology, transparency, and trust.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-luxury-gold" /> 123 Business Ave, Suite 100</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-luxury-gold" /> (555) 123-4567</li>
                <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-luxury-gold" /> Mon-Fri: 9am - 6pm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-luxury-gold">Home Valuation</a></li>
                <li><a href="#" className="hover:text-luxury-gold">Featured Listings</a></li>
                <li><a href="#" className="hover:text-luxury-gold">About Our Team</a></li>
                <li><a href="#" className="hover:text-luxury-gold">Mortgage Calculator</a></li>
              </ul>
            </div>
            <div>
               <h4 className="font-bold mb-6">Follow Us</h4>
               <div className="flex gap-4">
                 <SocialIcon icon={<Instagram className="w-5 h-5" />} />
                 <SocialIcon icon={<Facebook className="w-5 h-5" />} />
                 <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
               </div>
            </div>
          </div>
          <div className="text-center text-gray-600 text-xs">
            &copy; 2024 EstateFlow Demo System. Built for High-Performance Agents.
          </div>
        </div>
      </footer>

      {/* Floating AI Chat */}
      <AiAssistant />
    </div>
  );
}

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-8 border border-gray-100 hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300 rounded-xl bg-white group">
    <div className="mb-6 bg-luxury-light w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/10 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-luxury-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const ListingCard = ({ image, price, address, specs }: { image: string, price: string, address: string, specs: string }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
    <div className="relative h-64 overflow-hidden">
      <img src={image} alt={address} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-4 left-4 bg-luxury-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
        For Sale
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20">
        <div className="text-white text-2xl font-bold font-serif">{price}</div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-luxury-900 mb-1">{address}</h3>
      <p className="text-gray-500 text-sm mb-4">{specs}</p>
      <div className="flex justify-between items-center border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-400">Listed 3 days ago</span>
        <span className="text-luxury-gold text-sm font-bold group-hover:translate-x-1 transition-transform">View Details &rarr;</span>
      </div>
    </div>
  </div>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-luxury-gold hover:border-luxury-gold transition-all">
    {icon}
  </a>
);
