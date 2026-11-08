"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import { areaPath } from "@/lib/areas";
import "leaflet/dist/leaflet.css";

const locations: { name: string; lat: number; lng: number; main: boolean; slug?: string }[] = [
  { name: "Kumodraž — sedište Strada 46", lat: 44.733, lng: 20.517, main: true, slug: "kumodraz" },
  { name: "Voždovac", lat: 44.762, lng: 20.486, main: false, slug: "vozdovac" },
  { name: "Banjica", lat: 44.768, lng: 20.484, main: false, slug: "banjica" },
  { name: "Rakovica", lat: 44.768, lng: 20.434, main: false, slug: "rakovica" },
  { name: "Medaković", lat: 44.783, lng: 20.517, main: false, slug: "medakovic" },
  { name: "Konjarnik", lat: 44.783, lng: 20.498, main: false, slug: "konjarnik" },
  { name: "Braće Jerković", lat: 44.776, lng: 20.484, main: false, slug: "braca-jerkovic" },
  { name: "Kaluđerica", lat: 44.749, lng: 20.567, main: false, slug: "kaludjerica" },
  { name: "Ripanj", lat: 44.700, lng: 20.533, main: false },
  { name: "Žarkovo", lat: 44.7585, lng: 20.4195, main: false, slug: "zarkovo" },
  { name: "Lešće", lat: 44.797, lng: 20.536, main: false, slug: "lesce" },
  { name: "Dedinje", lat: 44.770, lng: 20.455, main: false, slug: "dedinje" },
  { name: "Košutnjak", lat: 44.772, lng: 20.437, main: false, slug: "kosutnjak" },
  { name: "Miljakovac", lat: 44.743, lng: 20.440, main: false, slug: "miljakovac" },
  { name: "Sunčani breg", lat: 44.735, lng: 20.455, main: false, slug: "suncani-breg" },
  { name: "Resnik", lat: 44.7165, lng: 20.454, main: false, slug: "resnik" },
  { name: "Autokomanda", lat: 44.787, lng: 20.470, main: false, slug: "autokomanda" },
  { name: "Zvezdara", lat: 44.7975, lng: 20.500, main: false, slug: "zvezdara" },
  { name: "Centar", lat: 44.8147, lng: 20.4607, main: false, slug: "centar" },
  { name: "Dorćol", lat: 44.8250, lng: 20.4640, main: false, slug: "dorcol" },
  { name: "Čukarica", lat: 44.7845, lng: 20.4165, main: false, slug: "cukarica" },
  { name: "Mirijevo", lat: 44.789, lng: 20.545, main: false, slug: "mirijevo" },
  { name: "Savski venac", lat: 44.797, lng: 20.448, main: false, slug: "savski-venac" },
  { name: "Vračar", lat: 44.797, lng: 20.472, main: false, slug: "vracar" },
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
      center={[44.75, 20.47]}
      zoom={12}
      style={{ height: "450px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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

      {locations.map(({ name, lat, lng, main, slug }) => (
        <Marker key={name} position={[lat, lng]} icon={createIcon(main)}>
          <Popup>
            <span style={{ fontWeight: "bold", color: "#0003f3" }}>{name}</span>
            {slug && (
              <><br /><a href={areaPath(slug)} style={{ fontSize: "12px", color: "#0003f3", textDecoration: "underline" }}>Šlep služba — saznaj više</a></>
            )}
            {main && (
              <><br /><span style={{ fontSize: "12px", color: "#555" }}>Slep Služba Strada 46 · 064/9-200-200</span></>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
