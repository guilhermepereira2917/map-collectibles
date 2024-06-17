'use client';

import elmcreekCollectibles from "@/api/elmcreekCollectibles";
import CollectbilesCounter from "@/components/CollectiblesCounter";
import { CollectedCountProvider } from "@/contexts/CollectedCountContext";
import dynamic from "next/dynamic";
import { useState } from "react";

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

export default function Home() {
  const [collectedCount, setCollectedCount] = useState<number>(0);

  return (
    <main className="w-full h-full flex">
      <CollectedCountProvider collectedCount={collectedCount} setCollectedCount={setCollectedCount}>
        <div className="w-1/6 flex items-center justify-center">
          <CollectbilesCounter total={elmcreekCollectibles.length} />
        </div>
        <div className="w-5/6">
          <Map />
        </div>
      </CollectedCountProvider>
    </main>
  );
}
