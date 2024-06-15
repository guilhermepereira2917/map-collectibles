'use client';

import { MAP_UNITS } from "@/api/constants";
import elmcreekCollectibles, { createPosition, ElmcreekCollectible } from "@/api/elmcreekCollectibles";
import { CRS, LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { ReactNode } from "react";
import { ImageOverlay, MapContainer, Marker } from "react-leaflet";
import "../app/leaflet.css";
import MapClickLogger from "./MapClickLogger";

export default function Map(): ReactNode {
  const boundsCoordinates: LatLngBoundsExpression = [[0, 0], [MAP_UNITS, MAP_UNITS]];
  const centerCoordinates: LatLngExpression = [boundsCoordinates[1][0] / 2, boundsCoordinates[1][1] / 2];

  return (
    <MapContainer crs={CRS.Simple} center={centerCoordinates} zoom={-1} minZoom={-1} maxZoom={1} scrollWheelZoom={true} className="w-full h-full">
      <ImageOverlay url="maps/fs22-elmcreek.png" bounds={boundsCoordinates} />
      <MapClickLogger />

      {elmcreekCollectibles.map((collectible: ElmcreekCollectible, index: number): ReactNode => {
        return (
          <Marker position={createPosition(collectible.x, collectible.y)} key={index} />
        );
      })}
    </MapContainer >
  );
}