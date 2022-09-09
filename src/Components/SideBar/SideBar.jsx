import React from 'react';
import './SideBar.css';

import {FeaturedPosts,Categories} from '../index';
import { FaTwitter,FaInstagram,FaFacebook } from 'react-icons/fa';

const SideBar = () => {
  return (
    <section className="sidebar">
    <Categories />
    <hr />
    <FeaturedPosts />
    <hr />
    <article className="about-sidebar">
    <h4 className='black space-letter bald'>About</h4>
    <p className='black about-sidebar-p'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus amet dolor cupiditate maiores, nobis expedita aut ipsa, quam hic voluptatem sint veniam, voluptates iste tenetur?
    </p>
    <button style={{padding: '0.7rem 1rem'}} className="btn ">
      Learn More
    </button>
    </article>
    <hr />
    <div className="social-media">
      <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook  />
      </a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
    </section>
  )
}

export default SideBar