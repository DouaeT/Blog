import React,{useEffect,useState} from 'react';
import {Post} from '../../Components/index';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';




const Search = () => {
    const {searchTerm} = useParams();
    const [posts,setPosts] = useState([])
    useEffect(()=>{
      const getSearchedPosts = async() =>{
        const res = await axios.get(`/posts/?search=${searchTerm}`);
        setPosts(res.data);
      }
      getSearchedPosts();
    },[searchTerm])



  return (
    <>    
    <section className='search-page'>
      {
        posts? posts.map(post=>{
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
        }) : <>
        <h1>No match has been found</h1>
        <Link className='btn' to="/">
          Go Back to Home Page
        </Link>
        </>
      }
    </section>
    
    </>
  )
}

export default Search