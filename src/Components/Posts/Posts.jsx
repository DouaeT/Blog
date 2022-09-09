import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import './Posts.css';
import {Post} from '../index';
import ReactPaginate from 'react-paginate'
import {useParams} from 'react-router-dom';
import {Loading} from '../index';


const Posts = ({out}) => {

  //Variables
  const [posts,setPosts] = useState([]);
  const [shownPosts,setShownPosts] = useState(posts.slice(0,6))
  const [loading,setLoading] = useState(true)

  // Params
  const {category,username} =useParams();

  //UseEffect
  useEffect(()=>{
    const getPosts = async() =>{
      const res = await axios.get(`/posts/${category? `?category=${category}`:''}${username? `?username=${username}`:``}`);
      setPosts(res.data);
      setShownPosts(res.data.slice(0,6));
      setLoading(false);
    }
    getPosts();
  },[category,username])


  const handlePageClick = (e) =>{
    let num =(e.selected * 6);
    setShownPosts(posts.slice(num,(num+6)));
  }

  if(loading) {
    return <Loading />
  }

  return (
    <section className={`posts ${out? 'posts-page':''}`}>

      <div className="posts-grid grid">
        {
          shownPosts.map(post =>{
            const {createdAt,desc,title,username,photo,categories,_id,userImg} = post;

            return (
            <Post 
                userImg={userImg}
                key={_id} 
                id={_id} 
                writerImg={userImg}
                writerName={username}
                postTitle={title}
                postImg={photo}
                postDescription={desc}
                createdAt={createdAt}
                categories={categories}
                out={false}
                />
              )
          })
        }
      </div>
 

  <ReactPaginate
    previousLabel={"previous"}

    nextLabel={"next"}

    breakLabel={"…"}

    pageCount={(posts.length/6)}

    onPageChange={handlePageClick}

    containerClassName={"posts-pagin flex"}

    pageClassName={"page-num btn"}
    previousClassName={"page-num btn"}
    nextClassName={"page-num btn"}
    breakClassName={"page-num btn"}
    activeClassName={"pagin-active"}

  />

    </section>
  )
}

export default Posts