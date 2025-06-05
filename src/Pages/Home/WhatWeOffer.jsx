const WhatWeOffer = () => {
   return (
      <section
         className="relative bg-cover bg-center bg-no-repeat font-Onset text-white"
         style={{
            backgroundImage: `url('https://i.postimg.cc/nrwM3Tqd/photo-1549221360-456a9c197d5b.avif')`,
         }}
      >
         {/* Overlay */}
         <div className="absolute inset-0 bg-black/60"></div>

         {/* Content */}
         <div className="relative z-10 px-6 md:px-12 py-20 text-center">
            <p className="uppercase tracking-[0.2em] text-purple-200 text-sm md:text-base mb-3">
               What We Offer
            </p>
            <h2 className="text-3xl md:text-5xl  font-semibold leading-tight mb-6 font-Onset">
               Take the Plunge: Experience the Thrill of Bungee Jumping
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-12">
               Safe, professional, and unforgettable — our bungee jumping adventures are designed for adrenaline junkies and first-timers alike.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
               {[
                  {
                     icon: '🪂',
                     title: 'Expert Instructors',
                     desc: 'Our certified jumpmasters ensure your safety and coach you every step of the way.',
                  },
                  {
                     icon: '🧯',
                     title: 'Top-Notch Equipment',
                     desc: 'We use world-class, regularly inspected gear to provide a secure jump every time.',
                  },
                  {
                     icon: '🌄',
                     title: 'Scenic Locations',
                     desc: 'Jump from breathtaking natural locations that add beauty to your adrenaline rush.',
                  },
               ].map((item, i) => (
                  <div
                     key={i}
                     className="bg-white/10 hover:bg-white/20 transition backdrop-blur-md p-6 rounded-2xl shadow-md group"
                  >
                     <div className="text-amber-400 text-4xl mb-4 transition-transform group-hover:scale-110">
                        {item.icon}
                     </div>
                     <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                     <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default WhatWeOffer;
