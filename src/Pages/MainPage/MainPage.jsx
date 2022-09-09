import React,{useState} from 'react';
import './MainPage.css';
import {Carousel,Posts,SideBar} from '../../Components/index';
import { useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {

  return (
    <section className="main-page">
      <Carousel />
      <div className="main-page-grid grid">

      <div className="main-page-content">
      <Posts />
      </div>

      <div className="main-page-sidebar">
        <SideBar/>
      </div>

      </div>
    </section>
  )
}

export default MainPage