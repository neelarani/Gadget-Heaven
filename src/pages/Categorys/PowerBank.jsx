import { useLoaderData } from 'react-router-dom';
import Mycard from '../DynamicCard/Mycard';

const PowerBank = () => {
  let myAllData = useLoaderData();
  let powerbank = myAllData.filter(data => data.category === 'Power Bank');
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {powerbank.map((items, index) => (
        <Mycard key={index} items={items}></Mycard>
      ))}
    </div>
  );
};

export default PowerBank;
