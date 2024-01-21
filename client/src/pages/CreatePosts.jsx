import React, { useContext, useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [error, setError] = useState("");
   const {currentUser} = useContext(UserContext)
   const token = currentUser?.token;
  const navigate = useNavigate();
   useEffect(() => {
     if(!token) {
       navigate('/login')
     }
   },[])

  const modules = {
    toolbar : [
      [{ "header": [1, 2,3,4,5,6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list' : 'ordered'}, {'list' : 'bullet'}, {'indent' : '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline' , 'strike', 'blockquote',
    'list', 'bullet','indent',
    'link','image'
  ]
  const POST_CATEGORIES =["Agricultere", "Business", "Education", "Enterainment", "Art", "Investment","Uncategorized", "Weather"]

  const createPost = async (e) => {
    e.preventDefault();
    const postData =
     new FormData();
    postData.append('title', title);
    postData.set('category', category);
    postData.set('description', description);
    postData.set('thumbnail', thumbnail);
    try{
      const response = await axios.post(`http://localhost:5000/api/posts`, postData, 
      {withCredentials : true, headers : {Authorization: `Bearer ${token}`}})
      console.log(postData);
      if(response.status === 201){

        navigate('/');
      }
    }catch(err){
      setError(err.response.data.message)
    }
  }
  return (
     <div style={{height : '100vh'}} className="create-post">
      <div className="container">
        <h6>Create Post</h6>
      {error &&  <p className='form_error-message'>{error}</p>}
        <form className="form create-post_form" onSubmit={createPost}>
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
          <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
            {POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <ReactQuill modules={modules} value={description} onChange={setDescription} formats={formats}/> 
            <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
            <button type='submit' className='btn primary' >Create</button>    
        </form>
      </div>
     </div>
  )
}

export default CreatePost
