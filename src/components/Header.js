import React from "react";
import "./css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <h1 className="logo">E MAX CINEMAS</h1>
        <p className="tagline">Powered by Dolby Atmos</p>
        <button className="book-now">Book now</button>
      </div>
    </header>
  );
};

export default Header;
