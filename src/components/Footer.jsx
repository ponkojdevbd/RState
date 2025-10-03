import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-5 md:py-10 flex flex-col sm:flex-row items-center justify-center gap-1 text-gray-400 border border-gray-300">
      <p>Estate &copy; {currentYear}.</p>

      <p>
        Designed & Developedby
        <a
          href="http://www.ponkojmondol.top"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/70 font-medium ml-1"
        >
          Ponkoj Mondol
        </a>
      </p>
    </div>
  );
};

export default Footer;
