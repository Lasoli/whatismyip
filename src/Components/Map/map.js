import React from "react";
import "./map.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map({ lat, lng }) {
  const position = [lat, lng];

  return (
    <div>
      <MapContainer
        className="map"
        center={position}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
}
