import React from 'react';
import { MapPin, Clock, Star, AlertTriangle } from 'lucide-react';

interface Provider {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  responseTime: string;
  services: string[];
  tags: string[];
  image: string;
}

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img
              src={provider.image}
              alt={provider.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{provider.name}</h3>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium ml-1">{provider.rating}</span>
                <span className="text-gray-500 ml-1">({provider.reviews})</span>
              </div>
            </div>
          </div>
          <AlertTriangle className="w-5 h-5 text-red-500" />
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {provider.location}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            Response: {provider.responseTime}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {provider.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 rounded-full text-sm font-medium ${
                tag === 'Emergency'
                  ? 'bg-red-100 text-red-700'
                  : tag === 'Urgent'
                  ? 'bg-orange-100 text-orange-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {provider.services.map((service) => (
            <div
              key={service}
              className="text-sm py-1.5 px-3 bg-gray-50 rounded-lg text-gray-700"
            >
              {service}
            </div>
          ))}
        </div>

        <button className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
          Request Emergency Service
        </button>
      </div>
    </div>
  );
}