import React from "react";

import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchPage from "./GptSearchPage";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div>
        <div className="absolute -z-10">
          <img src={BG_URL} alt="background-image"/>
        </div>
        <GptSearchPage />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
