import React, { useState } from 'react'
import { Link} from 'react-router-dom'; 
import {DUMMY_POSTS} from '../data'
import '../index.css'
const Dashboard = () => {

  const [posts , setPosts] = useState(DUMMY_POSTS);
  return (
    <section className='dashboard'>
      {
        posts.length ? <div className="container dashboard_container">
          {
            posts.map((post) => {
              return <article key={post.id} className='dashboard_post'>
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                    <img src={post.thumbnail}  />
                  </div>
                  <p>{post.title} </p>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${post.id}`} className='btn sm'>View Post</Link>
                  <Link to={`/posts/${post.id}/edit`} className='btn sm primary'>Edit Post</Link>
                  <Link to={`/posts/${post.id}/delete`} className='btn sm danger'>Delete Post</Link>
                </div>
              </article>
            })
          }
        </div> : <h2 className='center'>You hav no posts yet.</h2>
      }
    </section>
  )
}

export default Dashboard
