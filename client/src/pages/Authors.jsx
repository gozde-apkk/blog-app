import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../index.css'
import axios from "axios";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
   const getAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/authors");
      setAuthors(response?.data);
    } catch (error) {
      console.log(error);
    }
   }
   getAuthors();
  },[])
  return (
    <section style={{paddingLeft: '9rem', paddingBlockStart:'2rem'}} className="authors">
      {authors.length > 0 ? (
        <div className="container authors_container">
          {authors.map(({ _id : id, name, avatar, posts }) => (
            <Link key={id} to={`/posts/users/${id}`}>
              <div className="author_avatar">
                <img src={`http://localhost:5000/uploads/${avatar}`} alt={`Image of ${name}`} />
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
