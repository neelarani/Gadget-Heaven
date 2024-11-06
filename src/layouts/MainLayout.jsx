import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import toast, { Toaster } from 'react-hot-toast';

import { createContext, useState } from 'react';

export const CartContext = createContext();

const MainLayout = () => {
  const [addedCart, setAddedCart] = useState([]);
  const [addedWishList, setAddedWishList] = useState([]);
  const [addItems, setAddItems] = useState([]);

  // handle add to cart items

  const addToCard = items => {
    // Filter to see if the product already exists in the cart
    const existingProducts = addedCart.filter(
      cartItem => cartItem.product_id === items.product_id
    );

    if (existingProducts.length === 0) {
      // Product does not exist, so add it to the cart
      setAddedCart([...addedCart, items]);
      setAddItems([...addItems, items]);
      toast.success(`${items.product_title} has been added to your cart`);
    } else {
      toast.error(`${items.product_title} is already in your cart`);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addedCart,
        setAddedCart,
        addedWishList,
        setAddedWishList,
        addToCard,
      }}
    >
      <div className="font-sora bg-gradient-to-t from-pink-50 to-sky-50">
        <Toaster />
        {/* navbar */}
        <Navbar
          countCart={addedCart.length}
          addedWishListCount={addedWishList.length}
        ></Navbar>
        {/* dynamic section */}
        <div className="min-h-[calc(100vh-288px)]">
          <Outlet></Outlet>
        </div>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </CartContext.Provider>
  );
};

export default MainLayout;
