'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for missing marker icons in Leaflet (Next.js/React issue)
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function PropertyMap() {
  useEffect(() => {
    // Runs only on client
  }, []);

  // 🏠 Featured properties with typed coordinates
  const featuredProperties: {
    id: number;
    name: string;
    coords: [number, number]; // ✅ Tuple type ensures exactly 2 numbers
    price: string;
  }[] = [
    {
      id: 1,
      name: "Luxury Villa - Karen",
      coords: [-1.3416, 36.7213],
      price: "KES 45M"
    },
    {
      id: 2,
      name: "Apartment - Westlands",
      coords: [-1.2647, 36.8116],
      price: "KES 15M"
    },
    {
      id: 3,
      name: "Land - Ruiru",
      coords: [-1.1475, 36.9634],
      price: "KES 5M"
    }
  ];

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden border border-yellow-500 shadow-lg">
      <MapContainer
        center={[-1.286389, 36.817223]} // Nairobi center
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 📍 Main HQ Marker */}
        <Marker position={[-1.286389, 36.817223]}>
          <Popup>
            Legacy HQ <br /> Nairobi CBD
          </Popup>
        </Marker>

        {/* 📍 Featured Properties Markers */}
        {featuredProperties.map((property) => (
          <Marker key={property.id} position={property.coords}>
            <Popup>
              <strong>{property.name}</strong> <br />
              Price: {property.price}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
