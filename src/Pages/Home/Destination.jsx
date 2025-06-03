import { CiLocationArrow1 } from "react-icons/ci";

const Destination = () => {
   return (
      <div className="w-full min-h-40 flex justify-center items-center md:px-10 px-2 py-5 ">
         <div className="md:flex justify-between items-center bg-gray-100/5 w-full p-10 gap-9 rounded-2xl border border-gray-700/10">
            <div className="w-full ">
               <input type="text" className="input w-full input-lg focus:outline-0 join-item" placeholder="✈️ From" />
            </div>
            <div className="fieldset w-full ">
               <input type="text" className="input w-full input-lg focus:outline-0" placeholder=" 📍 To" />
            </div>
            <div className="fieldset w-full ">
               <input type="date" className="input w-full input-lg focus:outline-0" placeholder=" 📅 Journy Date" />
            </div>
            <button className="btn btn-lg w-full md:w-30">Search</button>
         </div>
      </div>
   );
};

export default Destination;