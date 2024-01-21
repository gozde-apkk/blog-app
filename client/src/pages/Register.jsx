import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css'
import { UserContext } from '../context/userContext';
const Register = () => {
 const [error, setError] = useState("");
 const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name : '',
    email : '',
    password : '',
    password2: ''
  });   
  const {setCurrentUser} = useContext(UserContext)
const registerUser = async (e) => {
  e.preventDefault();
  setError('');
  try{
    const response = await axios.post(`http://localhost:5000/api/users/register`,userData);
    const newUser = await response.data;
    setCurrentUser(newUser);
    console.log(newUser);
    if(!newUser){
      setError("Couldn't register user")
    }
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
    <section  className='register'>
      <div className="container">
        <h2>Sign Up</h2>
        <form className='form register_form' onSubmit={registerUser}>
          <p className='form_error-message'>{error}</p>
          <input type='text' placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type='text' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type='text' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <input type='text' placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an acount? <Link to="/login">Login</Link></small>
      </div>
    </section>
  )
}

export default Register
