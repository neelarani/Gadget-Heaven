import { useLoaderData, NavLink, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useLoaderData();

  const product = products.find(
    item => String(item.product_id) === String(productId)
  );

  if (!product) {
    return <p>Product not Found</p>;
  }

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
          <p className="text-sm">
            <div className="rating rating-xs">
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
          </p>
          <div className="flex gap-3 items-center">
            <NavLink
              to={'/addtocard'}
              className={
                'bg-purple-500 px-3 py-1 rounded-full text-white text-xs'
              }
            >
              Add To Card
              <i className="fa-solid fa-cart-shopping ml-2"></i>
            </NavLink>
            <p className="px-2 py-1 rounded-full border-[1px] border-gray-500">
              <i className="fa-regular fa-heart text-purple-900"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
