import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import axios from 'axios';

TimeAgo.addDefaultLocale(en);

TimeAgo.addLocale(ru);

const PostAuthor = ({authorID, createdAt}) => {
  const [author  , setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async() => {
      try{
          const response = await axios.get(`http://localhost:5000/api/users/${authorID}`);
          setAuthor(response?.data);
          console.log(response);
      }catch(err){
             console.log(err);
      }
    }
    getAuthor()
  }, [])
  return (
     <Link to={`/posts/users/${author.id}`} className='post_author'>
      <div className="post_author-avatar">
        <img src={`http://localhost:5000/uploads/${author.avatar}`} alt=""/>
   </div>
   <div className="post_author-details">
    <h5>By: {author?.name}</h5>
    <small> <ReactTimeAgo date={new Date()} locale='en-US'/>   </small>
   </div>
     </Link>
  )
}

export default PostAuthor
