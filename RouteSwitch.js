import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import NavBar from "./components/NavBar";
import Wellness from "./components/Wellness";
import Home from "./components/Home";
import NewRecipe from "./components/NewRecipe";
import ContactUs from "./components/ContactUs";
import Recipe from "./components/Recipe";
import OurStory from "./components/OurStory";


const RouteSwitch = () => {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewRecipe" element={<NewRecipe />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Wellness" element={<Wellness />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  };

  
  export default RouteSwitch;