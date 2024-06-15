import { useMapEvent } from "react-leaflet";

export default function MapClickLogger() {
  const map = useMapEvent('click', (event) => {
    console.log(map.mouseEventToLatLng(event.originalEvent));
  });

  return null;
}