import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInFrom,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
          setIsSignInForm(!isSignInFrom);
  }
  return (
    <div  >
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg' alt="logo"/>
      
        </div>
        <form className=' w-4/12 absolute  p-12  bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 '>

          <h1 className='font-bold text-3xl py-2'>{isSignInFrom?"Sign Up":"Sign In"}</h1>
          {
            isSignInFrom && 
            (
              <input type='text' placeholder='Name' className='p-4  my-4 w-full rounded-lg bg-gray-700 bg-opacity-80'/>
            )
          }
          <input type='text' placeholder='Email Address' className='p-4  my-4 w-full rounded-lg bg-gray-700 bg-opacity-80'/>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700 bg-opacity-80'/>
          <button className='p-4  my-6 w-full bg-red-700 rounded-lg'>{isSignInFrom?"Sign Up":"Sign In"}</button>
          <p p-4 className='cursor-pointer ' onClick={toggleSignInForm}>{isSignInFrom?"Already Registered? Sign In Now.":" New to Netflix? Sign Up Now"} </p>
        </form>
       
    </div>
  )
}

export default Login
