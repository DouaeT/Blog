import React from 'react';
import './Footer.css';
import {FeaturedPost} from '../index'

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-wrapper grid">
        <article>
            <h2 className='black space-letter bold-txt' style={{
                marginBottom: '2rem'
            }}>
                Trending Posts
            </h2>
        
            <div>
            <FeaturedPost image='https://images.pexels.com/photos/5967868/pexels-photo-5967868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Featured Post 1' date='October 15, 2022' />

            <FeaturedPost image='https://images.pexels.com/photos/8977598/pexels-photo-8977598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Featured Post 2' date='May 25, 2022' />

            <FeaturedPost image='https://images.pexels.com/photos/13214090/pexels-photo-13214090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' title='Featured Post 3' date='Mars 12, 2022'/>

            <FeaturedPost title='Lorem ipsum dolor sit amet.' date='Juilliet 7,2022' image="https://images.pexels.com/photos/8210476/pexels-photo-8210476.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            </div>
        </article>
        <article>
            <h2 className='black space-letter bold-txt' style={{
                marginBottom: '2rem'
            }}>categories</h2>
            <ul className='thin-txt space-letter '>
            <li>
                Category1
            </li>
            <li>
                Category2
            </li>
            <li>
                Category3
            </li>
            <li>
                Category4
            </li>
            <li>
                Category5
            </li>
            </ul>
        </article>
        <article>
            <h2 className='black space-letter bold-txt' style={{
                marginBottom: '2rem'
            }}>About</h2>
            <p className='thin-txt' style={{
                lineHeight: '25px'
            }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus amet dolor cupiditate maiores, nobis expedita aut ipsa, quam hic voluptatem sint veniam, voluptates iste tenetur?
            </p>
        </article>
        </div>
            <p className='thin-txt' style={{
                textAlign: "center",
                marginBottom: '5px',
                borderTop: "1px solid var(--color-gray)"
            }}>
                &copy; copyright 2022/2023, Douaa El Mahroui
            </p>
    </section>
  )
}

export default Footer