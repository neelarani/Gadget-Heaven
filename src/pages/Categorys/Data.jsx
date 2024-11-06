import { useLoaderData } from 'react-router-dom';
import Mycard from '../DynamicCard/Mycard';

const Data = () => {
  let allCategories = useLoaderData();
  let addData = allCategories?.slice(0, 9);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {addData.map((items, index) => (
        <Mycard key={index} items={items}></Mycard>
      ))}
    </div>
  );
};

export default Data;
