import React, { useState } from "react";
import Thumbnail1 from "../images/blog10.jpg";
import Thumbnail2 from "../images/blog11.jpg";
import Thumbnail3 from "../images/blog12.jpg";
import Thumbnail4 from "../images/blog14.jpg";
import PostItem from "./PostItem";
import './index.css'
const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "Lorem ipsum dolor sit amet",
    desc: "",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "Lorem ipsum dolor sit amet",
    desc: "",
    authorID: 4,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "education",
    title: "Lorem ipsum dolor sit amet",
    desc: "",
    authorID: 7,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "education",
    title: "Lorem ipsum dolor sit amet",
    desc: "",
    authorID: 14,
  },
];
const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section style={{paddingLeft : "5rem"}} className="posts">
      <div className="posts_container ">
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
      </div>
    </section>
  );
};

export default Posts;
