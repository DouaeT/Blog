import React from 'react';
import './CarouselItem.css'

const CarouselItem = ({img,title,categories}) => {
  return (
    <div key={new Date()} className="carousel-item">
    <div className="img-wrapper">
    <img src={img} alt="" />
    </div>

    <div className="carousel-item-info flex">
      <h3 className="item-title black bald-txt space-letter">
        {title}
      </h3>
      <div className="flex">
        {
        categories.map(category=>{
            return   <button className="category-btn">
            Category1
          </button> 
        })
        }
      </div>
    <button style={{
      padding: '10px 15px',
      margin: '10px auto'
    }} className="btn">
      Read More
    </button>
    </div>
  </div>  
  )
}

export default CarouselItem