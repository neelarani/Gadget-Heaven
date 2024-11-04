import { useLoaderData } from 'react-router-dom';
import Mycard from '../DynamicCard/Mycard';

export default function Phones() {
  let myAllData = useLoaderData();
  let phones = myAllData.filter(data => data.category === 'Smartphone');
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {phones.map((items, index) => (
        <Mycard key={index} items={items}></Mycard>
      ))}
    </div>
  );
}
