import { CiLocationOn, CiTimer } from 'react-icons/ci';
import { IoMdStar } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';

const AllSpot = () => {
   const spots = useLoaderData();
   if (!spots.length) {
      return <div>There are no spot avilable right now.</div>
   }
   return (
      <div>
         {
            spots.length > 0 ? (
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 font-Onset '>
                  {spots.map(spot => (
                     <div className='bg-base rounded-lg p-0.5 border border-gray-300/40'>
                        <Link to={`/spot-detail/${spot._id}`} key={spot._id} className='relative'>
                           <img src={spot.spotImage} alt={spot.spotName} className='w-full h-60 object-cover rounded-xl' />
                           <div className='absolute top-2 right-2  bg-base-100 p-2 rounded-lg flex items-center justify-center'>
                              <p><IoMdStar className='size-4.5 text-amber-500 me-1' /></p><p>4.3 (4)</p>
                           </div>
                        </Link>
                        <div className='space-y-2 p-3'>
                           <div className='flex justify-between space-x-1'>
                              <Link to={`/spot-detail/${spot._id}`} key={spot._id} className='text-2xl font-medium mt-2 capitalize'>{spot.spotName.slice(0, 36)}{spot.spotName.length > 36 && <span>...</span>} </Link>
                              <div className='flex items-center justify-center whitespace-nowrap'><CiTimer className='size-5 font-medium me-1' /> {spot.duration} hours</div>
                           </div>
                           <p className='text-gray-500 flex items-center'> <CiLocationOn className='me-2' />{spot.location}</p>
                           <div className='flex justify-between items-center'>
                              <p> <span className='text-violet-800 text-2xl font-medium'>${spot.avgCost}</span> / <span className='font-light'>person</span></p>
                              <button className='btn'>Book now</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <div className='text-center p-4'>
                  <h2 className='text-xl font-semibold'>No Spots Available</h2>
                  <p>Please check back later.</p>
               </div>
            )
         }
      </div>
   );
};

export default AllSpot;