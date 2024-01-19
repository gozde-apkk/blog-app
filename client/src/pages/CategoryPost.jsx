import React, { useEffect, useState } from 'react'
import PostItem from '../components/PostItem';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {category} = useParams()
  useEffect(() => {
    const fetchPost = async () => {
      try{
        const response = await axios.get(`http://localhost:5000/api/posts/categories/${category}`);
        setPosts(response?.data)
        console.log(response.data);
      }catch(err){
        console.log(err);   
      }
    }
    fetchPost();
  },[category])


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
};

export default CategoryPosts
