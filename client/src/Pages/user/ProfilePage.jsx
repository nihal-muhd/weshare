import React from 'react'
import Navbar from '../../Components/user/Home/NavBar/Navbar'
import SideBar from '../../Components/user/Home/SideBar/SideBar'
import Info from '../../Components/user/Profile/Info'
import Profile from '../../Components/user/Profile/Profile'


import './ProfilePage.css'


function ProfilePage() {
  return (
    <div>
     <Navbar/>
     <div className='profile-main'>
        <div className='profile-sidebar'>
            <SideBar/>
        </div>
        <div className='profile-post rounded'>
        <Profile/>
        </div>
        <div className='profile-rightbar'>
        <Info/>
        </div>
     </div>
    </div>
  )
}

export default ProfilePage
