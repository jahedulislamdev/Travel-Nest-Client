const Banner = () => {
   return (
      <div className="relative w-full h-96 md:h-screen overflow-hidden">
         {/* 🔹 Background Video */}
         <video
            src="https://assets.mixkit.co/videos/41576/41576-720.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
         />

         {/* 🔹 Overlay Content */}
         <div className="relative z-10 w-full h-full flex items-center justify-center bg-black/50 px-6">
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

               {/* 🔸 Text Content */}
               <div className="text-white space-y-6 col-span-2">
                  <h1 className="text-4xl md:text-6xl leading-tight font-ubuntu font-medium">
                     Explore a world of wonder
                  </h1>
                  <p className="text-lg md:text-3xl text-gray-200 max-w-lg font-light ">
                     Step beyond the ordinary and embrace a journey that inspires curiosity, courage, and adventure.
                  </p>
                  <button className="mt-4 px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
                     Start Your Journey
                  </button>
               </div>

               {/* 🔸 Side Image or Illustration */}
               <div className="hidden md:flex justify-center">
                  <img
                     src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="Mountains"
                     className="w-full max-w-sm rounded-3xl shadow-2xl"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;