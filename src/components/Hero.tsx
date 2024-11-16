import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-teal-900 to-teal-800 py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-serviconnect.jpg"
          alt="Professional Service Provider"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-teal-800/70" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-12 relative z-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              24/7 Emergency<br />
              Home Services<br />
              <span className="text-red-500">When You Need It<br />Most</span>
            </h1>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Connect with verified emergency service providers in your area within minutes. Fast, reliable, and professional help is just a click away.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-500 text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-red-600 transition-colors shadow-lg">
                Get Emergency Help <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/80 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/30" />
                <span className="text-white/90 font-medium">Verified Providers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/30" />
                <span className="text-white/90 font-medium">Quick Response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/30" />
                <span className="text-white/90 font-medium">Top Rated Service</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="text-white font-medium">Plumbing</div>
                  <div className="text-teal-100 text-sm">24/7 Available</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="text-white font-medium">Electrical</div>
                  <div className="text-teal-100 text-sm">24/7 Available</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="text-white font-medium">HVAC</div>
                  <div className="text-teal-100 text-sm">24/7 Available</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="text-white font-medium">Locksmith</div>
                  <div className="text-teal-100 text-sm">24/7 Available</div>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-white font-medium mb-1">Average Response Time</div>
                <div className="text-red-500 text-3xl font-bold mb-1">15 Minutes</div>
                <div className="text-teal-100 text-sm">in your area</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}