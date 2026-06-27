"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";

const locations = [
  { name: "Kumodraž — sedište Strada 46", lat: 44.733, lng: 20.517, main: true },
  { name: "Voždovac", lat: 44.762, lng: 20.486, main: false },
  { name: "Banjica", lat: 44.768, lng: 20.484, main: false },
  { name: "Rakovica", lat: 44.768, lng: 20.434, main: false },
  { name: "Medaković", lat: 44.783, lng: 20.517, main: false },
  { name: "Konjarnik", lat: 44.783, lng: 20.498, main: false },
  { name: "Braće Jerković", lat: 44.776, lng: 20.484, main: false },
  { name: "Kaluđerica", lat: 44.749, lng: 20.567, main: false },
  { name: "Ripanj", lat: 44.700, lng: 20.533, main: false },
];

const createIcon = (main: boolean) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:${main ? 18 : 13}px;
      height:${main ? 18 : 13}px;
      background:${main ? "#ccff00" : "#ffffff"};
      border:3px solid ${main ? "#0003f3" : "#0003f3"};
      border-radius:50%;
      box-shadow:0 0 10px ${main ? "#ccff0099" : "#0003f399"};
    "></div>`,
    iconSize: [main ? 18 : 13, main ? 18 : 13],
    iconAnchor: [main ? 9 : 6, main ? 9 : 6],
    popupAnchor: [0, -10],
  });

export default function MapLeaflet() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)["_getIconUrl"];
  }, []);

  return (
    <MapContainer
      center={[44.745, 20.500]}
      zoom={12}
      style={{ height: "450px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
      />

      <Circle
        center={[44.733, 20.517]}
        radius={10000}
        pathOptions={{
          color: "#ccff00",
          fillColor: "#0003f3",
          fillOpacity: 0.12,
          weight: 2,
          dashArray: "6 4",
        }}
      />

      {locations.map(({ name, lat, lng, main }) => (
        <Marker key={name} position={[lat, lng]} icon={createIcon(main)}>
          <Popup>
            <span style={{ fontWeight: "bold", color: "#0003f3" }}>{name}</span>
            {main && (
              <><br /><span style={{ fontSize: "12px", color: "#555" }}>Slep Služba Strada 46 · 064/9-200-200</span></>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
