import React, { useState } from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
const UserProfile = () => {
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
   <section className="profile">
    <div className="container profile_container">
      <Link to={`/myposts/sdfsdf`} className='btn'>My posts</Link>
      <div className="profile_details">
        <div className="avatar_wrapper">
          <div className="profile_avatar">
            <img src={Avatar} alt=""/>
          </div>
          <form action="" className="avatar_form">
            <input onChange={e => setAvatar(e.target.files[0  ])} type='file' name='avatar' id='avatar' accept='jpg,png,jpeg'/>
            <label htmlFor='avatar'><FaEdit/> </label>
          </form>
          <button className='profile_avatar-btn'><FaCheck/> </button>
        </div>
        <h1>Ernest Achieve</h1>

        <div style={{width: '100%', display:'flex', justifyContent: 'center'}}>
          
        <form className='form profile_form'>
          <p className='form_error-message'> This is an error message   </p>
            <input type='text' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
            <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type='password' placeholder='New password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type='password' placeholder='Confirm new password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>   
            <button type='submit' className="btn primary">Update details</button>
      
        </form>
        </div>
      </div>
    </div>
   </section>
  )
}

export default UserProfile
