import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h2>Contact</h2>
        <p>
          Click on your neares store location below to set the road on Google
          Map.
        </p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094974!2d144.9537363153177!3d-37.81627937975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57724b3a7b0da4!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1619145267855!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
