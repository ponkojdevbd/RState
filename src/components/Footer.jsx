import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full  overflow-hidden"
      id="Footer"
    >
      {/* Footer Top */}
      <div className=" container mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Logo" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            culpa placeat quae facere magni, natus expedita nesciunt illum eum
            aut!
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h2 className="text-white text-lg font-bold mb-4">Company</h2>
          <ul className="flex flex-col gap-2 text-gray-500 ">
            <li>
              <a className="hover:text-white" href="#Header">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#About">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#Contact">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className=" w-full md:w-1/3">
          <h2 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest newes, articals, and resources send to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none "
            />
            <button className="py-2 px-4 rounded bg-blue-600 hover:bg-blue-800 cursor-pointer text-white tarnsition-all duration-200 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className=" border-t border-gray-700 py-4 mt-10 ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-gray-500 ">
          <p>Estate &copy; {currentYear}.</p>

          <p>
            Designed & Developedby
            <a
              href="http://www.ponkojmondol.top"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-white/50 font-medium ml-1 transition-all duration-200 ease-in-out"
            >
              Ponkoj Mondol
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
