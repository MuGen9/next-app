'use client';
import React, { useState } from 'react';
import AddToCart from './AddToCart';
import Counter from './Counter';

const ProductCard = () => {
  let [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
      <h2>Product Card</h2>
      <AddToCart incrementParentState={updateCount} />
      <Counter count={count} />
    </div>
  );
};

export default ProductCard;
