const axios = require("axios");
const { API_KEY } = process.env;

function getRecipes(name) {
  return `Aqui se ven las recetas con este name: ${name}`;
}

module.exports = getRecipes;
