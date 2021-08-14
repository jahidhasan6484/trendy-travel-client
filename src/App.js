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
import Types from "./Components/Types/Types";
import Essential from "./Components/Essential/Essential";

function App() {
  return (
    <Router>
      <Header />
      <Slider />
      <Types />
      <Essential />
    </Router>
  );
}

export default App;
