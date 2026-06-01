'use client';

import { useState } from 'react';

// 範例資料(mock)
const initData = [
  {
    id: 1,
    text: '繳電信費',
  },
  { id: 2, text: '寫作業' },
];

export default function TodoPage() {
  // 記錄待辨事項的狀態
  const [todos, setTodos] = useState(initData);
  // 宣告給文字輸入框使用的狀態
  const [inputText, setInputText] = useState('aaa');

  return (
    <>
      <h1>待辨事項</h1>
      <hr />
      <input
        type="text"
        // 狀態是什麼 -> 文字輸入框呈現什麼
        value={inputText}
        // 在文字輸入框輸入了什麼 -> 狀態更動成什麼
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        // 按下Enter鍵要出發加入到todos
        onKeyDown={(e) => {
          // 按下Enter而且文字輸入框不是空白
          if (e.key === 'Enter' && inputText.trim()) {
            // 建立新的todo
            const newTodo = {
              id: Date.now(),
              text: inputText,
            };
            const nextTodos = [newTodo, ...todos];

            setTodos(nextTodos);

            // 送出後清除文字輸入框
            setInputText('');
          }
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
