import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { useLoaderData, useParams } from 'react-router-dom';
import { CartContext } from '../layouts/MainLayout';

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData();
  const [addItems, setAddItems] = useState([]);
  const [addWishList, setAddWishList] = useState([]);
  const { count, setCount } = useContext(CartContext) || {};
  const { wishList, setWishList } = useContext(CartContext) || {};
  const { addedCart, setAddedCart } = useContext(CartContext);
  const { addedWishList, setAddedWishList } = useContext(CartContext);

  const product = products.find(
    item => String(item.product_id) === String(productId)
  );

  if (!product) {
    return <p>Product not Found</p>;
  }

  // Handle cart function

  const addToCard = items => {
    // Filter to see if the product already exists in the cart
    const existingProducts = addedCart.filter(
      cartItem => cartItem.product_id === items.product_id
    );

    if (existingProducts.length === 0) {
      // Product does not exist, so add it to the cart
      setAddedCart([...addedCart, items]);
      setAddItems([...addItems, items]);
      setCount(count + 1); // Update the count in the context
      toast.success(`${items.product_title} has been added to your cart`);
    } else {
      toast.error(`${items.product_title} is already in your cart`);
    }
  };

  // Wish List Cart
  const handleWishList = items => {
    const existingProductsWishList = addedWishList.filter(
      wishListItem => wishListItem.product_id === items.product_id
    );
    // console.log(items);

    if (existingProductsWishList.length === 0) {
      setAddedWishList([...addedWishList, items]);
      console.log(addedWishList);
      setAddWishList([...addWishList, items]);
      console.log(addedWishList);

      setWishList(wishList + 1);
      toast.success(`${items.product_title} has been added to your wishlist`);
    } else {
      toast.error(`${items.product_title} is already in your wishlist`);
    }
  };

  const {
    product_image: image,
    product_title: title,
    price,
    description,
    Specification,
    rating,
  } = product || {};

  return (
    <div className="font-sora bg-pink-50">
      <div className="bg-[#9538E2] pt-16 pb-36 flex flex-col justify-center items-center text-white ">
        <h2 className="text-xl font-bold">Product Details </h2>
        <p className="text-xs text-gray-400">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="py-4 relative bottom-28 container mx-auto bg-white border-2 text-black flex">
        <div className="w-[400px]">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="mt-10 space-y-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-base font-medium">Price: {price} Tk</p>
          <p className="text-green-700 border-green-700 border-[1px] rounded-full w-28 text-center  text-sm px-2 py-1">
            In Stock
          </p>
          <p className="text-sm">{description}</p>
          <h2 className="text-base font-semibold">Sepecification:</h2>
          {Specification.map((spec, index) => (
            <li className="text-xs" key={index}>
              {spec}
            </li>
          ))}

          <div className="flex gap-1 items-center">
            <p className="text-sm font-bold">Rating </p>
            <div className="w-3 h-3  bg-black"></div>
          </div>

          <div className="rating rating-xs text-sm">
            {[1, 2, 3, 4, 5].map(star => (
              <input
                key={star}
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={star <= rating}
              />
            ))}
          </div>
          {rating}

          <div className="flex gap-3 items-center">
            <button
              onClick={() => addToCard(product)}
              className={
                'bg-purple-500 px-3 py-1 rounded-full text-white text-xs'
              }
            >
              Add To Cart
              <i className="fa-solid fa-cart-shopping ml-2"></i>
            </button>
            <button
              onClick={() => handleWishList(product)}
              className="px-2 py-1 rounded-full border-[1px] border-gray-500"
            >
              <i className="fa-regular fa-heart text-purple-900"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
