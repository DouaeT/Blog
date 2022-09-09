import React from 'react';
import './About.css'

const About = () => {
  return (
    <section className="about-page flex" >
      <div className="img-wrapper">
        <img src="https://images.pexels.com/photos/5741970/pexels-photo-5741970.jpeg" alt="" />
      </div>

      <div className="about-page-content ">
        <h1 className='black space-letter bold-txt'>About Us</h1>
        <p className='thin-txt space-letter'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa soluta modi, vitae mollitia natus architecto recusandae animi iure voluptatibus suscipit optio non eos veniam sunt iusto numquam, facere, distinctio ipsum doloribus quos laborum perspiciatis dolorem! Praesentium ipsum expedita non, aliquid maiores distinctio saepe. Consequuntur quidem tempore quod quas dicta.
        </p>
      </div>
    </section>
  )
}

export default About