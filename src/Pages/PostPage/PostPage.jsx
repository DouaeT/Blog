import React,{useState,useEffect,useContext} from 'react';
import './PostPage.css';
import {Post} from '../../Components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Context} from '../../context/Context';

const PostPage = () => {
  
  const {dispatch} = useContext(Context)
  const [post,setPost] = useState([]);
  const {id} = useParams();
  
  useEffect(()=>{
    const getPosts = async() =>{
      const res = await axios.get(`/posts/?id=${id}`);
      setPost(res.data[0]);
    }
    getPosts();
  },[id]);

  const {
    username,
    title,
    photo,
    desc,
    createdAt,
    categories
  } = post;


  return (
    <section className="post-page">
      <Post 
        writerName={username}
        postTitle={title}
        postImg={photo}
        postDescription={desc}
        categories={categories}
        createdAt={createdAt}
        postPage={true}
        writerImg={"image"}
      />
    </section>

  )
}

export default PostPage