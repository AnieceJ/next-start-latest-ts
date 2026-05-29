"use clint";

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

  function handleIncreaseClick(productId) {
    // 1. 從現有的狀態拷貝出一個新的複本
    // const nextProducts = [...products] //這種寫法不行, 因為深度有兩層(除非他是單純只有一個物件), 這叫淺拷貝(只能拷貝一層), 超過一層以上無法用展開運算子來拷貝
    // 使用深拷貝語法 :
    const nextProducts = JSON.parse(JSON.stringify(products)); //深拷貝
    // 2. 在複本上做修改
    // 找它是在陣列的哪一個, 找到後把這高物見的count作+1的動作
    const foundIndex = nextProducts.findIndex((v: any)=> v.id === productId);
    nextProducts[foundIndex].count++;
    // 3. 呼叫set方法設定給狀態
    setProducts(nextProducts)
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