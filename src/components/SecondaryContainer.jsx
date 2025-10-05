import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!moviesList) return;
  return (
    <>
      <div className="bg-black w-screen">
        <div className="-mt-72 pl-12 relative z-20">
          <MovieList title={"Now PLaying Movies"} movies={moviesList} />
          <MovieList title={"Trending Movies"} movies={moviesList} />
          <MovieList title={"Mystery Movies"} movies={moviesList} />
          <MovieList title={"Horror Movies"} movies={moviesList} />
          <MovieList title={"Detective Movies"} movies={moviesList} />
          <MovieList title={"Non-Genric Movies"} movies={moviesList} />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
