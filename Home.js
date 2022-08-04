import React from "react";
import "../App.css";
import LogoImage from "../images/fitme.PNG";
import HelloImage from "../images/hello.jpg";


const Home = () => {
  return (
    <div>
      <img src= {LogoImage} alt="Fit Me Logo"></img>
      <p>
      <img src= {HelloImage} alt="Fit Me Intro"></img>
        </p>
        <h2>
          We are a cut above the rest when it comes to healthy eating and are here to help you make                       
          positive changes in your lifestyle that don't feel like a chore. 
      </h2>
      <br>
      </br>
      <p>© Fit-Me Ltd. 2022</p>
    </div>
  );
};

  
export default Home;