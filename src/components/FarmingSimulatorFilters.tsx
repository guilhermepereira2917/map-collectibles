import { FarmingSimulatorCollectibleType, farmingSimulatorMapCollectiblesTypes } from "@/api/farmingSimulatorCollectibles";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { CollectiblesContext } from "@/contexts/CollectiblesContext";

interface ElmcreekFiltersProp {
  setCollectiblesType: Dispatch<SetStateAction<FarmingSimulatorCollectibleType[]>>
}

export default function ElmcreekFilters(props: ElmcreekFiltersProp): ReactNode {
  const { map } = useContext(CollectiblesContext);
  const mapCollectiblesTypes: FarmingSimulatorCollectibleType[] | undefined = farmingSimulatorMapCollectiblesTypes.get(map);
  const collectibleTypes = mapCollectiblesTypes?.map((type: FarmingSimulatorCollectibleType) => FarmingSimulatorCollectibleType[type]);

  if (!collectibleTypes || collectibleTypes.length == 1) {
    return null;
  }

  const handleChange = (values: string[]): void => {
    const types: FarmingSimulatorCollectibleType[] = values.map((value: string) => FarmingSimulatorCollectibleType[value as keyof typeof FarmingSimulatorCollectibleType]);
    props.setCollectiblesType(types);
  }

  return (
    <ToggleGroup type="multiple" onValueChange={handleChange} className="flex flex-wrap items-center justify-center p-2 gap-2">
      {collectibleTypes && collectibleTypes.map((collectible: string) => {
        return (
          <TooltipProvider key={collectible}>
            <Tooltip>
              <TooltipTrigger>
                <ToggleGroupItem value={collectible} asChild className="p-2">
                  <img src={`/icons/${collectible}.svg`} className="w-[48px] h-[48px]" />
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent className="bg-white p-2 rounded border">
                <p>{collectible}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </ToggleGroup>
  );
}