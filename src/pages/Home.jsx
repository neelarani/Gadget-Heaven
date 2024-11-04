import { NavLink, Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Heading from '../components/Heading/Heading';

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
      {/* Load data  */}
      <div className="md:grid container mx-auto grid-cols-12 gap-2">
        <div className="col-span-4 w-fit sites flex flex-col gap-3">
          {/* buttons */}

          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? 'bg-purple-500 text-white' : 'bg-gray-200'
              }  w-full px-4 py-1 rounded-full`
            }
            to="/"
          >
            App Prodact{' '}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? 'bg-purple-500 text-white' : 'bg-gray-200'
              }  w-full px-4 py-1 rounded-full`
            }
            to="/laptops"
          >
            Laptops
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? 'bg-purple-500 text-white' : 'bg-gray-200'
              }  w-full px-4 py-1 rounded-full`
            }
            to="/phones"
          >
            Phones
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? 'bg-purple-500 text-white' : 'bg-gray-200'
              }  w-full px-4 py-1 rounded-full`
            }
            to="/i_phones"
          >
            i Phones
          </NavLink>

          {/* we can add others items  */}
        </div>
        <div className="col-span-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
