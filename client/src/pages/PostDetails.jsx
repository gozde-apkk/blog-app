import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";
import PostAuthor from "../components/PostAuthor";
import "../index.css";
import { UserContext } from "../context/userContext";
import DeletePost from "./DeletePost";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [creatorID, setCreatorID] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async() =>{
      try{
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
        console.log(response);
        setCreatorID(response.data.creatorID);
      }catch(err){
        setError(err);
      }
    }
    getPost()
  },[])
  return (
    <section className="post-detail">
      {error && <p className="error">{error} </p>}
      {post && (
        <div className="container post-detail_container">
          <div className="post-detail_header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id === post?.creator && (
              <div className="post-detail_buttons">
                <Link to={`/posts/werwer/edit`} className="btn primary">
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1>{post.title} </h1>
          <div className="post-detail_thumbnail">
            <img  src={`http://localhost:5000/uploads/${post.thumbnail}`} alt="" />
          </div>
          <p dangerouslySetInnerHTML={{__html : post.description}}></p>
        </div>
      )}
    </section>
  );
};

export default PostDetails;
