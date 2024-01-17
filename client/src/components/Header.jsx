import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";  
import {AiOutlineClose} from "react-icons/ai"
import './index.css'

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth)
  const closeNavHandler = () => {
    if(window.innerWidth <800){
      setIsNavShowing(false);
    }else {
      setIsNavShowing(true)
    }
  }
  return (
    <nav>
      <div className='container nav_container'>
        <Link onClick={closeNavHandler}    to="/" className='nav_logo'>
        <img src='logo'/>
        </Link>
       { isNavShowing && <ul className="nav_menu">
          <li><Link onClick={closeNavHandler} to="/ ">Ernest Achiver</Link></li>
          <li><Link onClick={closeNavHandler} to="/create">Create Post</Link></li>
          <li><Link onClick={closeNavHandler} to="/authors">Authors</Link></li>
          <li><Link onClick={closeNavHandler} to="/logout">Logout</Link></li>
          <FaBars/>
        </ul>}
        <button  onClick={() => setIsNavShowing(!isNavShowing)}className="nav_toggle_btn">
      
    {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
        </button>
      </div>
    </nav>
  )
}

export default Header