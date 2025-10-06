import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      {/* Footer Top */}
      <div className=" container mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/3 mb-8">
          <img src={assets.logo_dark} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            culpa placeat quae facere magni, natus expedita nesciunt illum eum
            aut!
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>

    // <div className="py-5 md:py-10 flex flex-col sm:flex-row items-center justify-center gap-1 text-gray-400 border border-gray-300">
    //   <p>Estate &copy; {currentYear}.</p>

    //   <p>
    //     Designed & Developedby
    //     <a
    //       href="http://www.ponkojmondol.top"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-primary/70 font-medium ml-1"
    //     >
    //       Ponkoj Mondol
    //     </a>
    //   </p>
    // </div>
  );
};

export default Footer;
