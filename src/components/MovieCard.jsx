import React, { useEffect } from "react";

const MovieCard = ({ image, movieTitle, overview }) => {
  return (
    <>
      <div>
        <div className="bg-black w-66 h-66">
          <img
            className="w-56 h-56 p-3"
            src={"https://image.tmdb.org/t/p/original" + image}
            alt="movieImage"
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
