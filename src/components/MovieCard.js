import React from 'react'
import { IMAGE_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
     <img alt="MovieCard" src={IMAGE_URL+posterPath}/>
    </div>
  )
}

export default MovieCard
