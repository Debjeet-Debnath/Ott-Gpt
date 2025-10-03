import  useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import Header from "./Header";
const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <Header/>
    </>
  );
};

export default Browse;
