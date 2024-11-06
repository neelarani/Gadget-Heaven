import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

import { createContext, useState } from 'react';

export const CartContext = createContext();

const MainLayout = () => {
  const [count, setCount] = useState(0);
  const [wishList, setWishList] = useState(0);
  const [addedCart, setAddedCart] = useState([]);
  const [addedWishList, setAddedWishList] = useState([]);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        wishList,
        setWishList,
        addedCart,
        setAddedCart,
        addedWishList,
        setAddedWishList,
      }}
    >
      <div className="font-sora bg-gradient-to-t from-pink-50 to-sky-50">
        <Toaster />
        {/* navbar */}
        <Navbar></Navbar>
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
