import React from 'react';

interface ChildProps {
  incrementParentState: () => void;
}

const AddToCart: React.FC<ChildProps> = ({ incrementParentState }) => {
  return (
    <button className='btn btn-primary' onClick={incrementParentState}>
      Add to Cart
    </button>
  );
};

export default AddToCart;
