'use client';

import elmcreekCollectibles, { ElmcreekCollectible, ElmcreekCollectibleType } from "@/api/elmcreekCollectibles";
import CollectbilesCounter from "@/components/CollectiblesCounter";
import ElmcreekFilters from "@/components/ElmcreekFilters";
import { Button } from "@/components/ui/button";
import { CollectiblesProvider } from "@/contexts/CollectiblesContext";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const LOCAL_STORAGE_KEY: string = 'elmcreek-collectibles';

export default function Home() {
  const [collectibles, setCollectibles] = useState<ElmcreekCollectible[]>([...elmcreekCollectibles]);
  const [typesFilter, setTypesFilter] = useState<ElmcreekCollectibleType[]>([]);

  const filteredCollectibles: ElmcreekCollectible[] =
    typesFilter.length == 0 ? collectibles : collectibles.filter(collectible => typesFilter.includes(collectible.type));

  useEffect(() => {
    const savedCollectibles: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCollectibles) {
      try {
        setCollectibles(JSON.parse(savedCollectibles));
      } catch {
        localStorage.setItem(LOCAL_STORAGE_KEY, '');
      }
    }
  }, []);

  const saveCollectibles = (): void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(collectibles));
  }

  return (
    <main className="w-full h-full flex">
      <CollectiblesProvider {...{ collectibles, filteredCollectibles, setCollectibles }}>
        <div className="w-1/6 flex flex-col items-center justify-center">
          <CollectbilesCounter />
          <ElmcreekFilters setCollectiblesType={setTypesFilter} />
          <Button onClick={saveCollectibles} className="font-bold">Save Collectibles</Button>
        </div>
        <div className="w-5/6">
          <Map />
        </div>
      </CollectiblesProvider>
    </main>
  );
}
