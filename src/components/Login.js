import React from 'react'


import Img from '../assets/pexels-christina-morillo-1181673.jpg'
import { Link } from 'react-router-dom'
const Login = () => {
 
   
  return (
    <div className='w-full h-screen grid grid-cols-1  sm:grid-cols-2 g-8'>
            <div className='h-[25vh]'>
                <img className='h-screen   w-full' src={Img}></img>
            </div>
            <div className='bg-gray-700 flex
            justify-center items-center'>
                <form className='bg-white w-[400px] p-5'>
                    <h2 className='text-4xl font-bold text-center py-7'>Sign in</h2>
                    <div className='flex flex-col'>
                        <label>Username</label>
                        <input className='border  bg-gray-300 p-2'  type='text' placeholder='Username'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input className='border bg-gray-300 p-2' type='password' placeholder='Password'></input>
                    </div>
                    <div className='flex justify-center'>
                    <button className=' rounded-lg text-center bg-indigo-600  my-3 py-2 px-6 hover:bg-indigo-800'>Sign in</button>
                    </div>
                   
                    <div className='flex justify-between'>
                        <p className='flex items-center gap-1'><input type='checkbox'></input> Remember me</p>
                        <p className='hover:cursor-pointer'><Link to='/signup'>Create new account</Link></p>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login