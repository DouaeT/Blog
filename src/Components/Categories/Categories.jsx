import React,{useState,useEffect} from 'react';
import './Categories.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Categories = () => {

  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    const getCategories = async() =>{ const {data} = await axios.get("/categories/");
    setCategories(data);
  }
  getCategories();
  },[])

  return (
    <section className="categories-section " style={{paddingTop: '5rem'}}>
      <h2 className="category-title black bald-txt space-letter">
        Categories
      </h2>

      <div className="categories flex">
        {
          categories?.map(category =>{
            return <Link to={`/posts/${category.Category}`}>
              <span className='category-btn'>
                {category.Category}
              </span>
            </Link> 
          })
        }

      </div>
    </section>
  )
}

export default Categories