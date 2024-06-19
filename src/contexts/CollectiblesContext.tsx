import { FarmingSimulatorCollectible, FarmingSimulatorMap } from "@/api/farmingSimulatorCollectibles";
import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

interface CollectiblesType {
  map: FarmingSimulatorMap,
  setMap: Dispatch<SetStateAction<FarmingSimulatorMap>>,
  collectibles: FarmingSimulatorCollectible[],
  filteredCollectibles: FarmingSimulatorCollectible[],
  setCollectibles: Dispatch<SetStateAction<FarmingSimulatorCollectible[]>>,
}

const collectiblesDefaultValue: CollectiblesType = {
  map: FarmingSimulatorMap.ElmCreek,
  setMap: () => undefined,
  collectibles: [],
  filteredCollectibles: [],
  setCollectibles: () => [],
}

const CollectiblesContext = createContext<CollectiblesType>(collectiblesDefaultValue);

interface CollectiblesProviderProps extends CollectiblesType {
  children: ReactNode,
}

const CollectiblesProvider = (props: CollectiblesProviderProps): ReactNode => {
  return (
    <CollectiblesContext.Provider value={{ ...props }}>
      {props.children}
    </CollectiblesContext.Provider>
  );
}

export { CollectiblesContext, CollectiblesProvider }