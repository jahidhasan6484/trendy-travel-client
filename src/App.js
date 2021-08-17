import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Types from "./Components/Types/Types";
import Essential from "./Components/Essential/Essential";
import Sponsors from "./Components/Sponsors/Sponsors";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import Guide from "./Components/Guide/Guide";
import Tips from "./Components/Tips/Tips";
import Map from "./Components/Map/Map";

function App() {
  return (
    <Router>
      <Header />
      <Slider />
      <Types />
      <Essential />
      <Destinations />
      <Guide />
      <Tips />
      <Map />
      <Sponsors />
      <Footer />
    </Router>
  );
}

export default App;
