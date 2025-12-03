import React from 'react'
import { useSelector } from 'react-redux';


const MainContainer = () => {

    const movies = useSelector((store) => store.movie?.nowPlaying);

  return (
    <div>
      
    </div>
  )
}

export default MainContainer
