import React,{useEffect,useState} from 'react';
import './FeaturedPosts.css';
import {FeaturedPost} from '../index';
import axios from "axios";


const FeaturedPosts = () => {


  return (
    <section className="featured_posts">
      <h2 className="featured_posts-title black bald-txt space-letter">
        Trending Posts
      </h2>
    
      <div className="featured_posts-grid grid">
        
        <FeaturedPost image='https://images.pexels.com/photos/5967868/pexels-photo-5967868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Featured Post 1' date='October 15, 2022' />

        <FeaturedPost image='https://images.pexels.com/photos/8977598/pexels-photo-8977598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Featured Post 2' date='May 25, 2022' />

        <FeaturedPost image='https://images.pexels.com/photos/13214090/pexels-photo-13214090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Featured Post 3' date='Mars 12, 2022'/>

        <FeaturedPost title='Lorem ipsum dolor sit amet.' date='Juilliet 7,2022' image="https://images.pexels.com/photos/8210476/pexels-photo-8210476.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </div>

    </section>
  )
}

export default FeaturedPosts