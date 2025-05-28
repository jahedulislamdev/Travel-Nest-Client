import { Outlet } from 'react-router-dom';
import Nav from '../Components/Header/Nav';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Hooks/scrollToTop';
import { Toaster } from 'react-hot-toast';

const Root = () => {
   return (
      <div>
         <ScrollToTop />
         <Nav />
         <Outlet />
         <Footer />
         <Toaster position='top-right' />
      </div>
   );
};

export default Root;