import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCrad = ({ posterPath }) => {
  return (
    <div>
      <img 
        className="w-48 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        src={IMG_URL + posterPath}
        alt="Movie Poster" 
      />
    </div>
  )
}

export default MovieCrad
