import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { TbMenu3 } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Provider/context';

const Nav = () => {
   const { user, logout } = useContext(AuthContext);
   const navLinks =
      <>
         <NavLink to={'/'}> Home </NavLink>
         <NavLink to={'/all-spot'}> All Tourists Spot </NavLink>
         <NavLink to={'/add-new-spot'}>Add New Spot</NavLink>
         <NavLink to={'/my-list'}> My List </NavLink>
      </>
   return (
      <div className="navbar bg-base-300/90  px-4 sticky top-0 z-50 border-b border-gray-700 shadow ">
         <div className="navbar-start">
            <button className=" md:hidden" onClick={() => document.getElementById('mobileNavLinks').showModal()}><TbMenu3 className='size-7 opacity-60' /></button>
            <dialog id="mobileNavLinks" className="modal modal-start">
               <div className="modal-box w-80">
                  <form method="dialog">
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h1>hello world</h1>
               </div>
            </dialog>
            <Link to={'/'} className="font-bold text-xl uppercase hidden md:block font-ubuntu">TravelNest</Link>
         </div>
         <div className="navbar-center uppercase space-x-10 font-medium hidden md:block opacity-70 font-ubuntu">
            {navLinks}
         </div>
         <Link to={'/'} className="btn btn-ghost text-xl uppercase md:hidden font-ubuntu font-bold">TravelNest</Link>
         <div className="navbar-end ">
            {!user ? <Link to={"/login"} className='font-medium uppercase flex '><FaUser className='size-5' /> </Link> :

               <div className='dropdown dropdown-left cursor-pointer'>
                  <img tabIndex={0} src={user?.photoURL} className='h-5 w-5 md:w-9 md:h-9 rounded-full shadow-md object-center object-cover' />
                  <ul tabIndex={0} className="mt-13 dropdown-content menu bg-gray-100  text-black rounded-box z-1000  min-h-28 w-52 p-2 shadow-sm">
                     <button onClick={logout} className='btn btn-error'>Logout</button>
                  </ul>
               </div>}
         </div>
      </div>
   );
};

export default Nav;