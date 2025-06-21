import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaClock } from 'react-icons/fa';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';
import Trendy from '../Home/Trendy';

const SpotDetails = () => {
   const spot = useLoaderData();

   const [adults, setAdults] = useState(1);
   const [children, setChildren] = useState(0);
   const [extras, setExtras] = useState({
      service1: false,
      service2: false,
      service3: false,
   });

   const handleExtraChange = (e) => {
      const { id, checked } = e.target;
      setExtras((prev) => ({ ...prev, [id]: checked }));
   };

   const adultCost = adults * spot?.avgCost;
   const childCost = children * (spot?.avgCost / 2);
   const extraCost =
      (extras.service1 ? 50 : 0) +
      (extras.service2 ? 30 : 0) +
      (extras.service3 ? 20 : 0);

   const totalCost = adultCost + childCost + extraCost;

   return (
      <div className='px-10 py-4 font-Onset'>
         {/* Showcase Images */}
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[1, 2, 3].map((_, idx) => (
               <img
                  key={idx}
                  className='w-full h-[60vh] rounded-2xl object-center object-cover'
                  src={spot?.spotImage}
                  alt={spot?.spotName}
               />
            ))}
         </div>

         {/* Spot Info */}
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 py-8 px-2'>
            <div className='space-y-2 mt-4'>
               <h1 className='text-xl font-semibold capitalize'>{spot?.spotName}</h1>
               <p className='flex items-center'><CiLocationOn className='me-1 size-5' /> {spot?.location}</p>
            </div>
            <div className='flex items-center justify-center gap-x-4'>
               <div className='bg-sky-600 p-3 inline-block rounded-full'><FaClock className='size-7' /></div>
               <div>
                  <p className='font-semibold'>Duration</p>
                  <p className='tracking-wide'>{spot?.travelTime}</p>
               </div>
            </div>
            <div className='flex items-center justify-center gap-x-4'>
               <div className='bg-sky-600 p-3 inline-block rounded-full'><HiMiniUserGroup className='size-7' /></div>
               <div>
                  <p className='font-semibold'>Visitors Per Year</p>
                  <p className='tracking-wide'>{spot?.visitorPerYear}</p>
               </div>
            </div>
            <div className='flex items-center justify-center gap-x-4'>
               <div className='bg-sky-600 p-3 inline-block rounded-full'><PiCurrencyCircleDollarFill className='size-7' /></div>
               <div>
                  <p className='font-semibold'>Avg Cost</p>
                  <p className='tracking-wide'>$ {spot?.avgCost}</p>
               </div>
            </div>
         </div>

         {/* Booking Section */}
         <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mt-6 py-10 px-4 bg-base-300 rounded-2xl shadow-md'>
            {/* Left Description */}
            <div className='col-span-1 md:col-span-3 text-base leading-relaxed'>
               <p className=' opacity-80 '> {spot?.shortDescription}</p>
               <div className='mt-10 space-y-4'>
                  <h1 className='font-semibold text-lg'>Included / Excluded</h1>
                  <p className='opacity-60'>To help you plan your trip, we have put together a list of what's included and what's not included in your tour package. This will give you a clear understanding of what to expect and help you make any necessary arrangements before your journey begins.</p>
                  <ul className=' space-y-2 opacity-90'>
                     <li>✔ Train tickets and Bus transportation</li>
                     <li>✔ Breakfast, lunch, and dinner.</li>
                     <li>✔ Accommodation at hotel</li>
                     <li>✔ Train tickets and Bus transportation</li>
                     <li>✔ Transfers between destinations</li>
                     <li>✖ Entrance fees to museums</li>
                     <li>✖ Custom itinerary</li>
                  </ul>
               </div>

               <div className='mt-10 '>
                  <h1 className='font-semibold text-lg'>Tour Map</h1>
                  <p className='opacity-90'>Explore the route of your journey with our detailed tour map. This comprehensive map is designed to guide you through an exciting journey filled with remarkable destinations and captivating experiences.</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29714.708530701715!2d91.96039199399613!3d21.41593339121347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc96118ced5b5%3A0xfeac4d792191e35e!2sCox&#39;s%20Bazar%20Sea%20Beach!5e0!3m2!1sen!2sbd!4v1750321989981!5m2!1sen!2sbd"
                     width="600"
                     className="w-full h-[350px] rounded-lg shadow-md mt-3 "
                     allowfullscreen
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
               </div>
            </div>

            {/* Right Booking Form */}
            <div className='col-span-1 md:col-span-2 bg-base-300 p-6 rounded-xl shadow-sm space-y-6'>

               {/* Price */}
               <div className='flex items-center justify-between border-b border-gray-700 pb-4'>
                  <div>
                     <p className='text-sm opacity-70'>Price</p>
                     <h2 className='text-lg font-semibold '>From</h2>
                  </div>
                  <p className='text-xl font-bold text-sky-600'>$ {spot?.avgCost}</p>
               </div>

               {/* Booking Date */}
               <div>
                  <p className='text-sm opacity-70 mb-1'>Booking Date</p>
                  <div className='bg-base-300 border rounded-md px-3 py-2 text-sm opacity-80'>06-18-2025</div>
               </div>

               {/* Adults */}
               <div className='flex justify-between items-center border-b border-gray-700 pb-4'>
                  <div>
                     <p className='font-medium'>Adults</p>
                     <p className='text-sm opacity-70'>Over 18 - ${spot?.avgCost}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                     <button onClick={() => setAdults(adults + 1)} className='px-2 py-1 btn text-lg'>+</button>
                     <p className='w-6 text-center'>{adults}</p>
                     <button onClick={() => setAdults(Math.max(1, adults - 1))} className='px-2 py-1 btn text-lg'>-</button>
                  </div>
               </div>

               {/* Children */}
               <div className='flex justify-between items-center border-b border-gray-700 pb-4'>
                  <div>
                     <p className='font-medium'>Children</p>
                     <p className='text-sm opacity-70'>Under 18 - ${spot?.avgCost / 2}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                     <button onClick={() => setChildren(children + 1)} className='px-2 py-1 btn text-lg'>+</button>
                     <p className='w-6 text-center'>{children}</p>
                     <button onClick={() => setChildren(Math.max(0, children - 1))} className='px-2 py-1 btn text-lg'>-</button>
                  </div>
               </div>

               {/* Extra Services */}
               <div>
                  <h3 className='font-semibold opacity-80 mb-1'>Extra Services</h3>
                  <p className='text-sm opacity-60 mb-3'>Add extra services to your reservation:</p>
                  <div className='space-y-2 text-sm opacity-80'>
                     <div>
                        <input type="checkbox" id="service1" checked={extras.service1} onChange={handleExtraChange} className="mr-2" />
                        <label htmlFor="service1">Health Insurance - $50</label>
                     </div>
                     <div>
                        <input type="checkbox" id="service2" checked={extras.service2} onChange={handleExtraChange} className="mr-2" />
                        <label htmlFor="service2">Medical Insurance - $30</label>
                     </div>
                     <div>
                        <input type="checkbox" id="service3" checked={extras.service3} onChange={handleExtraChange} className="mr-2" />
                        <label htmlFor="service3">Baggage Insurance - $100</label>
                     </div>
                  </div>
               </div>

               {/* Total & Confirm */}
               <div className='pt-4 space-y-3'>
                  <p className='text-lg font-semibold opacity-80'>Total: <span className='text-blue-600'>${totalCost}</span></p>
                  <button className='w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 font-semibold transition duration-200'>
                     Confirm Booking
                  </button>
               </div>
            </div>
         </div>
         <div className='mt-10 px-2 text-center'>
            <h1 className='font-semibold text-2xl tracking-wider'>Gallery</h1>
            <p className=' px-28 mx-auto mt-3 text-md opacity-75'>Each image tells a unique story, inviting us into a world of emotion, beauty, and complexity. Get ready to be moved, inspired, and challenged as we journey through this captivating collection of images.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-03-package-01.jpeg" alt="" />
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-04-package-02.jpeg" alt="" />
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-05-package-03.jpeg" alt="" />
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-06-package-04.jpeg" alt="" />
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-mountain-wordpress-theme/wp-content/uploads/sites/6/2023/05/i-parallax-03-package-01.jpeg" alt="" />
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-mountain-wordpress-theme/wp-content/uploads/sites/6/2023/05/i-parallax-04-package-02.jpeg" alt="" />
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-08-destination-02.jpeg" alt="" />
               <img className='w-full h-[50vh] rounded-xl object-cover object-center' src="https://travel.nicdark.com/travel-agency-wordpress-theme/wp-content/uploads/sites/9/2023/05/i-parallax-07-destination-01.jpeg" alt="" />
            </div>
         </div>
         <div>
            <h1 className='font-semibold text-2xl tracking-wider'>Check More Packages</h1>
            <Trendy />
         </div>
      </div>
   );
};

export default SpotDetails;
