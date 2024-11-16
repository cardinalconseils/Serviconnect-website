import React from 'react';
import { AlertTriangle, Shield, Clock } from 'lucide-react';

const steps = [
  {
    icon: AlertTriangle,
    title: "Submit Request",
    description: "Describe your emergency through our app or call center"
  },
  {
    icon: Shield,
    title: "Instant Matching",
    description: "Our AI matches you with qualified available providers"
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Track your provider's location and estimated arrival time"
  }
];

export default function HomeHowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How ServiConnect Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}