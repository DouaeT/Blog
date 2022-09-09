import React from 'react';
import './FeaturedPost.css'

const FeaturedPost = ({image,title,date}) => {
  return (
    <article className="featured_posts-post flex">
    <div className="featured_posts-post-image">
      <img src={image} alt="" />
    </div>
    <div className="featured_posts-post-content">
      <h4 className="featured_post-title space-letter">
       {title}
      </h4>
      <span className="featured_posts-date thin-txt gray space-letter">
        {date}
      </span>
    </div>
  </article>
  )
}

export default FeaturedPost