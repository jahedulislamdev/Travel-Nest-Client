import { FaUser } from 'react-icons/fa';
import { LuMenu } from 'react-icons/lu';
import { TbMenu3 } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
   const navLinks =
      <>
         <NavLink> Home </NavLink>
         <NavLink> All Tourists Spot </NavLink>
         <NavLink to="/add-new-spot">Add New Spot</NavLink>
         <NavLink> My List </NavLink>
      </>
   return (
      <div className="navbar bg-base-100 shadow-sm px-4 ">
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
            <Link to={'/'} className="font-bold text-xl uppercase hidden md:block font-ubuntu">Traveller</Link>
         </div>
         <div className="navbar-center uppercase space-x-10 font-medium hidden md:block opacity-70 font-ubuntu">
            {navLinks}
         </div>
         <Link to={'/'} className="btn btn-ghost text-xl uppercase md:hidden font-ubuntu font-bold">Traveller</Link>
         <div className="navbar-end opacity-70">
            <Link to={"/login"} className='font-medium uppercase flex '><FaUser className='size-5' /> </Link>
         </div>
      </div>
   );
};

export default Nav;