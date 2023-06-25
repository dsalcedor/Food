const axios = require("axios");
const { Op } = require("sequelize");
require("dotenv").config();
const { API_KEY } = process.env;
const { baseUrl, flag } = require("../helpers/urls");
const { Recipe, Diets } = require("../db");
const getRecipeById = require("./getRecipeById");

async function getRecipes(name) {
  if (!name) {
    //Busqueda en BDD.

    const recipesDB = await Recipe.findAll({
      include: {
        model: Diets,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const allRecipesDB = recipesDB.map((receta) => {
      const diets = receta.Diets.map((dieta) => dieta.name);
      return {
        id: receta.id,
        name: receta.name,
        image: receta.image,
        summary: receta.summary,
        healthScore: receta.healthScore,
        steps: receta.steps,
        diets,
      };
    });

    // Busqueda en la API.

    const apiKey = API_KEY;
    const number = 100;

    const { data } = await axios.get(baseUrl + flag, {
      params: {
        apiKey,
        number,
      },
    });

    const allRecipesAPI = data.results.map((receta) => {
      return {
        id: receta.id,
        name: receta.title,
        image: receta.image,
        summary: receta.summary,
        healthScore: receta.healthScore,
        steps: receta.analyzedInstructions[0]?.steps.map((paso) => paso.step),
        diets: receta.diets,
      };
    });

    return [...allRecipesDB, ...allRecipesAPI];
  } else {
    const recipesByNameDB = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Diets,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const allRecipesByNameDB = recipesByNameDB.map((receta) => {
      const diets = receta.Diets.map((dieta) => dieta.name);
      return {
        id: receta.id,
        name: receta.name,
        image: receta.image,
        summary: receta.summary,
        healthScore: receta.healthScore,
        steps: receta.steps,
        diets,
      };
    });

    //Buscar por name en la API.

    const { data } = await axios.get(baseUrl + flag, {
      params: {
        apiKey: API_KEY,
        number: 100,
      },
    });

    const allRecipesByNameAPI = data.results.map((receta) => {
      return {
        id: receta.id,
        name: receta.title,
        image: receta.image,
        summary: receta.summary,
        healthScore: receta.healthScore,
        steps: receta.analyzedInstructions[0]?.steps.map((paso) => paso.step),
        diets: receta.diets,
      };
    });

    const filteredRecipes = allRecipesByNameAPI.filter((receta) =>
      receta.name.toLowerCase().includes(name.toLowerCase())
    );

    const resultado = [...allRecipesByNameDB, ...filteredRecipes];

    if (resultado.length === 0) {
      return { message: "No se encontraron recetas con ese nombre" };
    }

    return resultado;
  }
}

module.exports = getRecipes;
