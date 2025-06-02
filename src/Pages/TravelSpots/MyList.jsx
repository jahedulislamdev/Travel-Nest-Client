import { useLoaderData } from "react-router-dom";

const MyList = () => {
   const yourSpots = useLoaderData();
   console.log(yourSpots);
   return (
      <div>
         <h2 className='text-3xl font-semibold text-center p-4 font-Onset'>Your Spots</h2>
         {
            yourSpots.length > 0 ? (
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 font-Onset '>
                  {yourSpots?.map(spot => (
                     <div key={spot._id} className='bg-base rounded-lg p-0.5 border border-gray-300/40 flex'>
                        <img src={spot.spotImage} alt={spot.spotName} className='w-30 object-center object-cover rounded-xl' />
                        <div className='space-y-2 p-3'>
                           <h3 className='text-xl font-medium mt-2 capitalize'>{spot.spotName.slice(0, 36)}{spot.spotName.length > 36 && <span>...</span>} </h3>
                           <p className='text-gray-500'>{spot.location}</p>
                           {/* <p className='text-violet-800 text-xl'>${spot.avgCost} / person</p> */}
                           <p className="opacity-50 text-xs font-extralight">Added By: {spot.userName}, {spot.userEmail}</p>
                           <div className=" flex justify-around items-center ">
                              <button className="w-full p-2 cursor-pointer rounded-s bg-primary">Edit</button>
                              <button className="w-full p-2 cursor-pointer rounded-e bg-error">Delete</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <div className='text-center p-4'>
                  <h2 className='text-xl font-semibold'>No Spots in Your List</h2>
                  <p>Please add some spots to your list.</p>
               </div>
            )
         }
      </div>
   );
};

export default MyList;