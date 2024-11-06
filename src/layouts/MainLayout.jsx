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
<<<<<<< HEAD
  const [addedWishList, setAddedWishList] = useState([]);
=======
>>>>>>> c91a3c9f97a99fe6ee71aaa89f8bdb12316270b2

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        wishList,
        setWishList,
        addedCart,
        setAddedCart,
<<<<<<< HEAD
        addedWishList,
        setAddedWishList,
=======
>>>>>>> c91a3c9f97a99fe6ee71aaa89f8bdb12316270b2
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
