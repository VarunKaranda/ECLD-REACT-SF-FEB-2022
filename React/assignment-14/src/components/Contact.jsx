import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
      <>
    <div className="contact-container">
      <h1 className="contact-heading">Get in touch with us</h1>
      <div className="contact-input-div">
        <input
          className="contact-input"
          type="text"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="contact-input-div">
        <input
          className="contact-input"
          type="email"
          placeholder="Your email"
          required
        />
      </div>
      <div className="contact-input-div">
        <input
          className="contact-input"
          type="text"
          placeholder="Your Phone Number"
          required
        />
          </div>
          <div className="contact-input-div">
              <textarea placeholder="Your Message" rows="4" class ="textarea" cols="39" ></textarea>
          </div>
      <button className="contact-button" type="submit">
        Send
      </button>
    </div>
    </>
  );
}

export default Contact