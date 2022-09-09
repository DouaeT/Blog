import React,{useContext,useRef,useState} from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import {Context} from '../../context/Context';
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {Comments} from '../index';


const Post = ({
  writerName,
  postTitle,
  postImg,
  postDescription,
  postPage,
  createdAt,
  categories,
  userImg,
  id,
  out
}) => {
  // the post Id
  const {id: postID} = useParams();

  // user
  const {user} = useContext(Context);

  //post Ref
  const postRef = useRef(null);

  // images folder
  const PF = 'http://localhost:5000/images/'

  //Variables
  const [editPostMode,setEditPostMode] = useState(false);
  const [title, setTitle] = useState(postTitle);
  const [desc,setDesc] = useState(postDescription);
  const [userPostImg,setUserPostImg] = useState(userImg)


  // UseEffect
  useEffect(()=>{
    if(postID){
    const getPost = async()=>{
      const res = await axios.get(`/posts/${postID || id}`);
      setTitle(res.data.title);
      setDesc(res.data.desc)
      setUserPostImg(res.data.userImg)
    }
    getPost()
  }
  },[])

  // Methods
  const handleEditPost = async(e) =>{
    let updatedPost = {}
    if(title){
      updatedPost.title = title;
    }
    if(desc){
      updatedPost.desc = desc;
    }
    const res = await axios.put(`/posts/${postID || id}`,updatedPost);
    setEditPostMode(false);
  } 

  const handleDeletePost = async(e) =>{
    const res = await axios.delete(`/posts/${id || postID}`)
    if(postID){
      window.location.replace(`/posts`)
    }
    else{
      postRef.current.remove();
    }
  }


  return (
    <>
    <div key={id} ref={postRef} className={`post ${postPage && 'post_postPage'}`}>
    <article className="post-header flex">
      <div className="post-writer flex">
    <img src={PF + userPostImg} alt="" className="post-writer-img" />
        
        <h4 className="post-writer-name thin-txt space-letter">
          {writerName || undefined}
        </h4>
      </div>

        {
          editPostMode? <input value={title} onChange={(e)=> setTitle(e.target.value)} className='post-titleInput' type="text" placeholder='New Title....' /> :(<h1 className="post-title black bald-txt">
          {title}
        </h1>)
        }

    </article>

    <article className="post-image-overlay">
    {
          postImg &&
          <img src={PF+postImg} alt="" />
          }

    </article>


    {
      user && writerName == user?.user?.username && <div className='flex edit-icons'>
    <AiFillEdit onClick={(e)=>setEditPostMode(true)} id="editIcon" />
    <AiFillDelete onClick={handleDeletePost} id="deleteIcon" />
    </div>
    }

      {
        editPostMode? <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder='New Description...' className='post-descriptionInput' cols="30" rows="10"></textarea> :(
        <p className="bald-txt gray post-description">
      { !out? (desc?.length > 100? desc?.substr(0,100) +'...': desc) :desc
      }          
        </p>
        )
      }
    <article className="flex" style={{
      marginTop: '2rem',
      justifyContent: 'space-between'
    }}>
      
      {!postPage && <Link to={`/posts/post/${id}`}>
      <button className="btn" style={{
      padding: '1rem 2rem'
    }}>Continue Reading
    </button>
      </Link> }
    

    <div className="category-btns">
      {
        categories?.map((category,index) =>{
          return  <button key={index} className="category-btn">
            {category}
        </button>
        })
      }
    </div>
    </article>
    <span style={{
      display: 'block',
      marginTop: '20px'
    }} className="thin-txt gray">
      {new Date(createdAt)?.toDateString()}
    </span>
    {
      editPostMode && (
      <button onClick={handleEditPost} style={{
      padding: "1rem 2em",
      margin: "20px auto",
      display: 'block',
      fontSize: "var(--small-font-1)",
      backgroundColor: "green",
      color: "white"
    }} className='btn'>
      Edit Post
    </button>
      )
    }

  </div>
  {
    postID &&
    <Comments postID={postID}/>
  }
  </>
  )
}

export default Post