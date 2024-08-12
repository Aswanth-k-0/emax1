import React from "react";
import "./css/MovieSection.css";

const MovieSection = () => {
  return (
    <div className="movie-section">
      <h2>Now showing</h2>
      <div className="movie">
        <img alt="Oppenheimer" />
        <button>Book now</button>
      </div>
      <h2>Upcoming releases</h2>
      <div className="movie">
        <img  alt="Brave" />
        <button>Pre-Book</button>
      </div>
    </div>
  );
};

export default MovieSection;
