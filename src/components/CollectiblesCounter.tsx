'use client';

import { ReactNode } from "react";

interface CollectbilesCounterProps {
  collected: number,
  total: number,
}

export default function CollectbilesCounter(props: CollectbilesCounterProps): ReactNode {
  return (
    <p className="block">
      <b>Collected:</b> {props.collected}/{props.total}
    </p>
  );
}