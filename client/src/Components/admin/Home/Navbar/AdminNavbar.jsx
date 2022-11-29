import React,{useEffect} from 'react'
import { BsFillPersonFill,BsBellFill,BsSearch } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import './AdminNavbar.css'

function AdminNavbar() {
  const navigate=useNavigate()
  const [cookies, setCookies] = useCookies([])

  useEffect(()=>{
    if(!cookies.adminjwt){
        navigate('/admin/login')} 
})

  return (
    <React.Fragment>
    <div   className='admin-navmain'>
      <div className='admin-logo'>
        <h2 className='admin-navlogo text-center '>WeShare ADMIN PANEL</h2>
      </div>
      <div className='admin-icons'>
      <div className='admin-nav-search'>
          <BsSearch/>
        </div>
        <div className='admin-nav-notification'>
          <BsBellFill/>
        </div>
        <div className='admin-nav-profile'>

      <BsFillPersonFill/>
        </div>
    </div>
  </div>
 </React.Fragment >
  )
}

export default AdminNavbar
