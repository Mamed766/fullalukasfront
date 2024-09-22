import React from "react";
import { FaClock, FaPhone, FaStore } from "react-icons/fa";

type ContactInfo = {
  icon: JSX.Element;
  title: string;
  details: string[];
};

const contactData: ContactInfo[] = [
  {
    icon: <FaStore />,
    title: "OUR STORE",
    details: ["7021 Washington SQ.", "South New York, NY 10012"],
  },
  {
    icon: <FaPhone />,
    title: "CONTACT INFO",
    details: ["Telephone: 703.172.3412", "E-mail: hello@example.com"],
  },
  {
    icon: <FaClock />,
    title: "BUSINESS HOURS",
    details: ["Monday - Sunday:", "09:00 am - 20:00 pm"],
  },
];

const Contact = () => {
  return (
    <div className="pt-[11rem] max-w-[1280px] mx-auto px-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[36px]">Contact</h2>
        <p className="text-[20px] text-[#555]">
          Click on your nearest store location below to set the road on Google
          Map.
        </p>
      </div>
      <div className="mt-10 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094974!2d144.9537363153177!3d-37.81627937975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57724b3a7b0da4!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1619145267855!5m2!1sen!2sus"
          className="w-full h-[300px] md:h-[450px] lg:h-[600px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-wrap border-b-2 justify-between items-center w-full max-w-[1280px] mx-auto py-10">
        {contactData.map((contact, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/3 px-4 mb-6"
          >
            <div className="text-4xl mb-4 text-[#333]">{contact.icon}</div>
            <h3 className="text-lg font-semibold">{contact.title}</h3>
            {contact.details.map((detail, i) => (
              <p key={i} className="text-[#555]">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-[900px] mx-auto p-4 mt-10 ">
        <h2 className="text-3xl font-bold text-center mb-8">
          Have an question? Contact us!
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
          <textarea
            placeholder="Write Your Comment..."
            rows={5}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
