import React from 'react'
import AdminNavbar from '../../Components/admin/Home/Navbar/AdminNavbar'
import AdminSidebar from '../../Components/admin/Home/SideBar/AdminSidebar'
import ViewUsers from '../../Components/admin/UserList/ViewUsers'
import './AdminUserPage.css'

function AdminUserPage() {
  return (
    <div>
       <AdminNavbar />
            <div className='adminUser-main'>
                <div className='adminUser-sidebar'>
                    <AdminSidebar />
                </div>
                <div className='adminhome-graph'>
                    <ViewUsers/>
                </ div>
            </div>
    </div>
  )
}

export default AdminUserPage
