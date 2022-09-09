import React,{useState,useEffect,useContext} from 'react';
import './Header.css'
import { FaSearch, FaBars, FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Context} from '../../context/Context'

const Header = () => {
  

  //Variables
  const {user,dispatch} = useContext(Context);
  const [searchInput,setSearchInput] = useState();
  const [categories,setCategories] = useState([]);
  const PF = 'http://localhost:5000/images/'

  const [showInput,setShowInput] = useState(false);
  const [showNav, setShowNav] = useState(false);

  //Methods

  const logOut = (e)=>{
    dispatch({type:"LOGOUT"});
    window.location.replace("/")
  }

  const handleSearch = (e) =>{
    if(e.charCode === 13){
    window.location.replace(`/posts/search/${e.target.value}`)
    }
  }

  // UseEffect
  useEffect(()=>{
    const getCategories = async() =>{ const {data} = await axios.get("/categories/");
    setCategories(data);
  }
  getCategories();
  },[])




  return (
    <header>
    <nav className='lg-screen flex' >
      <div className="logo">
        <Link className='black bald-txt black space-letter' to='/'>
          BLOG
        </Link>
      </div>

      <ul className="nav-menu flex">
        <li >
        <Link className='thin-txt' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='thin-txt' to='/about'>
            About
         </Link>
        </li>
        <li className='thin-txt'>          <Link className='thin-txt' to='/contact'>
            Contact
          </Link>
          </li>
      </ul>

      <div value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}  className={`nav-input ${showInput? 'show': ''} flex`}>
        <FaSearch onClick={()=> setShowInput(!showInput)} className='nav-search' />
        <input value={searchInput} onChange={e=>setSearchInput(e.target.value)} onKeyPress={handleSearch}  type="text" />
      </div>

      <div className='nav-icons flex'>
        <FaBars className='nav-bars' onClick={()=>setShowNav(true)} />
        {!(user?.user)?<Link to='/login'>
          <FaUser />
        </Link>: (<><Link to='/accountsettings' >
          <img className='profile-img' src={PF + user?.user?.userImg} alt="" />
        </Link> 
          <span onClick={(e)=>logOut()}>Logout</span>
          </>
        )
        }

      </div>
    </nav>
    {categories && <article style={{
      backgroundColor: 'var(--color-white)',
      padding: "10px 20px",
      border: "1px solid var(--color-light-gray)"
    }} className="flex">
    <ul className="nav-menu flex">
        {
          categories.map((category,index)=>{
            return  <li key={index} >
            <Link className='thin-txt' to={`/posts/${category.Category}`}>
                {category.Category}
              </Link>
            </li> 
          })
        }
      </ul>
    </article>}

    <nav className={`sm-screen nav-overlay flex ${showNav? 'show': ''}`}>
      <AiOutlineClose onClick={()=>setShowNav(false)} className='nav-close' />
      <ul className="flex sm-nav-menu">
        <li >
        <Link className='thin-txt' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='thin-txt' to='/about'>
            About
         </Link>
        </li>
        <li className='thin-txt'>          <Link className='thin-txt' to='/contact'>
            Contact
          </Link>
          </li>
      </ul>
    </nav>
    
    </header>
  )
}

export default Header