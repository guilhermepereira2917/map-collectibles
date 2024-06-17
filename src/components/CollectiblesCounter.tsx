'use client';

import { CollectedCountContext } from "@/contexts/CollectedCountContext";
import { ReactNode, useContext } from "react";

interface CollectbilesCounterProps {
  total: number,
}

export default function CollectbilesCounter(props: CollectbilesCounterProps): ReactNode {
  const { collectedCount } = useContext(CollectedCountContext);

  return (
    <p className="block">
      <b>Collected:</b> {collectedCount}/{props.total}
    </p>
  );
}