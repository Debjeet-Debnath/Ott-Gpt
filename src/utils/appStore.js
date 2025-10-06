import { configureStore}  from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import languageReducer from './configSlice';
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gptSearch: gptReducer,
            languageReducer: languageReducer,
        },
    }
)


export default appStore;