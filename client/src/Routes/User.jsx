import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from '../Pages/user/SignupPage'
import LoginPage from '../Pages/user/LoginPage'

function User() {
  return (
    <div>
      <Routes>
        <Route element={<SignupPage />} path='/signup' />
      </Routes>
      <Routes>
        <Route element={<LoginPage />} path='/login' />
      </Routes>
    </div>
  )
}

export default User
