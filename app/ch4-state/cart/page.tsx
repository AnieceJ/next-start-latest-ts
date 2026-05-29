'use client';

import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  // v1 用最基本的想法來做物件陣列狀態的更新
  function handleIncreaseClick(productId) {
    // 1. 從現有的狀態拷貝出一個新的複本
    // const nextProducts = [...products] //這種寫法不行, 因為深度有兩層(除非他是單純只有一個物件), 這叫淺拷貝(只能拷貝一層), 超過一層以上無法用展開運算子來拷貝
    // 使用深拷貝語法 :
    const nextProducts = JSON.parse(JSON.stringify(products)); //深拷貝
    // 2. 在複本上做修改
    // 找它是在陣列的哪一個
    const foundIndex = nextProducts.findIndex((v: any) => v.id === productId);
    // 如果有找到(要做判斷)
    if (foundIndex !== -1) {
      nextProducts[foundIndex].count++;
      // 找到後把這個物件的count作+1的動作(理論上會找到，返回索引值)
      // 3. 呼叫set方法設定給狀態
      setProducts(nextProducts);
    }
  }

  // v2 改用map來作更新物件陣列狀態的動作
  function handleIncrease(productId: any){
    // 用map方法來做1、2步
    const nextProducts = products.map((product)=>{
      // 對符合條件的物件增加數量(count)
      if(product.id === productId)
        return { ...product, count: product.count + 1 };
      else return product;
    });
    // 等同於做 const nextProducts = [...products]拷貝出來新陣列
  }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
