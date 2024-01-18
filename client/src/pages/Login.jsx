import React, { useState , useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from "../context/userContext";
import axios from 'axios'
import '../index.css'
const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email : '',
    password : '',
  });   

  const {setCurrentUser} = useContext(UserContext)
  const loginUser = async (e) => {
 
    e.preventDefault();
    setError('');
    try{
      const response = await axios.post(`http://localhost:5000/api/users/login`,userData);
      const user = await response.data;
      setCurrentUser(user);
      navigate('/');
    }catch(error){
      setError(error.response.data.message);
    }
  }
  const changeInputHandler = (e) => {
      e.preventDefault();
      setUserData(prevState => {
          return {
              ...prevState,
              [e.target.name] : e.target.value
          } 
      })
  }
  return (
    <section  className='login'>
      <div className="container">
        <h2>Sign In</h2>
        <form className='form login_form' onSubmit={loginUser}>
          {error && <p>{error} </p>}
          <input type='text' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type='text' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Don't have an acount? <Link to="/register  ">Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login
