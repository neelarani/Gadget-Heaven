const Product = ({ product }) => {
  const { product_title: title, product_image: image, price } = product;
  return (
    <div className="card card-compact bg-base-100  shadow-xl ">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price} Tk</p>
        <div className="card-actions ">
          <button className="rounded-full px-2 py-1 text-purple-500 border-[1px] border-black ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
