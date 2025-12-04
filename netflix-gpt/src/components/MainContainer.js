import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {

    const movies = useSelector((store) => store.movie?.nowPlaying);
    if (movies === null) return;

    const mainMovie = movies ? movies[0] : null;

    const {original_title, overview, id} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieID={id}/>
      
    </div>
  )
}

export default MainContainer
