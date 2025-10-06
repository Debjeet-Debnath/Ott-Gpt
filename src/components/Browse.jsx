import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {

  const gptSearchToggle = useSelector((store) => (store.gptSearch?.gptSearchpage));

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  console.log(gptSearchToggle);
  return (
    <>
      <Header />
      {
        gptSearchToggle ? 
        <GptSearch />
        :
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      }
    </>
  );
};

export default Browse;
