import React, { useState, useEffect } from 'react'
import PostItem from '../components/PostItem'
import { DUMMY_POSTS } from '../data';
import '../index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [isLoading, setIsLoading] = useState(false);
 const {id} = useParams()
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try{
        const response = await axios.get(`http://localhost:5000/api/posts/users/${id}`);
        setPosts(response?.data)
        console.log(response.data);
      }catch(err){
        console.log(err);   
      }
    }
    fetchPost();
  },[id])


  return (
    <section style={{paddingLeft : "5rem"}} className="posts">
      {posts.length > 0 ? <div className="posts_container ">
        {posts.map(({ _id : id, thumbnail, category, title, description, creator , createdAt}) => (
          <PostItem
            key={id}
            postId={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={description}
            authorID={creator}
            createdAt={createdAt}
          />
        ))}
      </div>: <h2 className="center">No posts founds</h2>}
    </section>
  );
}

export default AuthorPosts