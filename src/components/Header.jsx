import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className=" container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className=" text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="flex  items-center justify-center gap-4 mt-16">
          <button className="po_btn po_btn_border ">
            <a href="#Projects">Projects</a>
          </button>

          <button className="po_btn po_btn_background">
            <a className=" " href="#Contact">
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
