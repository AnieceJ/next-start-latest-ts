'use client';

import { ReactNode } from 'react';

interface Data {
  x?: number;
  y?: number;
}

// props
interface ChildProps {
  title?: string;
  price?: number;
  isConnected?: boolean;
  aa?: number[];
  oa?: Data;
  sum?: (a: number, b: number) => number;
  jsx?: ReactNode;
}
export default function Child({
  title = '',
  price = 0,
  isConnected = true,
  aa = [],
  oa = {},
  sum = (a, b) => a + b,
  jsx = <></>,
}: ChildProps) {
  return (
    <>
      <div>ChildA(子女元件A)</div>
    </>
  );
}
