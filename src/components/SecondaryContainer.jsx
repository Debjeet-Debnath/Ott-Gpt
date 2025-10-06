import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const TopRated = useSelector((store) => store.movies?.topRatedMovies);
  const upComing = useSelector((store) => store.movies?.upComingMovies);
  if (!moviesList || !popularMovies || !TopRated ) return;
  // console.log(moviesList)
  // console.log(popularMovies);
  // console.log(TopRated)
  // console.log(upComing)
  return (
    <>
      <div className="bg-black w-screen">
        <div className="-mt-72 pl-12 relative z-20">
          <MovieList title={"Now PLaying Movies"} movies={moviesList} />
          <MovieList title={"Top Rated Movies"} movies={TopRated} />
          <MovieList title={"Popular Movies"} movies={popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={upComing} />
          <MovieList title={"Detective Movies"} movies={moviesList} />
          <MovieList title={"Non-Genric Movies"} movies={moviesList} />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
