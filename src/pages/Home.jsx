import Banner from '../components/Banner/Banner';

import Heading from '../components/Heading/Heading';

import AllProducts from '../components/AllProducts/AllProducts';

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
      {/* Load data  */}
      <AllProducts></AllProducts>
      {/* dynamic nested component */}
    </div>
  );
};

export default Home;
