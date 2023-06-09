const axios = require("axios");
const { API_KEY } = process.env;
const Recipe = require("../models/Recipe");
const getRecipeById = require("./getRecipeById");

async function getRecipes(name) {
  // return `Aqui se ven las recetas con este name: ${name}`;
  const URL = `https://api.spoonacular.com/recipes/autocomplete?apiKey=${API_KEY}&number=25&query=${name}`;

  let completeRecipes = [];
  

  const recipesByName = (await axios.get(URL)).data;

  recipesByName.map((recipe) =>
    completeRecipes.push(getRecipeById(recipe.id, "API"))
  );

  return completeRecipes
}

module.exports = getRecipes;
