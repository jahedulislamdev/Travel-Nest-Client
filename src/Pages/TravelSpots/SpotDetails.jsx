import { useLoaderData } from 'react-router-dom';
const SpotDetails = () => {
   const spot = useLoaderData();

   return (
      <div className="md:min-h-screen bg-gradient-to-br bg-gray-100/90 p-1 md:p-9">
         <div className="max-w-3xl mx-auto bg-gray-100/80 shadow-xl rounded-sm md-rounded-2xl overflow-hidden">
            <img
               src={spot.spotImage}
               alt={spot.spotName}
               className="w-full h-72 object-cover"
            />
            <div className="p-2 md:p-5">
               <h2 className="md-text-3xl text-xl ms-1 font-bold text-violet-700 mb-2 font-ubuntu capitalize">
                  {spot.spotName}
               </h2>
               <div className="flex flex-wrap gap-4 mb-4">
                  <span className="inline-flex items-center bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">
                     📍 {spot.location}
                  </span>
                  <span className="inline-flex items-center bg-blue-100/40 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                     🌤 {spot.season}
                  </span>
                  <span className="inline-flex items-center bg-green-100/40 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                     👥 {spot.visitorPerYear} visitors/year
                  </span>
                  <span className="inline-flex items-center bg-yellow-100/50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                     🕒 {spot.travelTime}
                  </span>
               </div>
               <div className="flex items-center mb-4">
                  <span className="text-lg font-semibold text-violet-600 mr-2">💰 AVG Cost:</span>
                  <span className="text-lg font-bold text-gray-800"> {spot.avgCost} BDT</span>
               </div>
               <p className="text-gray-700 text-base leading-relaxed font-OpenSan">{spot.shortDescription}</p>
            </div>
         </div>
      </div>
   );
};

export default SpotDetails;