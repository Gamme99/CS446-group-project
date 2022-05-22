import "./App.css";
import Rent from "./Rent";
import Landing from "./Landing";
import Property from "./Property";
import About from "./About";
import Navigation from "./Navigation";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" element={Landing} />
      <Route path="/Rent" element={Rent} />
      <Route path="/Property" element={Property} />
      <Route path="/About" element={About} />

      {/* <Landing />
      <Rent />
      <Property />
      <About /> */}
    </div>
  );
}

export default App;
