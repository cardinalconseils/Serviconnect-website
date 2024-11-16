import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, AlertCircle, Search, Clock, CreditCard, Star, Shield, Phone } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: AlertCircle,
      title: "Request Emergency Service",
      description: "Describe your emergency situation and location through our platform or call center.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
    },
    {
      icon: Search,
      title: "Get Matched Instantly",
      description: "Our AI-powered system matches you with qualified and available providers in your area.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      icon: Clock,
      title: "Track in Real-Time",
      description: "Monitor your service provider's location and get live updates on their arrival time.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
    },
    {
      icon: CreditCard,
      title: "Payment & Review",
      description: "Securely pay through our platform and share your experience to help others.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for all your emergency home service needs."
    },
    {
      icon: Shield,
      title: "Verified Providers",
      description: "All service providers are thoroughly vetted, licensed, and insured."
    },
    {
      icon: Star,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprises."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How ServiConnect Works</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Get emergency home services with just a few taps. Here's how we connect you with reliable professionals in minutes.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.title} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <span className="text-sm font-medium text-teal-600">Step {index + 1}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ServiConnect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Peace of Mind?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up now and experience the ease of emergency home services with ServiConnect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Get Emergency Help
            </button>
            <Link
              to="/privacy"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}