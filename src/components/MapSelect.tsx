
import { FarmingSimulatorMap, farmingSimulatorMapCollectibles, FarmingSimulatorMapsLabel } from "@/api/farmingSimulatorCollectibles";
import { CollectiblesContext } from "@/contexts/CollectiblesContext";
import { ReactNode, useContext } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function MapSelect(): ReactNode {
  const { map, setMap, setCollectibles } = useContext(CollectiblesContext);
  const maps: string[] = Object.keys(FarmingSimulatorMap).filter((value: string): boolean => isNaN(Number(value)));

  const handleValueChange = (value: string): void => {
    const selectedMap: FarmingSimulatorMap = FarmingSimulatorMap[value as keyof typeof FarmingSimulatorMap];
    setMap(selectedMap);

    const mapCollectibles = farmingSimulatorMapCollectibles.get(selectedMap);
    if (mapCollectibles) {
      setCollectibles([...mapCollectibles]);
    }
  }

  return (
    <div className="p-2 w-full">
      <Select defaultValue={FarmingSimulatorMap[map]} onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a Map" />
        </SelectTrigger>
        <SelectContent>
          {maps.map((map: string, index: number): ReactNode =>
            <SelectItem value={map} key={map}>
              {FarmingSimulatorMapsLabel.get(FarmingSimulatorMap[map as keyof typeof FarmingSimulatorMap])}
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  )
}