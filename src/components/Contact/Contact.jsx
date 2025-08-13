import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert('Backend is not connected yet. This is just a demo form.');
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h2>Contact Me</h2>

        <div className="input_box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="Field"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="Field"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input_box">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="Field"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;