import React from "react";
import Navbar from "./components/Navbar";
import Carouselexamp from "./components/Carouselexamp";
import Card from "./components/Card";
import About from "./components/About";
import "./components/card.css";
import "./components/navbar.css";
import "./components/imageslider.css";
import "./components/About.css";




function App(){
  return(

    <div>
      <Navbar/>
      <Carouselexamp/>
      <Card/>
      <About/>
      </div>


  )
}

export default App