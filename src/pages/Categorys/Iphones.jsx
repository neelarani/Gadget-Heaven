import { useLoaderData } from 'react-router-dom';
import Mycard from '../DynamicCard/Mycard';

export default function Iphones() {
    let myAllData = useLoaderData();
    let i_phones = myAllData.filter(data => data.category === 'i-phones');
    console.log(i_phones)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 text-center font-bold text-3xl gap-3">
        {
           i_phones.length === 0 ?   "No Data " : i_phones.map((items , index) => <Mycard key={index} items={items}></Mycard>)
        }
    </div>
  )
}
