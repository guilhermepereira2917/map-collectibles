'use client';

import { CollectiblesContext } from "@/contexts/CollectiblesContext";
import { ReactNode, useContext } from "react";

export default function CollectbilesCounter(): ReactNode {
  const { collectibles } = useContext(CollectiblesContext);

  const collected: number = collectibles.filter(collectible => collectible.collected).length;
  const total: number = collectibles.length;

  return (
    <p className="block">
      <b>Collected:</b> {collected}/{total}
    </p>
  );
}