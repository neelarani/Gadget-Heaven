import { useContext } from 'react';
import { CartContext } from '../../layouts/MainLayout';
import toast from 'react-hot-toast';

const WishList = () => {
  const { addedWishList, setAddedWishList } = useContext(CartContext);

  const handleDelete = index => {
    const updatedWishList = addedWishList.filter((_, i) => i !== index);

    setAddedWishList(updatedWishList);
    toast.success(`Item successfully removed from wishlist`);
  };

  return (
    <div className="container mx-auto py-7">
      <div>
        {addedWishList.map((itmes, index) => (
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

export default WishList;
