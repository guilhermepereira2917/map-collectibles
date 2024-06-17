import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

interface CollectedCountType {
  collectedCount: number,
  setCollectedCount: Dispatch<SetStateAction<number>>,
}

const collectedCountDefaultValues = {
  collectedCount: 0,
  setCollectedCount: () => 0,
}

const CollectedCountContext = createContext<CollectedCountType>(collectedCountDefaultValues);

interface CollectedCountProviderProps extends CollectedCountType {
  children: ReactNode,
}

const CollectedCountProvider = (props: CollectedCountProviderProps): ReactNode => {
  return (
    <CollectedCountContext.Provider value={{ ...props }}>
      {props.children}
    </CollectedCountContext.Provider>
  );
}

export { CollectedCountContext, CollectedCountProvider }