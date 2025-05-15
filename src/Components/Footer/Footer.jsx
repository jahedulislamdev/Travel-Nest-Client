import React from "react";
import {
   FaFacebookF,
   FaTwitter,
   FaInstagram,
   FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="bg-[#0b1d2c] text-gray-300 px-6 py-10 md:px-20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and About */}
            <div>
               <h1 className="text-2xl font-bold text-white mb-4 uppercase ">TravelNest</h1>
               <p className="text-sm leading-relaxed">
                  Explore the world effortlessly. TravelNest helps you plan, manage,
                  and enjoy your journeys with confidence and comfort.
               </p>
            </div>

            {/* Services */}
            <div>
               <h2 className="text-xl font-semibold text-white mb-4">Services</h2>
               <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Tour Packages</a></li>
                  <li><a href="#" className="hover:text-white">Flight Booking</a></li>
                  <li><a href="#" className="hover:text-white">Hotel Reservations</a></li>
                  <li><a href="#" className="hover:text-white">Custom Trips</a></li>
               </ul>
            </div>

            {/* Support */}
            <div>
               <h2 className="text-xl font-semibold text-white mb-4">Support</h2>
               <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                  <li><a href="#" className="hover:text-white">Travel Tips</a></li>
                  <li><a href="#" className="hover:text-white">Contact Support</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
               </ul>
            </div>

            {/* Social Media */}
            <div>
               <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
               <div className="flex space-x-4 text-xl">
                  <Link to="https://www.facebook.com/jahedulislam.jishan.9" target="_blank" className="hover:text-white"><FaFacebookF /></Link>
                  <Link to="https://x.com/JISHAN0002" target="_blank" className="hover:text-white"><FaTwitter /></Link>
                  <Link to="https://www.instagram.com/m_jishan_2" target="_blank" className="hover:text-white"><FaInstagram /></Link>
                  <Link to="https://www.linkedin.com/in/jahedul-islam-87881935b/" target="_blank" className="hover:text-white"><FaLinkedinIn /></Link>
               </div>
               <p className="mt-4 text-sm">Stay inspired with travel stories & deals.</p>
            </div>
         </div>

         {/* Bottom */}
         <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TravelNest. All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;
