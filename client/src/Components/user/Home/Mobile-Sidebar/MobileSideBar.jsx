import React from 'react'
import { BsHouseFill, BsChatLeftDotsFill, BsGearFill, BsPeopleFill, BsBoxArrowRight } from "react-icons/bs"
import './MobileSideBar.css'

function MobileSideBar() {
    return (
        <div>
            <div className='mobileSideBar-main rounded'>
                <div className="mobileSideBar-options">
                    <div className='mobileSideBar-text'>    <BsHouseFill /> </div>
                </div>
                <div className="mobileSideBar-options">
                    <div className='mobileSideBar-text'>  <BsPeopleFill />  </div>
                </div>
                <div className="mobileSideBar-options">
                    <div className='mobileSideBar-text'> <BsChatLeftDotsFill />  </div>
                </div>
                <div className="mobileSideBar-options">
                    <div className='mobileSideBar-text'>   <BsGearFill />  </div>
                </div>
                <div className="mobileSideBar-options">
                    <div className='mobileSideBar-text' >  <BsBoxArrowRight />  </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSideBar
