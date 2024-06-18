import { ElmcreekCollectible } from "@/api/elmcreekCollectibles";
import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

interface CollectiblesType {
  collectibles: ElmcreekCollectible[],
  setCollectibles: Dispatch<SetStateAction<ElmcreekCollectible[]>>,
}

const collectiblesDefaultValue: CollectiblesType = {
  collectibles: [],
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