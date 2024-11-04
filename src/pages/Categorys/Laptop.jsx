import { useLoaderData } from "react-router-dom"
import Mycard from "../DynamicCard/Mycard";

export default function Laptop() {
    let myAllData = useLoaderData();
    let laptops = myAllData.filter(data => data.category === 'Laptop');
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {
            laptops.map((items , index) => <Mycard key={index} items={items}></Mycard>)
        }
    </div>
    )
}
