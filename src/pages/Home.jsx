import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Heading from '../components/Heading/Heading';

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
      {/* categories section */}
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
      {/* dynamic nested component */}
    </div>
  );
};

export default Home;
