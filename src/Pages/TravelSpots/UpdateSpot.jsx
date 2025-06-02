import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../../Provider/context";
import toast from "react-hot-toast";

const UpdateSpot = () => {
   // Load the spot data from the loader
   const spot = useLoaderData();
   const { user } = useContext(AuthContext);
   // console.log(spot);
   // State to manage season and travel time selections
   const [season, setSeason] = useState('');
   const [travelTime, setTravelTime] = useState('');
   // Predefined options for season and travel time
   const seasons = ["Spring", "Summer", "Rainy", "Autumn", "Late Autumn", "Winter"];
   const travelOptions = ["1 Days", "2 Days", "3 Days", "4 Days", "5 Days", "6 Days", "7 Days", "15 Days", "30 Days"];

   // Handle form submission for updating the spot
   const handleUpdateFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const spotName = formData.get('spotName');
      const spotImage = formData.get('spotImage');
      const location = formData.get('location');
      const shortDescription = formData.get('shortDescription');
      const avgCost = formData.get('avgCost');
      const visitorPerYear = formData.get('visitorPerYear');
      const userEmail = formData.get('userEmail');
      const userName = formData.get('userName');
      const duration = formData.get('duration');
      const updatedSpot = { spotName, spotImage, location, shortDescription, avgCost, season, travelTime, visitorPerYear, duration, userEmail, userName };
      console.log(updatedSpot);
      fetch(`http://localhost:5000/update-spot/${spot._id}`, {
         method: "PUT",
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(updatedSpot),
      }).then(res => res.json()).then(data => {
         if (data.modifiedCount > 0) {
            toast.success("Spot updated successfully!");
         }
      }).catch(err => {
         console.error("Error updating spot:", err);
         toast.error("Failed to update spot. Please try again.");
      })
   }
   return (
      <div className="flex items-center justify-center min-h-screen bg-base-200 p-4 font-Onset">
         <form
            onSubmit={handleUpdateFormSubmit}
            className='w-full md:max-w-4xl bg-base-100 p-8 rounded-3xl shadow-xl space-y-6'
         >
            <h2 className='text-3xl font-semibold text-center text-purple-300 capitalize tracking-wider'>
               Update Your Spot
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
               <div>
                  <label className='label text-sm'>Spot Name</label>
                  <input
                     defaultValue={spot.spotName}
                     type='text'
                     name='spotName'
                     placeholder='Enter spot name'
                     className='input input-bordered w-full'
                     required
                  />
               </div>
               <div>
                  <label className='label text-sm'>Spot Image</label>
                  <input
                     defaultValue={spot.spotImage}
                     type='url'
                     name='spotImage'
                     placeholder='Paste image URL'
                     className='input input-bordered w-full'
                     required
                  />
               </div>
               <div>
                  <label className='label text-sm'>Location</label>
                  <input
                     defaultValue={spot.location}
                     type='text'
                     name='location'
                     placeholder='Enter location'
                     className='input input-bordered w-full'
                     required
                  />
               </div>
               <div>
                  <label className='label text-sm'>AVG Cost</label>
                  <input
                     defaultValue={spot.avgCost}
                     type='number'
                     name='avgCost'
                     placeholder='Average Tour Cost'
                     className='input input-bordered w-full'
                     required
                  />
               </div>
               <div>
                  <label className='label text-sm'>Seasonality</label>
                  <select
                     value={season}
                     onChange={(e) => setSeason(e.target.value)}
                     className='select select-bordered w-full'
                     required
                  >
                     <option disabled value=''>Select a season</option>
                     {seasons.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                     ))}
                  </select>
               </div>
               <div>
                  <label className='label text-sm'>Travel Time</label>
                  <select
                     value={travelTime}
                     onChange={(e) => setTravelTime(e.target.value)}
                     className='select select-bordered w-full'
                     required
                  >
                     <option disabled value=''>Choose travel time</option>
                     {travelOptions.map((time, idx) => (
                        <option key={idx} value={time}>{time}</option>
                     ))}
                  </select>
               </div>
               <div>
                  <label className='label text-sm'>Visitors (Yearly)</label>
                  <input
                     defaultValue={spot.visitorPerYear}
                     type='number'
                     name='visitorPerYear'
                     placeholder='Total visitors per year'
                     className='input input-bordered w-full'
                     required
                  />
               </div>
               <div>
                  <label className='label text-sm'>Visit Duration in spot</label>
                  <input
                     defaultValue={spot.duration}
                     type='number'
                     name='duration'
                     placeholder='visit hour'
                     className='input input-bordered w-full'
                     required
                  />
               </div>
               <div>
                  <label className='label text-sm'>User Email</label>
                  <input
                     type='email'
                     defaultValue={user?.email || ''}
                     name='userEmail'
                     placeholder='User email address'
                     className='input input-bordered w-full'
                     readOnly
                     required
                  />
               </div>
               <div>
                  <label className='label text-sm'>User Name</label>
                  <input
                     type='text'
                     defaultValue={user?.displayName || ''}
                     name='userName'
                     placeholder='User name'
                     className='input input-bordered w-full'
                     readOnly
                     required
                  />
               </div>
            </div>

            {/* 🔻 Full-width Short Description */}
            <div>
               <label className='label text-sm'>Short Description</label>
               <textarea
                  defaultValue={spot.shortDescription}
                  name='shortDescription'
                  placeholder='Write a short description...'
                  rows={3}
                  maxLength={500}
                  className='textarea textarea-bordered w-full'
                  required
               />
            </div>

            <div className='pt-4'>
               <button type='submit' className='btn btn-primary w-full text-lg'>Update Spot</button>
            </div>
         </form>

      </div>
   );
};

export default UpdateSpot;