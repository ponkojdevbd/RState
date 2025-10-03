import React from "react";
import { FaFacebookF, FaGlobe, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32  w-full overflow-hidden"
      id="Contact"
    >
      {/* Section Heading */}
      <div className=" text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Contact
          <span className="underline underline-offset-4 decoration-1 font-light ml-2">
            With Us
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto ">
          Ready to Make a Move? Let's Build Your Future Togather
        </p>
      </div>

      {/* Contact form */}
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className=" w-full md:w-1/2 text-left">
            Your Name
            <input
              className=" w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="name"
              placeholder="Your Nane"
              required
            />
          </div>
          <div className=" w-full md:w-1/2 text-left md:pl-4 my-6 md:my-0 ">
            Your Email
            <input
              className=" w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className=" w-full my-2 md:my-4 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4  h-48 resize-none"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-12 rounded mt-2 mb-10 text-start"
          type="submit"
        >
          Send Message
        </button>
      </form>

      {/* Other Contact */}
      <div className="w-full md:max-w-2xl mx-auto flex items-center justify-center gap-2 md:gap-4 text-gray-600 ">
        <p className="text-base md:text-lg">You May also Connect :</p>
        <div className=" flex items-center justify-between gap-2">
          <a
            href="https://www.ponkojmondol.top"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size={18} />
          </a>
          <a
            href="https://www.facebook.com/ponkoj.mondol.bd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://wa.me/+8801833044436"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="tel:+8801833044436"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdCall size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
