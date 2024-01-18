
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { UserContext } from '../context/userContext';
const PostItem = ({title, thumbnail, description, postId, category, authorID}) => {
  const shortDescription = description?.length > 145 ? description.substr(0, 145)+ '...' : description;
  const postTitle = title?.length > 145 ? title.substr(0, 145)+ '...' : title    ;
  const {currentUser} = useContext(UserContext  )
  return (
    <article style={{width : "83rem", height:"26rem", background:"white"}}>
      <div className="post_thumbnail">
        <img src={thumbnail} alt={title}/>
      </div>
      <div className="post_contnt">
       <Link to={`/posts/${postId}`}> <h3>{postTitle}</h3></Link>
        <p>{shortDescription}</p>
        <div className="post_footer">
          <PostAuthor/>
          <Link className='btn category' to={`/posts/categories/${category}`}>{category} </Link>
        </div>
      </div>
    </article>
  )
}     

export default PostItem