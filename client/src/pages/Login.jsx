import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
const Login = () => {

  const [userData, setUserData] = useState({
    email : '',
    password : '',
  });   

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
        <form className='form login_form'>
          <p>This is an error message</p>
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
