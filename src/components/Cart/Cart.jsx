import { useContext } from 'react';
import { CartContext } from '../../layouts/MainLayout';

const Cart = () => {
  const { addedCart, setAddedCart } = useContext(CartContext);

  const handleDelete = index => {
    const updatedCart = addedCart.filter((_, i) => i !== index);
    setAddedCart(updatedCart);
  };

  return (
    <div className="container mx-auto py-7">
      <div>
        {addedCart.map((itmes, index) => (
          <div
            className="flex flex-row justify-between shadow-md w-full px-4 py-1 rounded-sm items-center"
            key={index}
          >
            <img
              className="max-w-32"
              key={index}
              src={itmes.product_image}
            ></img>
            <div>
              <p>{itmes.product_title}</p>
              <p>{itmes.description}</p>
              <p>Price: {itmes.price} Tk</p>
            </div>
            <i
              onClick={() => handleDelete(index)}
              className="fa-regular fa-trash-can"
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
