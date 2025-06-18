import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import AuthContext from '../../Provider/context';

const AddSpot = () => {
   const seasons = ["Spring", "Summer", "Rainy", "Autumn", "Late Autumn", "Winter"];
   const travelOptions = ["1 Days", "2 Days", "3 Days", "4 Days", "5 Days", "6 Days", "7 Days", "15 Days", "30 Days"];

   const [season, setSeason] = useState('');
   const [travelTime, setTravelTime] = useState('');

   const { user } = useContext(AuthContext);
   const handleFormSubmit = (e) => {
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

      const spotData = { spotName, spotImage, location, shortDescription, avgCost, season, travelTime, visitorPerYear, duration, userEmail, userName };
      fetch('http://localhost:5000/spots', {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(spotData),
      }).then(res => res.json()).then(data => {
         if (data.acknowledged === true) {
            toast.success("Spot added Successfully!")
            e.target.reset();
         }
      });
   };

   return (
      <div className='min-h-screen flex items-center justify-center bg-base-200 p-4 font-Onset animate-fade-in-up'>
         <form
            onSubmit={handleFormSubmit}
            className='w-full md:max-w-4xl bg-base-100 p-8 rounded-3xl shadow-xl space-y-6'
         >
            <h2 className='text-3xl font-semibold text-center title-text-color capitalize tracking-wider'>
               Add New Spot
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
               <div>
                  <label className='label text-sm'>Spot Name</label>
                  <input
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
                  name='shortDescription'
                  placeholder='Write a short description...'
                  rows={3}
                  className='textarea textarea-bordered w-full'
                  required
               />
            </div>

            <div className='pt-4'>
               <button type='submit' className='btn btn-primary w-full text-lg'>Add Spot</button>
            </div>
         </form>
      </div>


   );
};

export default AddSpot;
