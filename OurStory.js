import React from "react";
import "../App.css";
import OurStoryImage from "../images/our_story.jpg";
  
const OurStory = () => {
  return (
    <div>
      <img src= {OurStoryImage} alt="Fit Me - Our Story"></img>
      <p>© Fit-Me Ltd. 2022</p>
    </div>
  );
};
  
export default OurStory;