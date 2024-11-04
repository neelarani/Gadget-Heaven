import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const AllProducts = () => {
  const data = useLoaderData();
  return (
    <div className="flex container mx-auto py-8">
      <div className=" bg-white gap-4 w-1/4 mx-auto py-5">
        <div className="flex flex-col  items-center space-y-3">
          <button className="bg-gray-200 rounded-full text-base  px-3 py-1">
            All Products
          </button>
          <button className="bg-gray-200  rounded-full text-base  px-3 py-1 ">
            Phones
          </button>
          <button className="bg-gray-200  rounded-full text-base  px-3 py-1 ">
            Laptops
          </button>
          <button className="bg-gray-200  rounded-full text-base  px-3 py-1 ">
            Smart Watches
          </button>
          <button className="bg-gray-200  rounded-full text-base  px-3 py-1 ">
            Pawer Banks
          </button>
          <button className="bg-gray-200  rounded-full text-base  px-3 py-1 ">
            Chargers
          </button>
          <button className="bg-gray-200  rounded-full text-base  px-3 py-1 ">
            Head Phones
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto">
        {data.map(product => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
