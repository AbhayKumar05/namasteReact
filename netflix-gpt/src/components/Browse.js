import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <GptSearch />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
