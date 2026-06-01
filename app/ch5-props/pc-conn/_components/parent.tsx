'use client';

import ChildA from './child-A';
import ChildB from './child-B';

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      <ChildA />
      <ChildB />
    </>
  );
}
