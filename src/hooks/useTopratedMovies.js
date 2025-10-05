import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
 const dispatch = useDispatch();
  const addTopRated = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        dispatch(addTopRatedMovies(res.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(addTopRated, []);
}


export default useTopratedMovies;