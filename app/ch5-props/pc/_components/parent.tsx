'use client';

import Child from './child';

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      <Child
        title="目前正在教第5章"
        price={100}
        isConnected={false}
        aa={[1, 2, 3]}
        oa={{ x: 1, y: 2 }}
        sum={(a, b) => a + b}
        jsx={<p>hello</p>}
      />
    </>
  );
}
