'use client';

import { CRS, LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { ReactNode } from "react";
import { ImageOverlay, MapContainer } from "react-leaflet";
import "../app/leaflet.css";

export default function Map(): ReactNode {
  const boundsCoordinates: LatLngBoundsExpression = [[-26.5, -25], [1021.5, 1023]];
  const centerCoordinates: LatLngExpression = [boundsCoordinates[1][0] / 2, boundsCoordinates[1][1] / 2];

  return (
    <MapContainer crs={CRS.Simple} center={centerCoordinates} zoom={0} maxZoom={1} scrollWheelZoom={true} className="w-full h-full" >
      <ImageOverlay url="maps/fs22-elmcreek.png" bounds={boundsCoordinates} />
    </MapContainer>
  );
}