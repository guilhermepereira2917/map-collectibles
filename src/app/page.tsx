'use client';

import farmingSimulatorCollectibles, { FarmingSimulatorCollectible, FarmingSimulatorCollectibleType, FarmingSimulatorMap } from "@/api/farmingSimulatorCollectibles";
import CollectbilesCounter from "@/components/CollectiblesCounter";
import FarmingSimulatorFilters from "@/components/FarmingSimulatorFilters";
import MapSelect from "@/components/MapSelect";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CollectiblesProvider } from "@/contexts/CollectiblesContext";
import { Save, Trash2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

function getLocalStorageKey(map: FarmingSimulatorMap): string {
  switch (map) {
    case FarmingSimulatorMap.ElmCreek:
      return 'elmcreek-collectibles';
    case FarmingSimulatorMap.HautBeyleron:
      return 'hautbeyleron-collectibles';
  }
}

export default function Home() {
  const [map, setMap] = useState<FarmingSimulatorMap>(FarmingSimulatorMap.ElmCreek);
  const [collectibles, setCollectibles] = useState<FarmingSimulatorCollectible[]>([...farmingSimulatorCollectibles]);

  const [typesFilter, setTypesFilter] = useState<FarmingSimulatorCollectibleType[]>([]);
  const { toast } = useToast();

  const filteredCollectibles: FarmingSimulatorCollectible[] =
    typesFilter.length == 0 ? collectibles : collectibles.filter(collectible => typesFilter.includes(collectible.type));

  const localStorageKey: string = getLocalStorageKey(map);

  useEffect(() => {
    const savedCollectibles: string | null = localStorage.getItem(localStorageKey);
    if (savedCollectibles) {
      try {
        setCollectibles(JSON.parse(savedCollectibles));
      } catch {
        localStorage.setItem(localStorageKey, '');
      }
    }

    setTypesFilter([]);
  }, [map]);

  const saveCollectibles = (): void => {
    localStorage.setItem(localStorageKey, JSON.stringify(collectibles));
    toast({ description: 'Collectibles saved successfully!' });
  }

  const uncollectAll = (): void => {
    collectibles.forEach(collectible => collectible.collected = false);
    setCollectibles([...collectibles]);
  }

  return (
    <main className="w-full h-full flex">
      <CollectiblesProvider {...{ map, setMap, collectibles, filteredCollectibles, setCollectibles }}>
        <div className="w-72 flex flex-col items-center justify-center gap-2">
          <MapSelect />
          <CollectbilesCounter />
          <FarmingSimulatorFilters setCollectiblesType={setTypesFilter} />
          <Button onClick={saveCollectibles} className="font-bold">
            <Save className="mr-1" /> Save Collectibles
          </Button>
          <Button variant="destructive" onClick={uncollectAll} className="font-bold">
            <Trash2 className="mr-1" /> Uncollect All
          </Button>
        </div>
        <div className="w-5/6">
          <Map />
        </div>
      </CollectiblesProvider>
    </main>
  );
}
