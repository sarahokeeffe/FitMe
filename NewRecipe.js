import React,{useEffect, useState} from "react";
import Recipe from '../components/Recipe';
import "../App.css";
import RecipeImage from "../images/recipe_book.jpg";



const NewRecipe = () => {
  const APP_ID = "ed7f1e1c";
  const APP_KEY = "c8c6014f31ce2881a0bb902441eff4b2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
      e.preventDefault();
      setQuery(search)
      setSearch('');
  }

  return (
    <div className="App">
      <img src= {RecipeImage} alt="Fit Me - Recipe Book"></img>
      <h2>Don't fancy creating new recipes?  No problem! </h2>
      <h2>Have a look below at our ready to use, hassle free recipes.</h2>
      <h2>Just type any word to get the search going!</h2>
      <form onSubmit={getSearch} className="search-form">
        <input 
        className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=> 
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
          />
      )}
      </div>
      <p>© Fit-Me Ltd. 2022</p>
    </div>
  );
};

     
  
export default NewRecipe;