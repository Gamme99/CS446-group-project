import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";

import NavBar from "./NavBar";
import Rent from "./pages/Rent";
import Landing from "./pages/Landing";
import Property from "./pages/Property";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/listings" element={<Rent />}></Route>
          <Route path="/property/:id" element={<Property />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
