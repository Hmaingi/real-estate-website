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
    // Only runs on client
  }, []);

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden border border-yellow-500 shadow-lg">
      <MapContainer
        center={[-1.286389, 36.817223]} // Nairobi coords, change as needed
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-1.286389, 36.817223]}>
          <Popup>
            Sample Property <br /> Nairobi CBD
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
