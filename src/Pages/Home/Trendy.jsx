import { BsArrowRight } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { CiLocationOn, CiTimer } from 'react-icons/ci';
import { IoMdStar } from 'react-icons/io';
import './trendy.css'

const Trendy = () => {
   const trendySpots = useLoaderData();
   console.log(trendySpots);
   return (
      <div className='font-Onset px-2 md:px-10 my-10'>
         <div className='flex justify-between items-center p-4'>
            <div className='space-y-2'>
               <p className='text-purple-400'>Travel Destinations</p>
               <p className='text-2xl md:text-4xl font-semibold'>Trendy Travel Locations</p>
            </div>
            <Link to={'/all-spot'} className='flex items-center md:text-lg bg-amber-700/40 px-2 py-2 md:py-3 md:px-5 rounded-lg  md:rounded-xl'>Explore <span className='hidden md:inline'>More</span> <BsArrowRight className='size-6 ms-1' /></Link>
         </div>
         <div>
            <div className="pt-5 ">
               <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  speed={1500}
                  loop={trendySpots?.length >= 8} // Enable loop only if there are more then 8 slides
                  autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  navigation={true}
                  breakpoints={{
                     450: { slidesPerView: 1, spaceBetween: 20 },
                     640: { slidesPerView: 2, spaceBetween: 20 },
                     768: { slidesPerView: 3, spaceBetween: 30 },
                     1400: { slidesPerView: 4, spaceBetween: 10 },
                  }}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
               >
                  {
                     trendySpots.map((spot, index) => (
                        <SwiperSlide key={`${spot.id}-${index}`} id="trendingSlide">
                           <div key={spot._id} className='h-[370px] md:h-[415px] bg-base rounded-lg p-1 border border-gray-500/20'>
                              <Link to={`/spot-detail/${spot._id}`} key={spot._id} className='relative'>
                                 <img src={spot.spotImage} alt={spot.spotName} className='w-full h-45 md:h-60 object-cover rounded-xl' />
                                 <div className='absolute top-2 right-2  bg-base-100 p-2 rounded-lg flex items-center justify-center'>
                                    <p><IoMdStar className='size-4.5 text-amber-500 me-1' /></p><p>4.3 (5)</p>
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
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Trendy;
