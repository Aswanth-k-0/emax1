import React from "react";
import "./css/MovieSection.css";
import Nowshow from "./Nowshow.js";
import Upcoming from "./Upcoming.js";

const MovieSection = () => {
  return (
    <div className="movie-section">
      <h2>Now showing</h2>
      <div className="movie">
        <Nowshow/>
      </div>
      <h2>Upcoming releases</h2>
      <div className="movie">
        <Upcoming/>
      </div>
    </div>
  );
};

export default MovieSection;
