require("dotenv").config;
const { API_KEY } = process.env;
const axios = require("axios");
const { Diets } = require("../db");
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}`;

async function guardarDietas(dietas) {
  return await Promise.all(
    dietas.map((dieta) => Diets.create({ name: dieta }))
  );
}

async function getDiets() {
  // return "Aqui se ven las dietas";

  const dietsBDD = await Diets.findAll();

  if (dietsBDD.length === 0) {
    const page_size = 5221;

    const { data } = await axios.get(URL, {
      params: {
        number: page_size,
      },
    });

    const arrayDietas = data.results.map((receta) => receta.diets).flat();

    const recetasUnicas = [...new Set(arrayDietas)];

    await guardarDietas(recetasUnicas);

    return recetasUnicas;
  }

  return dietsBDD.map((dieta) => dieta.name);
}

module.exports = getDiets;
