import React, { useEffect, useState } from "react";

import PostItem from "./PostItem";
import './index.css'
import {DUMMY_POSTS} from '../data.js';
import axios from  'axios';
const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try{
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response?.data)
      }catch(err){
        console.log(err);   
      }
    }
    fetchPost();
  },[])


  return (
    <section style={{paddingLeft : "5rem"}} className="posts">
      {posts.length > 0 ? <div className="posts_container ">
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
  );
};

export default Posts;
