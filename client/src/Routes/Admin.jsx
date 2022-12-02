import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminHomePage from '../Pages/admin/AdminHomePage'
import AdminLoginPage from '../Pages/admin/AdminLoginPage'
import AdminUserPage from '../Pages/admin/AdminUserPage'


function Admin() {
  return (
    <div>
       <Routes>
        <Route element={<AdminLoginPage />} path='/login' />
      </Routes>
      <Routes>
        <Route element={<AdminHomePage />} path='/' />
      </Routes>
      <Routes>
        <Route element={<AdminUserPage />} path='/user-list' />
      </Routes>
    </div>
  )
}

export default Admin
