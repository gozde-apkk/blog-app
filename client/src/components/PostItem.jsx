
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { UserContext } from '../context/userContext';
const PostItem = ({title, thumbnail, description, postId, category, authorID,createdAt}) => {
  const shortDescription = description?.length > 145 ? description.substr(0, 145)+ '...' : description;
  const postTitle = title?.length > 145 ? title.substr(0, 145)+ '...' : title    ;
  const {currentUser} = useContext(UserContext);
  console.log(title, thumbnail, description, postId, category, authorID,createdAt);
  return (
    <article style={{width : "30rem", height:"30rem", background:"white"}}>
      <div style={{height:"13rem"}} className="post_thumbnail">
        <img style={{height: '100%'}} src={`http://localhost:5000/uploads/${thumbnail}`} alt={title}/>
      </div>
      <div className="post_content">
       <Link to={`/posts/${postId}`}> <h3>{postTitle}</h3></Link>
        <p>{shortDescription}</p>
        <div className="post_footer">
          <PostAuthor authorID={authorID}  createdAt={createdAt} />
          <Link className='btn category' to={`/posts/categories/${category}`}>{category} </Link>
        </div>
      </div>
    </article>
  )
}     

export default PostItem