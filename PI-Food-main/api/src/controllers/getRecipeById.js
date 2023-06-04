const axios = require("axios");
const { API_KEY } = process.env;

function getRecipeById(id) {
  return `Aqui se ve el detalle de la receta con id: ${id}`;
}

module.exports = getRecipeById;
