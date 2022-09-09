import React,{useState,useContext,useEffect} from 'react';
import './CreatePost.css';
import { BsFillPlusCircleFill } from "react-icons/bs";
import axios from 'axios';
import {Context} from '../../context/Context';


const CreatePost = () => {
    const {user} = useContext(Context);

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState('');
    const [postCategories,setPostCategories] = useState({})
    const [categories,setCategories] = useState([]);
    const [username,setUsername] = useState(user?.user?.username || '')
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        let newPost = {
            title,
            desc,
            username,
            categories:[]
        }

        if(categories){
            let newPostArray = [];
            categories.forEach((category,index)=>{
                const currenVal=(postCategories[index][`${category}`]);

                if(currenVal){
                    newPostArray.push(category);
                }
            })
            newPost.categories = newPostArray;
        }

        if(file){
            let data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)

            data.append("file",file);
            
            newPost.photo = filename;

            try{
                await axios.post("/upload",data)
            } catch(err){
                console.log(err)
            }

        }

        newPost.userImg = user?.user?.userImg;
        const res= await axios.post("/posts",newPost);
        window.location.replace(`/posts/post/${res.data._id}`)
    }

    useEffect(()=>{
        const getCategories = async()=>{
            const res = await axios.get("/categories/")
            let getCategoryNames = res.data.map(item=>{
                return item.Category
            })
            setCategories(getCategoryNames);
            let postCat = res.data.map(item=>{
                let newCat = {}
                newCat[`${item.Category}`] = false;
                return newCat
            })
            setPostCategories(postCat);        
        }

        getCategories();
    },[])

  return (
    <form onSubmit={handleSubmit} className="create-post">
        {file?
        <img src={URL.createObjectURL(file)} alt="" />:''}
        <div className="create-post_form">

            <div className="flex">
                <label htmlFor="imageInput">
                    <BsFillPlusCircleFill className='img-icon' />
                    Add An Image
                </label>
                <input onChange={e=>setFile(e.target.files[0])} id="imageInput" style={{
                    display: "none"
                }} type="file" />
            </div>

            <input className='title-input' onChange={e=>setTitle(e.target.value)} value={title} placeholder='Write Your Title...' type="text" />
            <textarea onChange={e=>setDesc(e.target.value)} value={desc} className='post-input' placeholder='Write Your Post...'></textarea>
        </div>
        <div className='categories' style={{
            marginBottom:"1rem"
        }}>
            {
                categories.map((category,index)=>{
                 const currenVal=(postCategories[index][`${category}`]);
                    return <span onClick={(e)=>{
                        setPostCategories(oldVal=>{
                            let changeVal = oldVal.map(item=>{
                                if((item[`${category}`] === false) || (item[`${category}`] == true)){

                                    let newItem = {};
                                    newItem[`${category}`] = !item[`${category}`];
                                    return newItem
                                }

                                return item
                            });
                            return changeVal
                        })
                    }} className={`category-btn ${currenVal?'active-category':''}`} >{category}</span>
                })
            }
        </div>
        <button type='submit' className='publish-btn'>
            Publish
        </button>

    </form>
  )
}

export default CreatePost