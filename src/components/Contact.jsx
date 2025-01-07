import React from "react";
import contact from "../Images/contact.jpg";
import BreadCrumb from "./ReusableComponents/BreadCrumb";

const Contact = () => {
  return (
    <div>
      <BreadCrumb bgImage={contact} title={'Contact Us'}/>

      <div className="flex flex-wrap justify-between items-start w-full sm:w-[90%] mx-auto my-16 gap-8">
        {/* Contact Details */}
        <div className="flex flex-col gap-8 w-full sm:w-[45%]">
          {/* First Contact */}
          <div className="flex items-start gap-4">
            <img
              src="https://kits.astylers.com/carpeta/wp-content/uploads/sites/9/2022/12/image28564.jpg"
              alt="Sidney"
              className="w-full sm:w-[270px] h-[180px] object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">Sidney</h2>
              <p className="text-gray-600 flex items-center gap-2">
                📧 <span>ex@domain.com</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                📞 <span>(+1) 234 56 789</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                📍 <span>633, Northwest, Apartment 11, Ecuador</span>
              </p>
            </div>
          </div>

          {/* Second Contact */}
          <div className="flex items-start gap-4">
            <img
              src="https://kits.astylers.com/carpeta/wp-content/uploads/sites/9/2022/12/image28576.jpg"
              alt="Melbourne"
              className="w-full sm:w-[270px] h-[180px] object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">Melbourne</h2>
              <p className="text-gray-600 flex items-center gap-2">
                📧 <span>ex@domain.com</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                📞 <span>(+1) 234 56 789</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                📍 <span>633, Northwest, Apartment 11, Ecuador</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-[45%]">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            I am a text block. Click the edit button to change this text. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#003a34] text-white font-bold py-2 rounded-full hover:bg-teal-700 duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10">
        <div className="google-map-code">
          <iframe
            title="google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473115.9060003995!2d-9.790797163012584!3d31.778265070846214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sma!4v1709282907766!5m2!1sen!2sma"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
