import React from 'react'
import VideoBackground from './VideoBackground';
import MainContainer from './MainContainer';

const VideTitle = ({title, overview}) => {
  return (
    <div className="pt-[25%] px-24 w-screen aspect-video absolute top-0 left-0 bg-gradient-to-r from-black via-transparent to-transparent">
      <h1 className="text-5xl absolute text-white font-bold mb-6">{title}</h1>
      <p className="text-lg max-w-2xl">{overview}</p>
      <div className="mt-8">
        <button className="bg-gray-700 text-white px-6 py-3 rounded mr-4transition">Play</button>
        <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition">More Info</button>
      </div>
      
    </div>
  )
}

export default VideTitle
