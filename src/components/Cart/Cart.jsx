import { useContext } from 'react';
import { CartContext } from '../../layouts/MainLayout';

<<<<<<< HEAD
const Cart = ({ handleSortByPrice }) => {
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
=======
const Cart = () => {
  const { addedCart } = useContext(CartContext);
  return (
    <div className="flex gap-5 container mx-auto py-7">
      <div>image</div>
      <div>
        <h2></h2>
        <p>description</p>
        <p>Price:</p>
>>>>>>> c91a3c9f97a99fe6ee71aaa89f8bdb12316270b2
      </div>
    </div>
  );
};

export default Cart;
