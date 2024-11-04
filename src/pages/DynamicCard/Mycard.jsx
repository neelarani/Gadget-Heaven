export default function Mycard({ items }) {
  let { product_image, product_title, price } = items;
  return (
    <div className="shadow-md p-2 flex flex-col gap-2">
      <img className="h-36 w-full" src={product_image} alt="" />
      <h2>{product_title}</h2>
      <p className="flex-grow">price : {price} Tk</p>
      <button className="px-5 py-1 w-fit border border-blue-500 rounded-full">
        See Inofo
      </button>
    </div>
  );
}
