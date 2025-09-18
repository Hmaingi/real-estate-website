"use client";
import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  className?: string;
}

export interface SearchFilters {
  query: string;
  type: string;
  location: string;
  priceRange: string;
  bedrooms: string;
}

export default function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    type: '',
    location: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl shadow-2xl p-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Search Input */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <Search className="h-4 w-4 inline mr-2" />
            Search Properties
          </label>
          <input
            type="text"
            value={filters.query}
            onChange={(e) => updateFilter('query', e.target.value)}
            placeholder="Enter keyword..."
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <Home className="h-4 w-4 inline mr-2" />
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => updateFilter('type', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <MapPin className="h-4 w-4 inline mr-2" />
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Any Location</option>
            <option value="Karen">Karen</option>
            <option value="Westlands">Westlands</option>
            <option value="Lavington">Lavington</option>
            <option value="Kilimani">Kilimani</option>
            <option value="Runda">Runda</option>
            <option value="CBD">CBD</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <DollarSign className="h-4 w-4 inline mr-2" />
            Price Range
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => updateFilter('priceRange', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Any Price</option>
            <option value="0-50000">Under KES 50,000</option>
            <option value="50000-100000">KES 50,000 - 100,000</option>
            <option value="100000-200000">KES 100,000 - 200,000</option>
            <option value="200000-500000">KES 200,000 - 500,000</option>
            <option value="500000-999999999">Above KES 500,000</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <Bed className="h-4 w-4 inline mr-2" />
            Bedrooms
          </label>
          <select
            value={filters.bedrooms}
            onChange={(e) => updateFilter('bedrooms', e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
      >
        <Search className="h-5 w-5" />
        <span>Search Properties</span>
      </button>
    </form>
  );
}