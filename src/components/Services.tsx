import React from 'react';
import { Wrench, Zap, Thermometer, Key, Home, Droplets, AlertTriangle, Bug, Building, Fuel, ArrowUpDown, Shield } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Emergency repairs for burst pipes, severe leaks, blocked drains",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Power outages, exposed wiring, electrical safety hazards",
  },
  {
    icon: Thermometer,
    title: "HVAC",
    description: "Heating/cooling failures, gas leaks, critical ventilation",
  },
  {
    icon: Key,
    title: "Locksmith",
    description: "Emergency lockouts, break-in repairs, security systems",
  },
  {
    icon: AlertTriangle,
    title: "Tree Service",
    description: "Fallen trees, dangerous limbs, storm damage",
  },
  {
    icon: Droplets,
    title: "Water Damage",
    description: "Flood extraction, drying, mold prevention",
  },
  {
    icon: AlertTriangle,
    title: "Fire Damage",
    description: "Emergency board-up, smoke removal, restoration",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "Urgent pest infestations, wildlife removal",
  },
  {
    icon: Building,
    title: "Structural",
    description: "Emergency structural assessment and repairs",
  },
  {
    icon: Fuel,
    title: "Gas Line",
    description: "Gas leak detection and emergency repairs",
  },
  {
    icon: ArrowUpDown,
    title: "Elevator",
    description: "Elevator malfunctions and entrapment rescue",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security system failures and emergency repairs",
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-4">Emergency Services</h2>
        <p className="text-center text-gray-600 mb-12">Expert professionals ready to handle any emergency, 24/7</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-teal-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="text-teal-600 text-sm">24/7 Emergency Response</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600">
            Find Emergency Service Now
          </button>
          <p className="text-gray-500 text-sm mt-4">
            All our service providers are verified and available 24/7
          </p>
        </div>
      </div>
    </section>
  );
}