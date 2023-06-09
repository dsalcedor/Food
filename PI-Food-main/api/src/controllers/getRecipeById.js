const axios = require("axios");
const Recipe = require("../models/Recipe");
require("dotenv").config();
const { API_KEY } = process.env;

async function getRecipeById(id, source) {
  // return `Aqui se ve el detalle de la receta con id: ${id}`;
  const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`;

  if(source === 'API'){
    const recipe = (await axios.get(URL)).data;
  
    return {
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      summary:recipe.summary
    };
  }

  return await Recipe.findByPk(id);
}

module.exports = getRecipeById;
