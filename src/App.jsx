import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/Accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      {/* <Accordian/>
      <RandomColor/> */}
      <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page = {'1'} limit={"10"} />
    </div>
  );
}

export default App;
