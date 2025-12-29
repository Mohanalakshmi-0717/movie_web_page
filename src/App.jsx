import React from "react";
import Navbar from "./components/Navbar";
import Carouselexamp from "./components/Carouselexamp";
import Card from "./components/Card";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import About from "./components/About";


function App(){
  return(

    <div>
      <Navbar/>
      <Carouselexamp/>
      <Card/>
      <About/>
      </div>

    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    //   <Route path="/Movies" element={<Card/>} />
    //   <Route path="/trending" element={ <Carouselexamp/>} />
    // </Routes>
 
    // </BrowserRouter>
  )
}

export default App