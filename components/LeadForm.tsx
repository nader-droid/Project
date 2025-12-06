import React, { useState } from 'react';
import { Button } from './Button';
import { LeadFormData } from '../types';
import { ArrowRight, CheckCircle, Home, Calendar, MapPin, User, Check } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<LeadFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = (data: Partial<LeadFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to GHL Webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif text-luxury-900 mb-2">Request Received</h3>
        <p className="text-gray-600 mb-6">
          Our system has automatically tagged your profile and sent a confirmation SMS. An agent will contact you shortly.
        </p>
        <div className="text-xs text-gray-400 border-t pt-4">
          <span className="font-bold">GHL Demo:</span> Lead created → "New Lead" Tag applied → SMS Automation triggered.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
        <div 
          className="h-full bg-luxury-gold transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-serif text-luxury-900">
          {step === 1 && "What's your home worth?"}
          {step === 2 && "Tell us about the property"}
          {step === 3 && "Where should we send the report?"}
        </h3>
        <p className="text-gray-500 text-sm mt-1">Step {step} of 3</p>
      </div>

      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="123 Main St, City, State"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                defaultValue={formData.address}
                onBlur={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              />
            </div>
          </div>
          <Button 
            className="w-full" 
            onClick={() => handleNext({})}
            disabled={!formData.address && false} // Allow skip for demo
          >
            Get Valuation <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-luxury-gold outline-none bg-white"
              onChange={(e) => setFormData(prev => ({ ...prev, propertyType: e.target.value }))}
            >
              <option value="">Select type...</option>
              <option value="single-family">Single Family Home</option>
              <option value="condo">Condo / Apartment</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Selling Timeline</label>
            <div className="grid grid-cols-2 gap-2">
              {['ASAP', '1-3 Months', '3-6 Months', 'Just Curious'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleNext({ timeline: opt })}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:border-luxury-gold hover:bg-luxury-gold/5 text-sm transition-colors text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                required
                type="text" 
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-luxury-gold outline-none"
                placeholder="John Doe"
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <input 
                required
                type="email" 
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-luxury-gold outline-none"
                placeholder="john@example.com"
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              required
              type="tel" 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-luxury-gold outline-none"
              placeholder="(555) 123-4567"
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <Button type="submit" className="w-full" isLoading={isSubmitting} variant="gold">
            See My Valuation Now
          </Button>
          <p className="text-xs text-gray-400 text-center mt-2">
            By clicking above, you agree to receive automated SMS updates.
          </p>
        </form>
      )}
    </div>
  );
};