import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Pages/Main.js";
import Admin from "./Pages/Admin.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
