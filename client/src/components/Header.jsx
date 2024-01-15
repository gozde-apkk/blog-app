import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";  
import './index.css'

const Header = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to="/" className='nav_logo'>
        <img src='logo'/>
        </Link>
        <ul className="nav_menu">
          <li><Link to="/profile">Ernest Achiver</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <FaBars/>
        </ul>
        <button className="nav_toggle_btn">
      

        </button>
      </div>
    </nav>
  )
}

export default Header