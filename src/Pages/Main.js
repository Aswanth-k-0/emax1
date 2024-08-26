import React from "react";
import Header from "./subpages/Header";
import MovieSection from "./subpages/MovieSection";
import Footer from "./subpages/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieSection />
      <Footer />
    </div>
  ); 
}

export default App;
