'use client';

import { useContext } from 'react';
// 導入context
import { ThemeContext } from '@/context/theme';

export default function ComponentsThemeSwitch() {
  // 從context值中解構出value中的值和切換函式
  const context = useContext(ThemeContext);

  // 設定型別守衛(先擋)
  if (!context) {
    throw Error('It must be used within ThemeProvider');
  }
  const { theme, toggleTheme } = context;
  return (
    <>
      <button onClick={toggleTheme}>
        切換為 {theme === 'dark' ? '明亮' : '黑暗'}佈景
      </button>
    </>
  );
}
