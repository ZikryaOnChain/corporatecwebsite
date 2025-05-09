'use client';

import { useState } from 'react';
import NumberFlow, { type Value } from "@number-flow/react";

interface NumberFlowProps {
  value: Value;
  trend?: boolean;
  className?: string;
}

export function NumberFlowComponent({ value, trend = false, className = "" }: NumberFlowProps) {
  return (
    <div className={className}>
      <NumberFlow value={value} trend={trend} />
    </div>
  );
}