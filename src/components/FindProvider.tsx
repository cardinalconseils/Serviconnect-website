import React, { useState } from 'react';
import { LayoutGrid, List, MapPin, Clock, Star, AlertTriangle, Search } from 'lucide-react';
import ProviderCard from './ProviderCard';
import SearchFilters from './SearchFilters';

const mockProviders = [
  {
    id: 1,
    name: "Emergency Plumbing Experts",
    rating: 4.8,
    reviews: 156,
    location: "Montreal",
    responseTime: "Within 1 hour",
    services: ["Burst pipe emergency repair", "Major water leak containment", "Sewage system backup resolution"],
    tags: ["Emergency", "Urgent", "Planned"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Montreal Fire & Water Restoration",
    rating: 4.9,
    reviews: 203,
    location: "Montreal",
    responseTime: "Within 1 hour",
    services: ["Emergency fire damage assessment", "Immediate water extraction", "Smoke damage mitigation"],
    tags: ["Emergency", "Urgent"],
    image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "24/7 Electrical Services",
    rating: 4.7,
    reviews: 128,
    location: "Montreal",
    responseTime: "Within 30 minutes",
    services: ["Power outage resolution", "Electrical fire prevention", "Emergency wiring repair"],
    tags: ["Emergency", "Urgent", "Planned"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function FindProvider() {
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [emergencyOnly, setEmergencyOnly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Service Providers</h1>
            <p className="text-gray-600">Find verified emergency service providers in your area</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded ${isGridView ? 'bg-teal-50 text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded ${!isGridView ? 'bg-teal-50 text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          emergencyOnly={emergencyOnly}
          setEmergencyOnly={setEmergencyOnly}
        />

        <div className={`grid gap-6 mt-8 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {mockProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  );
}