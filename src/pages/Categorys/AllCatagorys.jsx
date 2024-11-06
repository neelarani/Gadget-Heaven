import { useLoaderData } from 'react-router-dom';
import Mycard from '../DynamicCard/Mycard';

export default function AllCatagorys() {
  let myData = useLoaderData();
  let allData = myData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {allData.map((items, index) => (
        <Mycard key={index} items={items}></Mycard>
      ))}
    </div>
  );
}
