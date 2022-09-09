import React,{useContext,useState} from 'react';
import './Comment.css';
import {Context} from '../../context/Context';
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import axios from 'axios';

const Comment = ({img,username,userComment,id,userID,getPostComments
}) => {

  const [newComment,setNewComment] = useState(userComment);
  const [editMode,setEditMode] = useState(false);

  const handleDelete = async() =>{
    const res = await axios.delete(`/comments/${id}`);
    getPostComments();
  }

  const handleEdit = async() =>{
    const res = await axios.put(`/comments/${id}`,{newComment});
    setEditMode(false);
  }


  const PF = 'http://localhost:5000/images/';
  const {user} = useContext(Context)

  return (
    <div className="comment">
      <div className="flex">
      <img src={PF + img} alt="" />
      {
        user?.user?.username == username && <div className="edit-comment flex">
          <AiFillEdit onClick={(e)=>setEditMode(true)} style={{
            color: "green"
          }}  />
          <AiFillDelete onClick={handleDelete} style={{
            color: "red"
          }} id="commentDelete" />
        </div>
      }
      </div>
    <h2 className='bold-txt black space-letter'>{username}</h2>
    {
      !editMode && <p className='thin-txt'>{newComment}</p>
    }
    
    {
      editMode && <>
      <textarea value={newComment} onChange={e=>setNewComment(e.target.value)} placeholder='Edit your comment...' className='editedTextearea'>
      </textarea>
      <button onClick={(e)=>handleEdit()} className='btn' style={{
        padding: '0.5rem 0.3rem',
        backgroundColor: "Green",
        color: "white",
        opacity: "0.7"
      }}>
        Edit comment
      </button>
      </>
    }

</div>
  )
}

export default Comment