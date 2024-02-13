import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useNowTrending from '../Hooks/useNowTrending';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';

const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useNowTrending();
   useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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
