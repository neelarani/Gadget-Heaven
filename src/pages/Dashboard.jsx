<<<<<<< HEAD
import { useContext, useState } from 'react';
import Cart from '../components/Cart/Cart';
import WishList from '../components/WishList/WishList';
import { CartContext } from '../layouts/MainLayout';

const Dashboard = () => {
  const { addedCart, setAddedCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('cart');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  // sorted price
  const handleSortByPrice = () => {
    const sortedPrice = [...addedCart].sort((a, b) => b.price - a.price);
    setAddedCart(sortedPrice);
  };
=======
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
>>>>>>> c91a3c9f97a99fe6ee71aaa89f8bdb12316270b2
  return (
    <div className="font-sora bg-pink-50 ">
      <div className="bg-[#9538E2] pt-16 pb-4 flex flex-col justify-center items-center text-white ">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-xs text-gray-400">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center gap-3 mt-4 ">
<<<<<<< HEAD
          <button
            onClick={() => handleTabChange('cart')}
            className={`${
              activeTab === 'cart'
                ? 'bg-white text-purple-700'
                : ' text-white border-white border-[1px]'
            } px-5 py-1 rounded-full text-sm font-bold`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabChange('Wishlist')}
            className={`${
              activeTab === 'Wishlist'
                ? 'bg-white text-purple-700'
                : ' text-white border-white border-[1px]'
            } px-3 py-1 rounded-full text-sm font-bold`}
          >
=======
          <button className="bg-white text-purple-700 px-5 py-1 rounded-full text-sm font-bold">
            Cart
          </button>
          <button className=" text-white border-white border-[1px] px-3 py-1 rounded-full text-sm font-bold">
>>>>>>> c91a3c9f97a99fe6ee71aaa89f8bdb12316270b2
            Wishlist
          </button>
        </div>
      </div>

      <div className="flex justify-between container mx-auto mt-9 text-black">
<<<<<<< HEAD
        <h3 className="text-lg font-bold">
          {activeTab === 'cart' ? 'cart ' : 'wishlist'}
        </h3>
        {activeTab === 'cart' && (
          <div className="flex gap-12 items-center">
            <h3 className="text-sm font-semibold">Total Cost:</h3>
            <button
              onClick={() => handleSortByPrice()}
              className="text-purple-600 border-[1px] border-black rounded-full px-3 py-1 font-semibold text-sm "
            >
              Sort by Price
            </button>
            <button className="font-semibold text-white  text-sm px-4 py-1 bg-purple-500  rounded-full">
              Purchase
            </button>
          </div>
        )}
      </div>

      <div className="container mx-auto py-7">
        {activeTab === 'cart' ? <Cart></Cart> : <WishList></WishList>}
      </div>
=======
        <h3 className="text-lg font-bold">Cart</h3>
        <div className="flex gap-12 items-center">
          <h3 className="text-sm font-semibold">Total Cost:</h3>
          <button className="font-semibold text-purple-500 border-[1px] border-purple-600 text-sm px-3 py-1 rounded-full">
            Sort by Price
          </button>
          <button className="font-semibold text-white  text-sm px-4 py-1 bg-purple-500  rounded-full">
            Purchase
          </button>
        </div>
      </div>

      <Outlet></Outlet>
>>>>>>> c91a3c9f97a99fe6ee71aaa89f8bdb12316270b2
    </div>
  );
};

export default Dashboard;
