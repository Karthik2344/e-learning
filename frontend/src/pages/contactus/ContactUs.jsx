import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-content">
          <h1>Contact Us</h1>
        </div>
      </div>
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61194.55533867182!2d81.47494099488358!3d16.543268506753588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2a6a86d3e4b%3A0x4eed21243d2dcfed!2sBhimavaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1719038170574!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div className="first">
              <i className="fa fa-home"></i>
              <span>
                <h5>XYZ, Road, ABC Building</h5>
                <p>Bhimavaram, Andhra Pradesh</p>
              </span>
            </div>
            <div className="first">
              <i className="fa fa-phone"></i>
              <span>
                <h5>+91 7032362829</h5>
                <p>Mon-Sat 9am-9pm</p>
              </span>
            </div>
            <div className="first">
              <i className="fa fa-envelope"></i>
              <span>
                <h5>karthikkodamanchili2344@gmail.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
