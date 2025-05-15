import { Outlet } from 'react-router-dom';
import Nav from '../Components/Header/Nav';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Hooks/scrollToTop';

const Root = () => {
   return (
      <div>
         <ScrollToTop />
         <Nav />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;