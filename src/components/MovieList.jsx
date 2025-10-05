import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  // useEffect(()=>{console.log(movies)})

  // if (!movies) return;

  return (
    <>
      <h1>{title}</h1>
      <div className="flex">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            image={movie.poster_path}
            movieTitle={movie.title}
            overview={movie.overview}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
