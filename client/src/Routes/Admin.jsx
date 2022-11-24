import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLoginPage from '../Pages/admin/AdminLoginPage'

function Admin() {
  return (
    <div>
       <Routes>
        <Route element={<AdminLoginPage />} path='/login' />
      </Routes>
    </div>
  )
}

export default Admin
