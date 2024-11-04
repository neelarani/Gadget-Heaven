import { useLoaderData } from 'react-router-dom';
import Mycard from '../DynamicCard/Mycard';
const Chargers = () => {
  let myAllData = useLoaderData();
  let chargers = myAllData.filter(data => data.category === 'Charger');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {chargers.map((items, index) => (
        <Mycard key={index} items={items}></Mycard>
      ))}
    </div>
  );
};

export default Chargers;
