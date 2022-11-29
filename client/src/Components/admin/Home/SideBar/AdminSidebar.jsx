import React from 'react'
import {BsHouseFill,BsPeopleFill,BsBoxArrowRight} from "react-icons/bs"
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'
import './AdminSidebar.css'

function AdminSidebar() {
  const navigate = useNavigate()
  const [cookie, setCookie, removeCookie] = useCookies([])

  const Logout=()=>{
    removeCookie('adminjwt')
    navigate('/admin/login')
  }
  return (
    <div className='adminsidebar-main rounded'>
      <div className="adminsidebar-options">
      <div className='adminsidebar-text'>    <BsHouseFill/> Home</div>
      </div>
      <div className="adminsidebar-options">
      <div className='adminsidebar-text'>  <BsPeopleFill/>  Users List</div>
      </div>
   
      <div className="adminsidebar-options">
      <div className='adminsidebar-text' onClick={Logout} >  <BsBoxArrowRight/>  Logout</div>
      </div>
    </div>
  )
}

export default AdminSidebar
