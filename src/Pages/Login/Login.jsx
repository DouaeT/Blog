import React,{useContext,useState} from 'react'
import './Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Context} from '../../context/Context'
import {LoginStart, LoginSuccess, LoginFailure} from '../../context/Actions'

const Login = () => {

  const {dispatch,user: userLogin} = useContext(Context);

  // Variables
  const [user,setUser] = useState({
    username: null,
    password: null
  })
  const [userError, setUserError] = useState(false)
  const [generalError, setGeneralError] = useState(false)

  if(userLogin){
    window.location.replace("/");
  }

  // handleSubmit
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      if(user.username && user.password){
        dispatch({type:"LOGIN_START"})
        const {data:loginUser} = await axios.post('/auth/login',user);
        if(!loginUser) {
            setUserError(true);
          return 
        }
        
        localStorage.setItem("user",JSON.stringify(loginUser));
        setUserError(false);
        setGeneralError(false)
        dispatch({type:"LOGIN_SUCCESS",payload:loginUser})
        window.location.replace("/");
      }
      
    } catch (error) {
      setGeneralError(true)
      dispatch({type:"LOGIN_FAILURE"})
    }
    
  }

  return (
    <section className="login-page">
      <form onSubmit={handleSubmit} className="login-form flex">
        <label className={user.username && `active`}>
          <input onChange={e=>setUser((oldVal) =>{
          return {...oldVal, username: e.target.value}
        })} type="text" value={user.username}  />
          <span>
          Name or Email:
          </span>
        </label>
        <label className={user.password && 'active'}>
          <input type='password' onChange={e=>setUser((oldVal) =>{
          return {...oldVal, password: e.target.value}
        })} value={user.password}   />
          <span>
          Password:
          </span>
        </label>
        <div className="flex" style={{
          marginTop: '2rem',
          alignItems: 'center'
        }}>
        <button type='submit' style={{
          marginRight: '10px',
          padding: '0.5rem 0.7rem'
        }} className='btn'>
          Login In
        </button>
        <span>Don't Have and Accout? 
          <Link to='/register'>Register.</Link>
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
          {userError && "The account doesn't exist!"}
          {generalError && 'something went wrong!'}
      </span>
      )}
      </form>
    </section>
  )
}

export default Login