'use client';

import { CollectiblesContext } from "@/contexts/CollectiblesContext";
import { ReactNode, useContext } from "react";

export default function CollectbilesCounter(): ReactNode {
  const { filteredCollectibles } = useContext(CollectiblesContext);

  const collected: number = filteredCollectibles.filter(collectible => collectible.collected).length;
  const total: number = filteredCollectibles.length;

  return (
    <p className="block">
      <b>Collected:</b> {collected}/{total}
    </p>
  );
}