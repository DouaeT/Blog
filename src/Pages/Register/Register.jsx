import React,{useState} from 'react';
import './Register.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Register = () => {

  const [user,setUser] = useState({
    username: null,
    email: null,
    password: null
  })
  const [userError, setUserError] = useState(false)
  const [generalError, setGeneralError] = useState(false)

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      if(user.username && user.email &&user.password){
        const newUser = await axios.post('/auth/register',{
          username: user.username,
          email: user.email,
          password: user.password,
          userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23Ihpqh2qvEizUNzNv49lXhlMhga2cQa-cw&usqp=CAU'
        })

        if(!newUser) {
            setUserError(true);
          return 
        }

        setUserError(false);
        setGeneralError(false)
        window.location.replace("/login")
      }
      
    } catch (error) {
      setGeneralError(true)
    }
    
  }

  return (
    <section className="register-page">
    <form onSubmit={handleSubmit} className="register-form flex">
      <label className={`${user.username && 'active'}`}>
        <input onChange={e=>setUser((oldVal) =>{
          return {...oldVal, username: e.target.value}
        })} type="text" value={user.username} />
        <span>
          Name :
        </span>
      </label>
      <label className={`${user.email && 'active'}`}>
        <input onChange={e=>setUser((oldVal) =>{
          return {...oldVal, email: e.target.value}
        })} type="text" value={user.email} />
        <span>
          Email:
        </span>
      </label>
      <label className={`${user.password && 'active'}`}>
        <input onChange={e=>setUser((oldVal) =>{
          return {...oldVal, password: e.target.value}
        })} type="password" value={user.password} />
        <span>
          Password:
        </span>
      </label>
      <div className="flex" style={{
        marginTop: '2rem',
        alignItems: 'center'
      }}>
      <button type="submit" style={{
        marginRight: '10px',
        padding: '0.5rem 0.7rem'
      }} className='btn'>
        Register
      </button>
      <span>Already registered? 
        <Link to='/login'>Log In.</Link>
      </span>
      </div>
      {(userError || generalError) && (
        <span className='space-letter thin-txt'  style={{
          display: "block",
          color: "red",
          margin: '10px auto 0 auto',
          textTransform: "uppercase",
          fontSize: "var(--small-font-3)"
        }}>
          {userError && 'The account already exist!'}
          {generalError && 'something went wrong!'}
        text
      </span>
      )}
    </form>

  </section>
  )
}

export default Register