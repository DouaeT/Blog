import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not-found flex">
        <h1>The Page Doesn't Exist</h1>
        <Link to='/' style={{
            padding: '1rem 2rem',
            backgroundColor: 'white',
            fontSize: "25px"
        }} className='btn'>Go To Home Page</Link>
    </section>
  )
}

export default NotFound