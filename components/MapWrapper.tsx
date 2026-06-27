"use client";

import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
  loading: () => (
    <div className="h-[450px] bg-[#000355] animate-pulse flex items-center justify-center">
      <span className="text-white/40 text-sm">Učitavanje mape...</span>
    </div>
  ),
});

export default function MapWrapper() {
  return <MapLeaflet />;
}
