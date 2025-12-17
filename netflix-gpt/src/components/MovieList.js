import React from 'react'
import MovieCrad from './MovieCrad'

const MovieList = ({ title, movies }) => {

  return (
    <div>
      <div className="text-white text-2xl font-bold ml-4 my-4">{title}</div>  
      <div className="flex gap-4 overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCrad key={movie.id} posterPath={movie.poster_path} />
        ))}
        </div>
    </div>
  )
}

export default MovieList
