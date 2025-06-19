import './trendy.css'
const Banner = () => {
   return (
      <div className="relative w-full h-[90vh] md:h-screen overflow-hidden font-Onset ">
         {/* 🔹 Background Image */}
         <img
            src="https://i.postimg.cc/dV15qphG/i-parallax-02-slide.jpg"
            alt="Travel Background"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
         />

         {/* 🔹 Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />

         {/* 🔹 Content */}
         <div className="relative z-20 flex items-center justify-center h-full px-4 md:px-12">
            <div className="text-left max-w-4xl space-y-6 animate-fade-in-up">
               <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight drop-shadow-md">
                  Discover the World Differently
               </h1>
               <p className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light drop-shadow">
                  Let every journey spark your soul. Embrace new cultures, stories, and the beauty that surrounds us.
               </p>
               <button className="mt-4 inline-block px-8 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300">
                  Start Your Journey
               </button>
            </div>
         </div>
      </div>
   );
};

export default Banner;
