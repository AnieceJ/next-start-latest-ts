'use client';


export default function RenderPage() {
  return (
    <>
      <h1>JSX渲染(render)範例</h1>
      <hr />
      <h2>數字number</h2>
      {1 - 1}
      <br />
      {NaN}
      <br />
      <h2>字串string</h2>
      這是字串
      <br />
      {'這也是字串'}
      <br />
      {`這還是字串`}
    </>
  );
}
