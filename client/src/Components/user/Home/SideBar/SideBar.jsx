import React from 'react'
import {BsHouseFill,BsChatLeftDotsFill,BsGearFill,BsPeopleFill,BsBoxArrowRight} from "react-icons/bs"
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../../redux/userSlice';
import './SideBar.css'

function SideBar() {
  const navigate = useNavigate()
  const [cookie, setCookie, removeCookie] = useCookies([])
  const dispatch=useDispatch()
  const Logout=()=>{
    removeCookie('jwt')
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className='sidebar-main rounded'>
      <div className="sidebar-options">
      <div className='sidebar-text'>    <BsHouseFill/> Home</div>
      </div>
      <div className="sidebar-options">
      <div className='sidebar-text'>  <BsPeopleFill/>  Friends</div>
      </div>
      <div className="sidebar-options">
      <div className='sidebar-text'> <BsChatLeftDotsFill/>  Message</div>
      </div>
      <div className="sidebar-options">
      <div className='sidebar-text'>   <BsGearFill/>  Settings</div>
      </div>
      <div className="sidebar-options">
      <div className='sidebar-text' onClick={Logout}>  <BsBoxArrowRight/>  Logout</div>
      </div>
    </div>
  )
}

export default SideBar
