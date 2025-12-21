import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
        <input type="text" placeholder="Search for movies using GPT..." className="w-full p-2 border border-gray-300 rounded-md"/>
        <button className="mt-2 p-2 bg-blue-500 text-white rounded-md">Search</button>     
    </div>
  )
}

export default GptSearchBar
