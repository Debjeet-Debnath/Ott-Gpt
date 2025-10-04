import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => (store.movies?.nowPlayingMovies))
  if(!moviesList) return;
  return (
    <>
      <MovieList title={"Now PLaying Movies"} movies = {moviesList} />
    </>
  );
};

export default SecondaryContainer;
