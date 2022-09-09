import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact ">
      <article className="contact-wrapper flex">
      <img src="https://images.pexels.com/photos/12161836/pexels-photo-12161836.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

      <div className="contact-content flex">
        <h1>Contact Us</h1>
        <div className="contact-form flex">
          <label>
            <span className='bold-txt space-letter gray'>
            Name:
            </span>
            <input type="text" placeholder='Enter your Name' />
          </label>

          <label>
            <span className='bold-txt space-letter gray'>
            Email:
            </span>
            <input type="text" placeholder='Enter your Email' />
          </label>

          <label className='contact-textarea'>
            <span className='bold-txt space-letter gray'>
            Message:
            </span>
            <textarea placeholder='Enter your message...' ></textarea>
          </label>

          <button className="btn" style={{
            padding: '1rem 0',
            fontSize: "var(--small-font-2)",
            marginTop: "1rem"
          }}>Send</button>
        </div>
      </ div>
      </article>
    </section>
  )
}

export default Contact