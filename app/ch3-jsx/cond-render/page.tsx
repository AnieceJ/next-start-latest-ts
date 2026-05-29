'use client';

import { useState } from 'react';


export default function CondRenderPage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>JSX條件式渲染範例</h1>
      <hr />
      <h1>{count}</h1>
      <button
        onClick={()=>{
          setCount(count + 1);
        }}
        >
          +1
      </button>
      <button
      onClick={()=>{
        setCount(count - 1);
      }}
      >
        -1
      </button>
      <hr />
      {/* 三元 */}
      {count ? <p>1. count目前是{count}</p> : null}
      {/* 三元, 建議的寫法 */}
      {count !== 0 ? <p>2. count目前是{count}</p> : null}
      
      {/* 邏輯與(容易混亂的寫法, 0也會被渲染出來) -> 渲染陷阱 */}
      {/* {count && <p>3. count目前是{count}</p>} */}

      {/* 強制將條件判斷轉為布林值, 0不會被渲染出來 */}
      {Boolean(count) && <p>4. count目前是{count}</p>}
      {!!count && <p>5. count目前是{count}</p>}
      {count !== 0 && <p>6. count目前是{count}</p>}
    </>
  );
}
