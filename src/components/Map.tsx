'use client';

import { MAP_UNITS } from "@/api/constants";
import { ElmcreekCollectible, FarmingSimulatorMap } from "@/api/elmcreekCollectibles";
import { CRS, LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { ReactNode, useContext } from "react";
import { ImageOverlay, MapContainer } from "react-leaflet";
import "../app/leaflet.css";
import ElmcreekMarker from "./ElmcreekMarker";
import MapClickLogger from "./MapClickLogger";
import { CollectiblesContext } from "@/contexts/CollectiblesContext";

export default function Map(): ReactNode {
  const { map, filteredCollectibles } = useContext(CollectiblesContext);

  const boundsCoordinates: LatLngBoundsExpression = [[0, 0], [MAP_UNITS, MAP_UNITS]];
  const centerCoordinates: LatLngExpression = [boundsCoordinates[1][0] / 2, boundsCoordinates[1][1] / 2];

  const mapUrl: string = `/maps/fs22-${FarmingSimulatorMap[map].toLowerCase()}.png`;

  return (
    <MapContainer crs={CRS.Simple} center={centerCoordinates} zoom={-1} minZoom={-1} maxZoom={1} scrollWheelZoom={true} className="w-full h-full">
      <ImageOverlay url={mapUrl} bounds={boundsCoordinates} />
      <MapClickLogger />

      {filteredCollectibles.map((collectible: ElmcreekCollectible, index: number): ReactNode => <ElmcreekMarker collectible={collectible} key={index} />)}
    </MapContainer >
  );
} 