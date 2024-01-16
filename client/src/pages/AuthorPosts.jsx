import React, { useState } from 'react'
import PostItem from '../components/PostItem'
import { DUMMY_POSTS } from '../data';
import '../index.css';
const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section style={{paddingLeft : "5rem"}} className="author_posts">
    {posts.length > 0 ? <div className=" author_posts-container">
      {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
        <PostItem
          key={id}
          postId      ={id}
          thumbnail={thumbnail}
          category={category}
          title={title}
          description={desc}
          authorID={authorID}
        />
      ))}
    </div>: <h2 className="center">No posts founds</h2>}
  </section>
  )
}

export default AuthorPosts