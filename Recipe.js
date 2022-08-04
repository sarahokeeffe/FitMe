import React from "react";
import style from "./recipe.module.css";
import BannerImage from "../images/banner.jpg";


  //imformation about API passed down from the App.js
const Recipe = ({title,calories,image,ingredients}) => {
  return (
    <div className={style.recipe}>
      <img src= {BannerImage} alt="Fit Me Banner"></img>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt=""/>
    </div>
  );
};
  

export default Recipe;

