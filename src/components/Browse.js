import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useNowTrending from '../Hooks/useNowTrending';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';

import GPTSearch from './GPTSearch.js';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPTSearch=useSelector((store)=>store.gpt.showGPTSearch);

   useNowPlayingMovies();
   usePopularMovies();
   useNowTrending();
   useUpcomingMovies();
  return (
    <div>
      <Header/>
      {
        showGPTSearch ?(
          <GPTSearch/>
        ):(
          <>
           <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
    
     
      {/* 
          MainContainer
            -VideoBackground
            -Video Title
            
          Secondary Container
          -MovieList*n
          -cards*n


      
      */}
      
    </div>
  )
}

export default Browse;
