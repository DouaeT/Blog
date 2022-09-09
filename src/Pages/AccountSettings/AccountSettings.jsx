import React,{useState,useContext} from 'react';
import './AccountSettings.css';
import { FaUserEdit } from 'react-icons/fa';
import { MdAddPhotoAlternate, MdLogout } from "react-icons/md";
import {SideBar} from '../../Components';
import axios from 'axios';
import {Context} from '../../context/Context';
import {Link} from 'react-router-dom';


const AccountSettings = () => {

    // Variables
    const {user,dispatch} = useContext(Context);
    const PF = 'http://localhost:5000/images/'
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [success,setSuccess] = useState(false)


    //Check if user exists
    if(!user?.user){
        window.location.replace("/login")
    }

    // Edit Account

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const Olduser = await axios.get(`/users/${user?.user?._id}`);
        dispatch({type:"UPDATE_START"});
        let editedUser = {
            username: Olduser.data.username,
            email: Olduser.data.email,
            password: Olduser.data.password,
            userImg: Olduser.data.userImg
        }
        let data = new FormData();

        if(username){
            editedUser.username = username;
        }

        if(email){
            editedUser.email = email;
        }

        if(password){
            editedUser.password = password;
        }

        if(file){
            const filename = Date.now() + file.name;
            data.append("name",filename)

            data.append("file",file);
            
            editedUser.userImg = filename;
            try{
                const res = await axios.post("/upload",data,{
                    headers:{
                        authorization: `Bearer ${user.token}
                    `}
                })


            } catch(err){
                console.log(err)
            }

        }   
        try{
            const res= await axios.post("/users",editedUser,{
                headers:{
                authorization: `Bearer ${user.token}
                `}
            });
            setSuccess(true);
            let {password,...payloadUser} = editedUser;
            dispatch({type:"UPDATE_SUCCESS",payload: {...user,user:{...payloadUser,_id: user?.user?._id}}});
        } catch(error){
            dispatch({type:"UPDATE_FAILURE"})
        }
    }

    // Delete Account
    const deleteAccount = async() =>{
        dispatch({type:"LOGOUT"})
        const res = await axios.delete(`/users?username=${user?.user?.username}`,{
            id: user?.user?._id
        },{
        headers:{
            authorization: `Bearer ${user.token}
         `}
        })
    }

  return (
    <>
<div className="flex">
    <Link className='btn' style={{
        display:"inline-block",
        padding: "0.5rem 0.25rem",
        margin:"0.5rem 0 0 0.5rem",
        backgroundColor: "white"
    }} to='/createPost'>
            Create A post
    </Link>

    <Link className='btn' style={{
        display:"inline-block",
        padding: "0.5rem 0.25rem",
        margin:"0.5rem 0 0 0.5rem",
        backgroundColor: "white"
    }} to={`/users/posts/${user?.user?.username}`}>
        See your posts
    </Link>
    </div>

    <section className="account-page grid">

            <form onSubmit={handleSubmit} className="account-settings">
            <div className="flex edit-header">
                <h1 className='edit-title flex'>
                <FaUserEdit />   Edit Your Account</h1>
                <button className="delete-btn" onClick={(e)=> deleteAccount()} >
                    Delete Your Account
                </button>
            </div>

            <h3 className='edit-section-title'>Change User Image :</h3>

            <div className="account-img flex">
            { file &&
            <img src={file ? URL.createObjectURL(file) : PF+user?.user?.userImg} alt="" />}
                
                <div className="flex">
                    <label className='flex' htmlFor="change-image">
                        <MdAddPhotoAlternate className='image-icon' />
                        <h4>Upload image</h4>
                    </label>
                    <input onChange={(e) =>setFile(e.target.files[0])} id='change-image' type="file" style={{
                        display: "none"
                    }} />
                </div>
            </div>
            
            <div className="account-informations">

                    <label htmlFor="name-input">
                    <h3 className='edit-section-title'>Change Username :</h3>
                        <input 
                        onChange={
                        (e) => setUsername(e.target.value)} 
                        value={username}
                        placeholder={user?.user?.username}  id='name-input' type="text" />
                    </label>

                    <label htmlFor="name-input">
                    <h3 className='edit-section-title'>Change Email :</h3>
                    <input onChange={
                        (e) => setEmail(e.target.value)}
                        value={email}
                    placeholder={user?.user?.email} id='name-input' type="text" />
                    </label>

                    <label htmlFor="name-input">
                    
                        <h3 className='edit-section-title'>Change Password :</h3>

                        <input onChange={
                        (e) => setPassword(e.target.value)
                    } value={password}  placeholder='Write the new password...' id='name-input' type="password" />
                    
                    </label>
            </div>
                

                <button type='submit' className="edit-account-btn">
                    Edit Account
                </button>
                {
                    success?<span style={{
                    display: "block",
                    color: "green",
                    textAlign: "center",
                    margin: "0 auto",
                    textTransform: "uppercase"
                }}>Your Accoount Has Been Edited</span>: ""
            }

            </form>          


        <SideBar />
    
    </section>
    </>
  )
}


export default AccountSettings;