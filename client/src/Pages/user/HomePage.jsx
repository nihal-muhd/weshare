import React from 'react'
import MobileSideBar from '../../Components/user/Home/Mobile-Sidebar/MobileSideBar'
import Navbar from '../../Components/user/Home/NavBar/Navbar'
import Post from '../../Components/user/Home/Post/Post'
import RightBar from '../../Components/user/Home/RightBar/RightBar'
import SideBar from '../../Components/user/Home/SideBar/SideBar'

import './HomePage.css'

function HomePage() {
  return (
    <div>
      <div className='home-navbar'>
      <Navbar />
      </div>
      <div className='home-main'>
        <div className='home-sidebar'>
        <SideBar />
        </div>
        <div className='home-post'>
        <Post/>
        </div>
        <div className='home-rightbar'>
        <RightBar/>
        </div>
        <div className='home-mobileSideBar'>
        <MobileSideBar/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
