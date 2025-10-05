import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const addPopularM = () => {
    fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        dispatch(addPopularMovies(res.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(addPopularM, []);
};


export default usePopularMovies;