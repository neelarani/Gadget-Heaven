const Card = ({ card }) => {
  const { product_image: image, product_title: title, price } = card || {};

  console.log(card);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="title">{title}</h2>
        <p>Price: {price} Tk</p>
        <div className="card-actions ">
          <button className="px-3 py-1 text-purple-600 border-2 rounded-full font-semibold border-purple-500">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
