'use client'; // 意義是在客戶端使用，代表這個檔案中的元件是`客戶端元件(RCC)`
// 如果沒有寫'use client'就是 `伺服器元件(RSC)`

import { useTheme } from '@/context/theme';

export default function HomePage() {
  const { theme } = useTheme();

  const color = theme === 'dark' ? 'white' : 'black';
  const bgColor = theme === 'dark' ? 'black' : 'white';

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <h1>HomePage</h1>
        <p>這裡有一些文字</p>
      </div>
    </>
  );
}
