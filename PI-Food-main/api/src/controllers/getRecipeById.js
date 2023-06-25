const axios = require("axios");
const { Recipe, Diets } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;
const { baseUrlID } = require("../helpers/urls");

async function getRecipeById(id, source) {
  // return `Aqui se ve el detalle de la receta con id: ${id}`;

  if (source === "API") {
    const recipe = (
      await axios.get(`${baseUrlID}${id}/information?apiKey=${API_KEY}`)
    ).data;

    return {
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      steps: recipe.analyzedInstructions[0]?.steps.map((paso) => paso.step),
      diets: recipe.diets,
    };
  } else {
    console.log(id)
    const recipeByIdDB = await Recipe.findByPk(id, {
      include: {
        model: Diets,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    console.log('RECETA',recipeByIdDB)

    const diets = recipeByIdDB.Diets.map((dieta) => dieta.name);
    console.log('DIETAS',diets)
    return {
      id: recipeByIdDB.id,
      name: recipeByIdDB.name,
      image: recipeByIdDB.image,
      summary: recipeByIdDB.summary,
      healthScore: recipeByIdDB.healthScore,
      steps: recipeByIdDB.steps,
      diets,
    };
  }
}

module.exports = getRecipeById;
