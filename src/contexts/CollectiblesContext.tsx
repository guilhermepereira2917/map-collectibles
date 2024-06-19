import { ElmcreekCollectible, FarmingSimulatorMap } from "@/api/elmcreekCollectibles";
import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

interface CollectiblesType {
  map: FarmingSimulatorMap,
  setMap: Dispatch<SetStateAction<FarmingSimulatorMap>>,
  collectibles: ElmcreekCollectible[],
  filteredCollectibles: ElmcreekCollectible[],
  setCollectibles: Dispatch<SetStateAction<ElmcreekCollectible[]>>,
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