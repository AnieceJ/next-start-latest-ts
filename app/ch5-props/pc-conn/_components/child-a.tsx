'use client';

// props
interface ChildAProps {
  setPData: (s: string) => void;
}

export default function ChildA({ setPData }: ChildAProps) {
  const cData = '子女a內部資料';
  return (
    <>
      <div>ChildA(子女元件A)</div>
      <button
        onClick={() => {
          setPData(cData);
        }}
      >
        送資料到父母元件
      </button>
    </>
  );
}
