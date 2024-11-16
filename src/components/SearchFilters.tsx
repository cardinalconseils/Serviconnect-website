import React from 'react';
import { Search } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  emergencyOnly: boolean;
  setEmergencyOnly: (emergency: boolean) => void;
}

export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedArea,
  setSelectedArea,
  emergencyOnly,
  setEmergencyOnly
}: SearchFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by provider name or service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        >
          <option value="all">All Categories</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="hvac">HVAC</option>
          <option value="locksmith">Locksmith</option>
        </select>

        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        >
          <option value="all">All Areas</option>
          <option value="montreal">Montreal</option>
          <option value="quebec">Quebec City</option>
          <option value="laval">Laval</option>
          <option value="gatineau">Gatineau</option>
        </select>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={emergencyOnly}
            onChange={(e) => setEmergencyOnly(e.target.checked)}
            className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="text-gray-700">Emergency Only</span>
        </label>
      </div>
    </div>
  );
}