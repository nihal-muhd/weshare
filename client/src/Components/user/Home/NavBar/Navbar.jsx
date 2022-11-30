import React,{useEffect} from 'react'
import { BsFillPersonFill,BsBellFill,BsSearch } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import './Navbar.css'

function Navbar() {
  const navigate=useNavigate()
  const [cookies, setCookies] = useCookies([])

  const profile=()=>{
    navigate('/profile')
  }

  useEffect(()=>{
    if(!cookies.jwt){
       
        navigate('/login')}
   
})
  return (
    <React.Fragment>
      <div   className='navmain'>
        <div className='logo'>
          <h2 className='navlogo text-center '>WeShare</h2>
        </div>
        <div className='icons'>
        <div className='nav-search'>
            <BsSearch/>
          </div>
          <div className='nav-notification'>
            <BsBellFill/>
          </div>
          <div className='nav-profile' onClick={profile}>

        <BsFillPersonFill/>
          </div>
      </div>
    </div>
   </React.Fragment >
  )
}

export default Navbar
