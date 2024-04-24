import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Home = () =>{
  return (
    <div>
      <div>
        <Header />
       <Outlet />
    </div>
        <h1 className='welcome'>Welcome to My Todo App</h1>
        <Footer/>
    </div>
  )
}

export default Home