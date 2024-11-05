import { useContext } from 'react';
import { CartContext } from '../../layouts/MainLayout';

const Cart = () => {
  const { addedCart } = useContext(CartContext);
  return (
    <div className="flex gap-5 container mx-auto py-7">
      <div>image</div>
      <div>
        <h2></h2>
        <p>description</p>
        <p>Price:</p>
      </div>
    </div>
  );
};

export default Cart;
