import React from 'react'
import { options } from '../utils/FetchOptions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSLice';

const VideoBackground = ({movieID}) => {

  const videoTrailer = useSelector((store) => store.movie?.trailerVideo); 

  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en-US', options);
    const json = await data.json();
    console.log(json);

    const filterData = await data.json.filter((video) => video.type === "Trailer");
    const trailerKey = filterData.length ? filterData[0] : json.results[0];
    console.log(trailerKey);

    dispatch(addMovieTrailer(trailerKey));
  }
  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe 
        src={"https://www.youtube.com/embed/"+ videoTrailer?.key} 
        title="Elemental | Official Trailer" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )

}

export default VideoBackground
