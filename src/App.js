import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <Router>
      <Header />
      <Slider />
    </Router>
  );
}

export default App;
