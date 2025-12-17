import React from 'react'
import MovieCrad from './MovieCrad'

const MovieList = () => {

  return (
    <div>
      <div className="text-white text-2xl font-bold ml-4 my-4">Now Playing</div>  
      <div className="flex gap-4 overflow-x-scroll">
        <MovieCrad />
        <MovieCrad />
        </div>
    </div>
  )
}

export default MovieList
