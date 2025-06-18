import { FaMapMarkerAlt, FaPlaneDeparture, FaCalendarAlt } from 'react-icons/fa';

const Destination = () => {
   return (
      <section className="w-full flex justify-center items-center py-10 px-4 md:px-10">
         <div className="w-full max-w-6xl bg-base-300 backdrop-blur-md shadow-xl rounded-3xl p-6 md:p-10 space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-semibold text-center font-Onset text-gray-500 tracking-wide">
               Find Your Next Destination
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-4 gap-4 font-Onset">
               {/* From */}
               <div className="relative">
                  <FaPlaneDeparture className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                     type="text"
                     className="w-full input input-lg pl-12 focus:outline-none "
                     placeholder="From"
                  />
               </div>

               {/* To */}
               <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                     type="text"
                     className="w-full input input-lg pl-12 focus:outline-none "
                     placeholder="To"
                  />
               </div>

               {/* Date */}
               <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                     type="date"
                     className="w-full input input-lg pl-12 focus:outline-none "
                     placeholder="Journey Date"
                  />
               </div>

               {/* Search Button */}
               <button className="btn btn-lg w-full hover:opacity-90 transition-all">
                  Search
               </button>
            </form>
         </div>
      </section>
   );
};

export default Destination;
