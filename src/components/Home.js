import React from 'react'
import Login from './Login'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Login></Login>
    <Outlet></Outlet>
    </div>
  )
}

export default Home