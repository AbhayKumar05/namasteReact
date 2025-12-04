import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieID}) => {
  const videoTrailer = useSelector((store) => store.movie?.trailerVideo); 

  useMovieTrailer(movieID);

  return (
    <div className="w-screen">
      <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ videoTrailer?.key} 
        title="Elemental | Official Trailer" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )

}

export default VideoBackground
