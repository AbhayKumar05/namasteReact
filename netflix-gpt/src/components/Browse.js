import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const gptSearch = useSelector((store) => store.gpt.isSearchView);
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {gptSearch ? 
      <GptSearch />
      : 
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
      }
    </div>
  )
}

export default Browse
