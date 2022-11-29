import React from 'react'
import AdminGraph from '../../Components/admin/Home/HomeGraph/AdminGraph'
import AdminNavbar from '../../Components/admin/Home/Navbar/AdminNavbar'
import AdminSidebar from '../../Components/admin/Home/SideBar/AdminSidebar'
import './AdminHomePage.css'


function AdminHomePage() {
    return (
        <div>
            <AdminNavbar />
            <div className='adminhome-main'>
                <div className='adminhome-sidebar'>
                    <AdminSidebar />
                </div>
                <div className='adminhome-graph'>
                    <AdminGraph />
                </ div>
            </div>
        </div>
    )
}

export default AdminHomePage
