import React from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  "Montreal",
  "Quebec City",
  "Laval",
  "Gatineau",
  "Longueuil",
  "Sherbrooke",
  "Lévis",
  "Trois-Rivières"
];

export default function Coverage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Service Regions</h2>
            <p className="text-gray-600 mb-8">Currently serving major Quebec cities with rapid emergency response:</p>
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1609520778163-a16fb3b0453e?auto=format&fit=crop&q=80"
              alt="Quebec Map"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}