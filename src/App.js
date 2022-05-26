import React from "react";
import "./css/App.css"
import Rent from "./Rent";
import Landing from "./Landing";
import Property from "./Property";
import About from "./About";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import { Navbar, NavbarBrand } from "react-bootstrap";
import houseData from "./houses.json";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Route exact path="/Landing" component={Banner}></Route>
      <Route exact path="/Rent" component={Rent}></Route>
      <Route exact path="/Property" component={Property}></Route>
      <Route exact path="/About" component={About}></Route> */}

      <Rent data={houseData} />
      {/* <Banner /> */}
    </div>
  );
}

export default App;
