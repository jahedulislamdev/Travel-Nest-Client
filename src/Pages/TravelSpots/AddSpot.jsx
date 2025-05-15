import React, { useState } from 'react';

const AddSpot = () => {
   const seasons = ["Spring", "Summer", "Rainy", "Autumn", "Late Autumn", "Winter"];
   const travelOptions = ["3 Days", "7 Days", "15 Days", "30 Days"];

   const [season, setSeason] = useState('');
   const [travelTime, setTravelTime] = useState('');

   const handleFormSubmit = (e) => {

      e.preventDefault();
      console.log("Season:", season);
      console.log("Travel Time:", travelTime);
      // You can collect the full form data from e.target.elements here if needed
   };

   return (
      <div className='min-h-screen flex items-center justify-center bg-gray-700 p-1.5 md:p-4'>
         <form onSubmit={handleFormSubmit} className='w-full md:max-w-3xl bg-base-100 p-6 rounded-2xl shadow-md space-y-5'>
            <h2 className='text-2xl font-medium text-center uppercase'>Add New Spot</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
               <div>
                  <label className='block mb-1 text-sm font-light'>Spot Name</label>
                  <input
                     type='text'
                     name='name'
                     placeholder='Enter spot name'
                     className='w-full input border rounded px-3 py-2 focus:outline-none'
                     required
                  />
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>Spot Image</label>
                  <input
                     type='url'
                     name='spotImage'
                     placeholder='Image URL'
                     className='w-full input border rounded px-3 py-2 focus:outline-none'
                     required
                  />
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>Location</label>
                  <input
                     type='text'
                     name='location'
                     placeholder='Enter spot location'
                     className='w-full input border rounded px-3 py-2 focus:outline-none'
                     required
                  />
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>Short Description</label>
                  <textarea
                     className="w-full border border-gray-600 rounded px-3 py-2.5 text-sm focus:outline-none"
                     placeholder="Write a short description..."
                     name='shortDescription'
                     rows={1}
                     required
                  ></textarea>
               </div>

               <div>
                  <label className='block mb-1 text-sm font-light'>AVG Cost</label>
                  <input
                     type='number'
                     name='avgCost'
                     placeholder='Enter Tour AVG Cost'
                     className='w-full input border rounded px-3 py-2 focus:outline-none'
                     required
                  />
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>Seasonality</label>
                  <select
                     value={season}
                     onChange={(e) => setSeason(e.target.value)}
                     className="select w-full focus:outline-0"
                     required
                  >
                     <option value="" disabled>Select a season</option>
                     {seasons.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                     ))}
                  </select>
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>Travel Time</label>
                  <select
                     value={travelTime}
                     onChange={(e) => setTravelTime(e.target.value)}
                     className="select w-full focus:outline-0"
                     required
                  >
                     <option value="" disabled>Choose travel time</option>
                     {travelOptions.map((time, idx) => (
                        <option key={idx} value={time}>{time}</option>
                     ))}
                  </select>
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>Total Visitor (Per Year)</label>
                  <input
                     type='number'
                     name='visitorPerYear'
                     placeholder='Enter visitor number'
                     className='w-full input border rounded px-3 py-2 focus:outline-none'
                     required
                  />
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>User Email</label>
                  <input
                     type='email'
                     name='userEmail'
                     placeholder='Enter user email address'
                     className='w-full input border rounded px-3 py-2 focus:outline-none'
                     required
                  />
               </div>
               <div>
                  <label className='block mb-1 text-sm font-light'>User Name</label>
                  <input
                     type='text'
                     name='userName'
                     placeholder='Enter user name'
                     className='w-full input border rounded px-3 py-2 focus:outline-none'
                     required
                  />
               </div>
            </div>
            <div className='text-center w-full'>
               <button type='submit' className='btn btn-primary w-full'>Add</button>
            </div>
         </form>
      </div>
   );
};

export default AddSpot;
