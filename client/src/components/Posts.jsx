import React, { useState } from "react";

import PostItem from "./PostItem";
import './index.css'
import {DUMMY_POSTS} from '../data.js';
const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
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
