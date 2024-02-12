import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle,faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black' >
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className= ' mx-2 bg-white text-black text-lg p-4 px-12  rounded-lg hover:bg-opacity-80'> <FontAwesomeIcon icon={faPlay}/>Play</button>
            <button className= ' mx-2 bg-slate-600 text-white text-lg p-4 px-12 bg-opacity-50 rounded-lg'>   <FontAwesomeIcon icon={faInfoCircle} /> More Info</button>
        </div>

      
    </div>
  )
}

export default VideoTitle
