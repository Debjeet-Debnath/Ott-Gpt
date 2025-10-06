import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/upcoming'", API_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        dispatch(addUpcomingMovies(res.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(upComingMovies, []);
};

export default useUpcomingMovies;
