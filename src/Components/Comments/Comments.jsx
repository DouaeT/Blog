import React,{useContext,useState,useEffect,useRef} from 'react';
import './Comments.css';
import {Context} from '../../context/Context';
import {Comment} from '../index';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';


const Comments = ({postID}) => {

    // Variables
    const {user} = useContext(Context);
    const [comments,setComments] = useState([]);

    const inputRef = useRef(null)
    const getPostComments = async() =>{
        const comments = await axios.get(`/comments?postID=${postID}`);
        setComments(comments.data);
    }
    // UseEffect
    useEffect(()=>{
        getPostComments();
    },[])

    // Methods
    const handleSubmit = async(e) =>{
        e.preventDefault();
        let Comment = {
            username : user?.user?.username,
            userImg: user?.user?.userImg || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23Ihpqh2qvEizUNzNv49lXhlMhga2cQa-cw&usqp=CAU',
            userID: user?.user?._id,
            userComment: inputRef.current.value,
            postID: postID
             }

        await axios.post("/comments",Comment);

        inputRef.current.value = '';
        getPostComments();
    }

  return (
    <div className="post-comments">
         {
            user.user? <><h2 className='comment-title'>Write A Comment:</h2>
       <form onSubmit={handleSubmit} className="write-comment ">
            <textarea ref={inputRef} placeholder='Write A comment...'   ></textarea>

            <button style={{
                padding: "0.5rem 1rem",
                backgroundColor: "black",
                color: "white",
                marginTop: "0.8rem"
            }} type='submit' className='btn'> Submit</button>
        </form> </>: <p className='bold-txt gray space-letter' style={{
            margin:"3rem 0 0 2rem"
        }}><Link className='black' style={{
            fontWeight: '800'
        }} to='/login'>
        Login In</Link> to write a comment.</p>
        }

        <h2 className='comment-title'>Comments({comments.length}):</h2>
        <div className="users-comments">
            {
                comments.map(comment=>{
                return <Comment 
                id={comment._id}
                img={comment.userImg}
                userID={comment.userID}
                username={comment.username}
                userComment={comment.userComment}
                getPostComments={getPostComments}
            />
                })
            }
            
        </div>
    </div>
  )
}

export default Comments