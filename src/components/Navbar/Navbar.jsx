import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = ({ countCart, addedWishListCount }) => {
  let pageLocation = useLocation();

  const navColor =
    pageLocation.pathname === '/statistics' ||
    pageLocation.pathname === '/dashboard' ||
    pageLocation.pathname === '/about'
      ? 'bg-white text-purple-700'
      : 'bg-[#9538E2] text-white';
  return (
    <nav className={`${navColor} backdrop-blur-3xl top-0 sticky z-50 py-1`}>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'text-black' : 'text-purple-700'}`
                }
                to={'/'}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'text-black' : 'text-purple-700'}`
                }
                to={'/statistics'}
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? 'text-black' : 'text-purple-700'}`
                }
                to={'/dashboard'}
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <a className="text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base font-medium">
            <NavLink
              className={({ isActive }) => `${isActive ? 'text-black' : ''}`}
              to={'/'}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? 'text-black' : ''}`}
              to={'/statistics'}
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? 'text-black' : ''}`}
              to={'/dashboard'}
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? 'text-black' : ''}`}
              to={'/about'}
            >
              About us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link className="rounded-full bg-gray-200 px-2 py-1 relative">
            <div>
              <i className="fa-sharp fa-solid fa-cart-shopping text-black"></i>
              <span className="absolute -top-3 -right-0 text-white bg-black text-xs px-1 rounded-full ">
                {countCart}
              </span>
            </div>
          </Link>
          <Link className="rounded-full bg-gray-200 px-2 py-1">
            <div className="relative">
              <i className="fa-regular fa-heart text-black"></i>
              <span className="absolute -top-3 -right-3 bg-black text-xs px-1 rounded-full text-white">
                {addedWishListCount}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
