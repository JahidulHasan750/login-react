import React, { useState } from 'react'
import Img from '../assets/pexels-christina-morillo-1181673.jpg'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [validEmail, setValidEmail]=useState(true);
  const [validPassword, setValidPassword]=useState(true);
  const errorHandle=(e)=>{
    e.preventDefault();
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    const confirmPassword= document.getElementById('confirmPassword').value;
    if(!email.includes("@")){

        setValidEmail(false);
    }
    else{
      setValidEmail(true);
    }
    if(password === confirmPassword){
      setValidPassword(true);
    }
    else{
      setValidPassword(false);
    }
  }
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
                        <label>Email</label>
                        <input id='email' className='border  bg-gray-300 p-2'  type='text' placeholder='Email'></input>
                        <p className={validEmail? 'hidden':'flex text-red-500'}>Valid Email required</p>
                    </div>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input id='password' className='border bg-gray-300 p-2' type='password' placeholder='Password'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label>Confirm Password</label>
                        <input id='confirmPassword' className='border bg-gray-300 p-2' type='password' placeholder='Confirm Password'></input>
                        <p className={validPassword? 'hidden':'flex text-red-600'}>Passwords must be same</p>

                    </div>
                    <div className='flex justify-center'>
                    <button onClick={errorHandle} className=' rounded-lg text-center bg-indigo-600  my-3 py-2 px-6 hover:bg-indigo-800'>Register</button>
                    </div>
                   
                    <div className='flex justify-between'>
                        <p>Already Have an account?</p>
                        <p className='hover:cursor-pointer'><Link to='/'>Login</Link></p>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Signup