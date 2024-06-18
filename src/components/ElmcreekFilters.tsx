import { ElmcreekCollectibleType } from "@/api/elmcreekCollectibles";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface ElmcreekFiltersProp {
  setCollectiblesType: Dispatch<SetStateAction<ElmcreekCollectibleType[]>>
}

export default function ElmcreekFilters(props: ElmcreekFiltersProp): ReactNode {
  const collectibleTypes = Object.keys(ElmcreekCollectibleType).filter((value: string) => isNaN(Number(value)));

  const handleChange = (values: string[]): void => {
    const types: ElmcreekCollectibleType[] = values.map((value: string) => ElmcreekCollectibleType[value as keyof typeof ElmcreekCollectibleType]);
    props.setCollectiblesType(types);
  }

  return (
    <ToggleGroup type="multiple" onValueChange={handleChange} className="flex flex-wrap items-center justify-center p-2 gap-2">
      {collectibleTypes.map((collectible: string) => {
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