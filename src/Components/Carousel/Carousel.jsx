import React,{useRef,useState,useEffect} from 'react';
import './Carousel.css';
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi';
import {CarouselItem} from '../index';
import axios from 'axios';


const Carousel = () => {

  const [posts,setPosts] = useState(null)

  useEffect(()=>{
    const getPosts= async() =>{ 
      const {data} = await axios.get("/posts?isFeatured=true");

    setPosts(data);
  }

  getPosts();
  },[]) 
  const carouselRef = useRef(null)

  const scroll = (location) =>{
    if(location === 'right'){
      carouselRef.current.scrollLeft += 565;

    } else {
      carouselRef.current.scrollLeft-= 565
    }
  }

  return (
    <section className="carousel">
      <h1 className='black space-letter bold-txt carousel-title' style={{
        fontSize: "var(--big-font)",
        marginBottom: "20px",
        paddingBottom: '15px',
        position: 'relative'
      }}>Featured Posts</h1>
      <div className="carousel-wrapper flex" ref={carouselRef}>
        {
          posts?.map((post,index)=>{
            return <CarouselItem key={index} img={post.photo} title={post.title} categories={post.categories} /> 
          })
        }
        <CarouselItem img='https://images.pexels.com/photos/13075582/pexels-photo-13075582.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />

        <CarouselItem img='https://images.pexels.com/photos/9197537/pexels-photo-9197537.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />

        <CarouselItem img='https://images.pexels.com/photos/5967868/pexels-photo-5967868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />

        <CarouselItem img='https://images.pexels.com/photos/8977598/pexels-photo-8977598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />

        <CarouselItem img='https://images.pexels.com/photos/4936304/pexels-photo-4936304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />

        <CarouselItem img='https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />

        <CarouselItem img='https://images.pexels.com/photos/13076597/pexels-photo-13076597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />

        <CarouselItem img='https://images.pexels.com/photos/13214090/pexels-photo-13214090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Title 1' categories={["categorie1","categorie2","categorie3"]} />
      </div>
      <div className="carousel-arrows flex">
        <BiLeftArrow onClick={(e) => {scroll('left')}} />
        <BiRightArrow onClick={(e) => {scroll('right')}} />
      </div>
    </section>
  )
}

export default Carousel
