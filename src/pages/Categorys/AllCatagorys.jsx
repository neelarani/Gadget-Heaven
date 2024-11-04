import { useLoaderData } from "react-router-dom"
import Mycard from "../DynamicCard/Mycard";

export default function AllCatagorys() {
    // we can access loader data so we use useLoaderData hoks

    let myData = useLoaderData();
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                myData.map((items , index) => <Mycard key={index} items={items}></Mycard>)
            }
        </div>
    )
}
