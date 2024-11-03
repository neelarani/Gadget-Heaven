const Categories = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col w-[150px] space-y-4">
        <button className="bg-[#9538E2] text-base text-white rounded-full py-1">
          All Product
        </button>
        <button className="text-base px-3 py-1 bg-gray-200 rounded-full">
          Laptops
        </button>
        <button className="text-base px-3 py-1 bg-gray-200 rounded-full">
          Phones
        </button>
        <button className="text-base px-3 py-1 bg-gray-200 rounded-full">
          Accessories
        </button>
        <button className="text-base px-3 py-1 bg-gray-200 rounded-full">
          Smart Watches
        </button>
        <button className="text-base px-3 py-1 bg-gray-200 rounded-full">
          MacBook
        </button>
        <button className="text-base px-3 py-1 bg-gray-200 rounded-full">
          Iphone
        </button>
      </div>
    </div>
  );
};

export default Categories;
