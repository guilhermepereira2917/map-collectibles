import { createPosition, ElmcreekCollectible, ElmcreekCollectibleType } from "@/api/elmcreekCollectibles";
import { DivIcon, Icon } from "leaflet";
import { ReactNode } from "react";
import { Marker } from "react-leaflet";

interface ElmcreekMarkerProps {
  collectible: ElmcreekCollectible,
}

export default function ElmcreekMarker(props: ElmcreekMarkerProps): ReactNode {
  const collectibleTypeName: string = ElmcreekCollectibleType[props.collectible.type];

  const icon = new DivIcon({
    html: `<img src="/icons/${collectibleTypeName}.svg" class="w-[32px] h-[32px]"/>`,
    iconSize: [32, 32],
    className: '',
  });

  return (
    <Marker icon={icon} position={createPosition(props.collectible.x, props.collectible.y)} />
  );
}