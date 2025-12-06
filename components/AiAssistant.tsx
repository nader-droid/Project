import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { initChat, sendMessageToGemini } from '../services/geminiService';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
      setMessages([
        { role: 'model', text: "Hello! I'm Sarah, the AI assistant for EstateFlow. Are you looking to buy or sell a property today?" }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end no-print">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col mb-4 overflow-hidden border border-gray-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-luxury-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center border border-luxury-gold">
                <Bot className="w-6 h-6 text-luxury-gold" />
              </div>
              <div>
                <h4 className="font-serif font-bold">Sarah AI</h4>
                <p className="text-xs text-gray-300 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online Now
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-luxury-900 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-luxury-900 text-white rounded-full hover:bg-luxury-800 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[10px] text-gray-400 text-center mt-2">
              Powered by Gemini AI • Demo Mode
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-700' : 'bg-luxury-gold'} text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-luxury-900 font-bold">Chat with AI</span>}
      </button>
    </div>
  );
};