import React, { useContext, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { FaBars } from "react-icons/fa";  
import {AiOutlineClose} from "react-icons/ai"
import './index.css'
import { UserContext } from '../context/userContext';
import axios from 'axios'
import logo from '../images/logo.png'

const Header = () => {
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth)
  const navigate = useNavigate();
  const[error, setError] = ("")
  const closeNavHandler = () => {
    if(window.innerWidth <800){
      setIsNavShowing(false);
    }else {
      setIsNavShowing(true)
    }
  }

  const logoutUser = async (e) => {

    e.preventDefault()
    try{
      setCurrentUser(null);
     navigate("/login")
     

    }catch(error){
      console.log(error)
    }
  }
  return (
    <nav>
      <div className='container nav_container'>
        <Link onClick={closeNavHandler}    to="/" className='nav_logo'>
        <img src={logo}/>
        </Link>
       {currentUser?.id && isNavShowing && <ul className="nav_menu">
          <li><Link onClick={closeNavHandler} to="/profile ">Ernest Achiver</Link></li>
          <li><Link onClick={closeNavHandler} to="/create">Create Post</Link></li>
          <li><Link onClick={closeNavHandler} to="/authors">Authors</Link></li>
          <li><Link onClick={logoutUser} to="/">Logout</Link></li>
        </ul>}
        {!currentUser?.id && isNavShowing && <ul className="nav_menu">
          <li><Link onClick={closeNavHandler} to="/authors">Authors</Link></li>
          <li><Link onClick={closeNavHandler} to="/login">Login</Link></li>
        </ul>}
        <button  onClick={() => setIsNavShowing(!isNavShowing)}className="nav_toggle_btn">
      
    {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
        </button>
      </div>
    </nav>
  )
}

export default Header