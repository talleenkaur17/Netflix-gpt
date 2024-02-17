import React,{useEffect} from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store=>store.user));
  const showGPTSearch=useSelector((store)=>store.gpt.showGPTSearch);
  
  const handleSignOut=()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      navigate("/error");
    });
    
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
       
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
       
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
        

      }
    });
    
    return ()=>unsubscribe();
    
  },[]);
  const handleGPTSearchClick=()=>{
    dispatch(toggleGPTSearchView());
  }
  const handleLanguageChange=(e)=>{
dispatch(changeLanguage(e.target.value));
  }
  return (
     <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between z-10 '>
      <img className='w-44'src={LOGO} alt="logo"/>
      {user && (
  <div className='flex  p-2'>
    {showGPTSearch &&
    <select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((lan)=>(
        <option key={lan.identifier} value={lan.identifier}>
          {lan.name}
        </option>

      ))}
    </select>
}
    <button   onClick={ handleGPTSearchClick} className='py-2 px-2 mx-4 my-2 bg-purple-800 text-white rounded-lg'>
      
      {showGPTSearch?"HomePage":"GPT Search"}
    </button>
    <img className="w-12 h-12" alt="userIcon" src={user?.photoURL} />
    <button onClick={handleSignOut} className='font-bold text-white p-1'>(Sign Out)</button>
  </div>
)}
  
 
    </div>
  
  )  
}

export default Header