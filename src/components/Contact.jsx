import React from "react";
import { FaFacebookF, FaGlobe, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "20e7aeea-835e-4c01-bae2-6ada5a458ad6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");

      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
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
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
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

        <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-4 md:gap-2 pt-4  ">
          <button
            className="bg-blue-600 text-white py-2 px-8 rounded text-start"
            type="submit"
          >
            {result ? result : "Send Message"}
          </button>
          {/* Other Contact */}
          <div className=" flex items-center justify-center gap-2 md:gap-4 text-gray-600 ">
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
      </form>
    </motion.div>
  );
};

export default Contact;
