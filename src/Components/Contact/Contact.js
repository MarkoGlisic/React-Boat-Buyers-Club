import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-banner">
        <h2>Contacts</h2>
        <Link to="/" className="back-to-home">
          Home
        </Link>
      </div>
      <div className="contact-container">
        <h1 className='contact-title'>Get in Touch</h1>

        <label htmlFor="name">Name*</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Your Email*</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message*</label>
        <textarea name="message" id="message" required></textarea>

        <div className="contact-checkbox">

            <input className='checkbox' type="checkbox" required></input>
            <label className='checkbox-label'htmlFor="checbox">
            I agree to terms
            </label>
        </div>

        <button className="contact-submit-btn" type="submit">
          Send Message
        </button>
      </div>
    </>
  );
};

export default Contact;
