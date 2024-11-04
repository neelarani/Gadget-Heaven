import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="font-sora bg-gradient-to-t from-pink-50 to-sky-50">
      {/* navbar */}
      <Navbar></Navbar>
      {/* dynamic section */}
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
