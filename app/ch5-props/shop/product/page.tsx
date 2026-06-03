'use client';

import Link from 'next/link';
import { products } from '../../../proj/product-v1/_data/products.json';

export interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
  return (
    <>
      <h1>商品列表</h1>
      <Link href="./cart">連至購物車</Link>
      <hr />
    </>
  );
}
