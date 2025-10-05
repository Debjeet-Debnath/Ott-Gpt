import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = async () => {
        const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming',API_OPTIONS)
        const json = await movies.json();
        const result = json.results;
        dispatch(addUpcomingMovies(result));
    }
    useEffect(() => upComingMovies(), []);
}

export default useUpcomingMovies;