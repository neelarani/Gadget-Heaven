import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Heading from '../components/Heading/Heading';

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
      {/* categories section */}
      <Categories></Categories>
      {/* dynamic nested component */}
    </div>
  );
};

export default Home;
