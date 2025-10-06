import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  // useEffect(()=>{console.log(movies)})

  if (!movies) return;

  return (
    <>
      <div className="px-6">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
          <div className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hide-scroll transition-all duration-3000">
            <div className="flex">
              {
                movies?.map((movie) => (
                  <MovieCard
                  key={movie.id}
                  image={movie.poster_path}/>
                ))
              }
            </div>
          </div>
      </div>
    </>
  );
};

export default MovieList;
