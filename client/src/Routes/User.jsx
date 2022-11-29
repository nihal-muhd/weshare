import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignupPage from '../Pages/user/SignupPage'
import LoginPage from '../Pages/user/LoginPage'
import HomePage from '../Pages/user/HomePage'

function User() {
  return (
    <div>
      <Routes>
        <Route element={<SignupPage />} path='/signup' />
      </Routes>
      <Routes>
        <Route element={<LoginPage />} path='/login' />
      </Routes>
      <Routes>
        <Route element={<HomePage />} path='/' />
      </Routes>
     
   
    </div>
  )
}

export default User
