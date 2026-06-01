'use client';

import { useState } from 'react';
const initData = [
  {
    id: 1,
    text: '繳電話費',
  },
  {
    id: 2,
    text: '寫作業',
  },
];

export default function TodoPage() {
  // 記錄待辦事項的狀態
  const [todos, setTodos] = useState(initData);
  // 宣告給文字輸入匡使用的狀態
  const [inputText, setInputText] = useState('aaa');
  return (
    <>
      <h1>待辦事項</h1>
      <hr />
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </>
  );
}
