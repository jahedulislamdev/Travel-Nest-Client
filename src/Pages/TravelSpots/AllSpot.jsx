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
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                  {spots.map(spot => (
                     <Link to={`/spot-detail/${spot._id}`} key={spot._id} className='bg-base shadow-lg rounded-lg p-4  border border-gray-700'>
                        <img src={spot.spotImage} alt={spot.spotName} className='w-full h-48 object-cover rounded-t-lg' />
                        <h3 className='text-xl font-semibold mt-2 capitalize'>{spot.spotName}</h3>
                        <p className='text-gray-400'>{spot.shortDescription?.slice(0, 100) + '...'}</p>
                        <p className='text-gray-500'>Location: {spot.location}</p>
                        <p className='text-violet-200/80 '>Avg Cost: ${spot.avgCost}</p>
                     </Link>
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