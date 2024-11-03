import banner from '../../assets/images/banner.jpg';
const Banner = () => {
  return (
    <div className="">
      <div className="bg-[#9538E2] min-h-[400px] py-7 text-white flex flex-col justify-center items-center space-y-4">
        <h2 className="text-3xl text-center">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h2>
        <p className="text-sm text-gray-300 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="px-3 py-1 bg-white rounded-xl text-[#9538E2] ">
          Shop Now
        </button>
      </div>
      <div className="relative bottom-24 z-50">
        <img
          className="container mx-auto h-[550px] rounded-xl"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
