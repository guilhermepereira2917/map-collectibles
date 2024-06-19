import { createPosition, ElmcreekCollectible, ElmcreekCollectibleColor, FarmingSimulatorCollectibleType } from "@/api/elmcreekCollectibles";
import { DivIcon } from "leaflet";
import { SquareCheck } from 'lucide-react';
import { ReactNode, useContext, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Button } from "./ui/button";
import { CollectiblesContext } from "@/contexts/CollectiblesContext";

interface ElmcreekMarkerProps {
  collectible: ElmcreekCollectible,
}

const collectedColor: string = 'filter: brightness(0) saturate(100%) invert(30%) sepia(1%) saturate(0%) hue-rotate(22deg) brightness(100%) contrast(86%)';

export default function ElmcreekMarker(props: ElmcreekMarkerProps): ReactNode {
  const { collectibles, setCollectibles } = useContext(CollectiblesContext);
  const popupRef = useRef<any>();

  const collected: boolean = props.collectible.collected;

  const collectibleTypeName: string = FarmingSimulatorCollectibleType[props.collectible.type];
  const markerColor: string = collected ? collectedColor : props.collectible.color ? getMarkerColor(props.collectible.color) : '';

  const icon = new DivIcon({
    html: `<img src="/icons/${collectibleTypeName}.svg" class="w-[32px] h-[32px]" style="${markerColor}" />`,
    iconSize: [32, 32],
    className: '',
  });

  const handleClick = (): void => {
    closePopup();

    props.collectible.collected = !props.collectible.collected;
    setCollectibles([...collectibles]);
  };

  const closePopup = (): void => {
    if (popupRef.current) {
      popupRef.current._closeButton.click();
    }
  };

  return (
    <Marker icon={icon} position={createPosition(props.collectible.x, props.collectible.y)}>
      <Popup ref={popupRef} className="flex">
        <p className="block">
          <b>Coordinates:</b> {`${props.collectible.x}, ${props.collectible.y}`} <br />
          <b>Type: </b> {collectibleTypeName} <br />
          {props.collectible.color && (
            <>
              <b>Color: </b> {ElmcreekCollectibleColor[props.collectible.color]}
            </>
          )}
        </p>

        <Button onClick={handleClick}>
          <SquareCheck className="mr-2" /> Mark as {collected ? 'Uncollected' : 'Collected'}
        </Button>
      </Popup>
    </Marker>
  );
}

function getMarkerColor(color: ElmcreekCollectibleColor): string {
  if (color === ElmcreekCollectibleColor.Red) {
    return 'filter: brightness(0) saturate(100%) invert(14%) sepia(88%) saturate(5192%) hue-rotate(358deg) brightness(92%) contrast(125%);';
  } else if (color === ElmcreekCollectibleColor.Orange) {
    return 'filter: brightness(0) saturate(100%) invert(49%) sepia(47%) saturate(3853%) hue-rotate(3deg) brightness(103%) contrast(107%);';
  } else if (color === ElmcreekCollectibleColor.Yellow) {
    return 'filter: brightness(0) saturate(100%) invert(84%) sepia(80%) saturate(1602%) hue-rotate(12deg) brightness(108%) contrast(102%);';
  } else if (color === ElmcreekCollectibleColor.Lime) {
    return 'filter: brightness(0) saturate(100%) invert(78%) sepia(61%) saturate(461%) hue-rotate(61deg) brightness(101%) contrast(102%);';
  } else if (color === ElmcreekCollectibleColor.Green) {
    return 'filter: brightness(0) saturate(100%) invert(66%) sepia(29%) saturate(7466%) hue-rotate(76deg) brightness(119%) contrast(121%);';
  } else if (color === ElmcreekCollectibleColor.Cyan) {
    return 'filter: brightness(0) saturate(100%) invert(85%) sepia(76%) saturate(2103%) hue-rotate(90deg) brightness(102%) contrast(102%);';
  } else if (color === ElmcreekCollectibleColor.Azure) {
    return 'filter: brightness(0) saturate(100%) invert(32%) sepia(98%) saturate(2390%) hue-rotate(197deg) brightness(101%) contrast(107%);';
  } else if (color === ElmcreekCollectibleColor.Blue) {
    return 'filter: brightness(0) saturate(100%) invert(19%) sepia(89%) saturate(2260%) hue-rotate(236deg) brightness(98%) contrast(159%);';
  } else if (color === ElmcreekCollectibleColor.Violet) {
    return 'filter: brightness(0) saturate(100%) invert(19%) sepia(99%) saturate(6561%) hue-rotate(271deg) brightness(91%) contrast(130%);';
  } else if (color === ElmcreekCollectibleColor.Magenta) {
    return 'filter: brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(2403%) hue-rotate(288deg) brightness(110%) contrast(144%);';
  }

  return '';
}