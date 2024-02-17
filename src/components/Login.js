import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateFormData } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/fireBase";
import {BG_URL, USER_AVATAR} from "../utils/constants";

import { useDispatch } from 'react-redux';
import {addUser}from "../utils/userSlice";
const Login = () => {
 
  const dispatch=useDispatch();
  const[isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
    //Validate thr form data
    //console.log(email.current.value);
    //console.log(password.current.value);

  //const message=checkValidData(email.current.value,password.current.value);
   //setErrorMessage(message);
   const formData = {
    name: name.current ? name.current.value : null,
    email: email.current.value,
    password: password.current.value,
  };

  const message = validateFormData(formData, isSignInForm);
  setErrorMessage(message);
  if(message)return;

  //Sign Up/Sign In Logic
  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL:USER_AVATAR
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
         
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
       
      
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
    
   

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });

  }
  else{
    //SignIn Logic
    signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });

  }

  }
  const toggleSignInForm=()=>{
          setIsSignInForm(!isSignInForm);
  }

  return (
    <div  >
        <Header/>
        <div className='absolute'>
        <img src={BG_URL} alt="lo-go"/>
      
        </div>
        <div >
        <form  onSubmit={(e)=>e.preventDefault()}
        className=' w-4/12 absolute  p-12  bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 '>

          <h1 className='font-bold text-3xl py-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
          {
            !isSignInForm && 
            (
              <input  ref={name} type='text' placeholder='Name' className='p-4  my-4 w-full rounded-lg bg-gray-700 bg-opacity-80'/>
            )
          }
          <input ref={email} type='text' placeholder='Email Address' 
          className='p-4  my-4 w-full rounded-lg bg-gray-700 bg-opacity-80'/>
          <input ref={password} type='password' placeholder='Password' 
          className='p-4 my-4 w-full rounded-lg bg-gray-700 bg-opacity-80'/>
          <p className='text-red-600 font-bold text-lg'>{errorMessage}</p>
          <button className='p-4  my-6 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"} </button>
          <p  className='cursor-pointer ' onClick={toggleSignInForm}>{isSignInForm?" New to Netflix? Sign Up Now":"Already Registered? Sign In Now."} </p>
        </form>
        </div>

        
       
    </div>
  )
}

export default Login
