import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/FetchOptions";
import { addMovieTrailer } from "../utils/movieSLice";


const useMovieTrailer = (movieID) => {
    // Hook logic to fetch and return movie trailer based on movieID    
      const dispatch = useDispatch();
    
      const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieID + "/videos?language=en-US", options);
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
}

export default useMovieTrailer;