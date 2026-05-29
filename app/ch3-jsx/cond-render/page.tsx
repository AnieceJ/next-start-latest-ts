'use client';

import { useState } from 'react';

<<<<<<< HEAD

export default function CondRenderPage() {
  const [count, setCount] = useState(0)
=======
export default function CondRenderPage() {
  const [count, setCount] = useState(0);

>>>>>>> upstream
  return (
    <>
      <h1>JSX條件式渲染範例</h1>
      <hr />
      <h1>{count}</h1>
      <button
<<<<<<< HEAD
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
=======
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
>>>>>>> upstream
      >
        -1
      </button>
      <hr />
<<<<<<< HEAD
      {/* 三元 */}
      {count ? <p>1. count目前是{count}</p> : null}
      {/* 三元, 建議的寫法 */}
      {count !== 0 ? <p>2. count目前是{count}</p> : null}
      
      {/* 邏輯與(容易混亂的寫法, 0也會被渲染出來) -> 渲染陷阱 */}
      {/* {count && <p>3. count目前是{count}</p>} */}

      {/* 強制將條件判斷轉為布林值, 0不會被渲染出來 */}
      {Boolean(count) && <p>4. count目前是{count}</p>}
      {!!count && <p>5. count目前是{count}</p>}
=======
      {/* 三元表達式，相當於if...else */}
      {count ? <p>1. count目前是{count}</p> : null}
      {/* 三元，建議的寫法，把判斷條件寫清楚 */}
      {count !== 0 ? <p>2. count目前是{count}</p> : null}
      {/* 這個判斷條件會用falsy判斷，如果count是0或NaN會在畫面上渲染。產生不需要的結果 */}
      {count && <p>3. count目前是{count}</p>}
      {/* 解決方案1. : 強制將條件判斷轉為布林值 */}
      {Boolean(count) && <p>4. count目前是{count}</p>}
      {!!count && <p>5. count目前是{count}</p>}
      {/* 解決方案2. : 用比較運算(>, <, !==, ===) */}
>>>>>>> upstream
      {count !== 0 && <p>6. count目前是{count}</p>}
    </>
  );
}
