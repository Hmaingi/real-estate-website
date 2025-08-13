import React from 'react';
import PropertyMap from '../components/PropertyMap';

export default function ListingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600">Available Properties</h1>
      
      {/* Map Section */}
      <PropertyMap />

      {/* Add property cards or other content below */}
    </div>
  );
}
