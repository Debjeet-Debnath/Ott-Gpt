import React from "react";
import { IMG_CDN } from "../utils/constants";
const MovieCard = ({ image }) => {
  if (!image) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN + image} />
    </div>
  );
};

export default MovieCard;
