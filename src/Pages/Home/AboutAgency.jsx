import React from 'react';
import { IoCheckboxOutline } from 'react-icons/io5';

const WhyChooseUs = () => {
   return (
      <section className="px-6 py-16 md:px-10 lg:px-20 font-Onset bg-gray-50 text-gray-800">
         <div className="grid md:grid-cols-3 gap-10 items-center">
            {/* Left Block */}
            <div className="space-y-6">
               <p className="uppercase text-sm font-semibold tracking-wider text-purple-500">Why Choose Us</p>
               <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                  Our Promise: Quality, Service & Memorable Travel
               </h2>
               <p className="text-base md:text-lg text-gray-600">
                  Join hands with our trusted partners to discover exclusive travel experiences and unmatched comfort.
               </p>
               <ul className="space-y-3 text-base md:text-lg text-gray-700">
                  {[
                     "Trusted, Local Travel Experts",
                     "Exclusive Deals & Discounts",
                     "Personalized Itineraries"
                  ].map((item, index) => (
                     <li key={index} className="flex items-start">
                        <IoCheckboxOutline className="text-purple-600 mt-1 mr-2" />
                        {item}
                     </li>
                  ))}
               </ul>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
               <img
                  className="w-48 md:w-60 rounded-full shadow-lg object-cover"
                  src="https://i.postimg.cc/8PBDTJLz/image.png"
                  alt="Travel Experience"
               />
            </div>

            {/* Right Block */}
            <div className="space-y-6">
               <p className="uppercase text-sm font-semibold tracking-wider text-purple-500">Experience the Difference</p>
               <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                  Choose Us for Your Next Adventure
               </h2>
               <p className="text-gray-600">
                  We offer curated destinations and tours that capture the true essence of a place—ensuring you enjoy the very best.
               </p>

               {/* Avatar Group */}
               <div className="flex items-center space-x-2">
                  {[
                     "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600",
                     "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=600",
                     "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600"
                  ].map((url, index) => (
                     <img
                        key={index}
                        src={url}
                        alt={`User ${index + 1}`}
                        className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                     />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-yellow-900 text-white flex items-center justify-center text-xs font-medium">
                     8k+
                  </div>
               </div>

               <p className="text-sm text-gray-600">
                  Trusted by thousands of travelers worldwide.
               </p>
            </div>
         </div>
      </section>
   );
};

export default WhyChooseUs;
