import React, { useState } from "react";

import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar5 from "../images/avatar5.jpg";
import Avatar4 from "../images/avatar4.jpg";
import { Link } from "react-router-dom";
import '../index.css'
const authorData = [
  {
    id: 1,
    name: "Ernest Achiever",
    avatar: Avatar1,
    posts: 3,
  },
  {
    id: 2,
    name: "Dramani Mahama",
    avatar: Avatar2,
    posts: 0,
  },
  {
    id: 3,
    name: "Jane Doe",
    avatar: Avatar5,
    posts: 4,
  },
  {
    id: 4,
    name: "Nana Addo",
    avatar: Avatar3,
    posts: 4,
  },
  {
    id: 5,
    name: "Hajia Bintu",
    avatar: Avatar4,
    posts: 1,
  },
];
const Authors = () => {
  const [authors, setAuthors] = useState(authorData);
  return (
    <section style={{paddingLeft: '9rem', paddingBlockStart:'2rem'}} className="authors">
      {authors.length > 0 ? (
        <div className="container authors_container">
          {authors.map(({ id, name, avatar, posts }) => (
            <Link key={id} to={`/posts/users/${id}`}>
              <div className="author_avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author_info">
                <h5>{name}</h5>
                <p>{posts} posts</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2>No users authors found </h2>
      )}
    </section>
  );
};

export default Authors;
