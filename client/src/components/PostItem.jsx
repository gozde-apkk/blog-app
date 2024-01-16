
import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
const PostItem = ({title, thumbnail, description, postId, category, authorID}) => {
  const shortDescription = description.lenght > 145 ? description.substr(0, 145)+ '...' : description;
  const postTitle = title.lenght > 145 ? title    .substr(0, 145)+ '...' : title    ;

  return (
    <article style={{width : "19rem", height:"26rem"}}>
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