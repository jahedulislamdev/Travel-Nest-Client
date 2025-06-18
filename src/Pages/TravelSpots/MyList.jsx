import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
   const loadSpot = useLoaderData();
   const [yourSpot, setYourSpots] = useState(loadSpot)
   const handleDeleteSpot = (spotId) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/delete-spot/${spotId}`, {
               method: "DELETE",
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                     setYourSpots(prev => prev.filter(s => s._id !== spotId))
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your spot has been deleted successfully.",
                        icon: "success"
                     });
                  } else {
                     Swal.fire({
                        title: "Opps!",
                        text: "Failed to delete the spot. Please try again.",
                        icon: "error"
                     });
                  }
               })
               .catch(err => {
                  console.error("Error deleting spot:", err);
                  Swal.fire({
                     title: "Opps!",
                     text: "An error occurred while deleting the spot.",
                     icon: "error"
                  });
               });

         }
      });

   }
   return (
      <div>
         <h2 className='text-3xl font-semibold text-center p-4 font-Onset'>Your Spots</h2>
         {
            yourSpot?.length > 0 ? (
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 font-Onset '>
                  {loadSpot?.map(spot => (
                     <div key={spot._id} className='bg-base rounded-lg p-3 border border-gray-300/10 animate-fade-in-up'>
                        <Link className="h-full" to={`/spot-detail/${spot._id}`}>
                           <div className="flex">
                              <img src={spot.spotImage} alt={spot.spotName} className='w-30 object-center object-cover rounded-xl' />
                              <div className='space-y-2 p-3'>
                                 <h3 className='text-xl font-medium mt-2 capitalize'>{spot.spotName.slice(0, 36)}{spot.spotName.length > 36 && <span>...</span>} </h3>
                                 <p className='text-base/snug opacity-60 '>{spot.location}</p>
                                 {/* <p className='text-violet-800 text-xl'>${spot.avgCost} / person</p> */}
                                 <p className="opacity-50 text-xs font-extralight">Added By: {spot.userName}, {spot.userEmail}</p>
                              </div>
                           </div>
                        </Link>
                        <div className=" flex justify-around items-center mt-3 text-center  ">
                           <Link to={`/update-spot/${spot._id}`} className="w-full p-2 cursor-pointer rounded-s-xl bg-purple-400/40">Edit Spot</Link>
                           <button onClick={() => handleDeleteSpot(spot._id)} className="w-full p-2 cursor-pointer rounded-e-xl bg-red-500/40">Delete</button>
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