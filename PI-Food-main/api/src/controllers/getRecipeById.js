const axios = require("axios");
const { API_KEY } = process.env;

function getRecipeById(id) {
  // return `Aqui se ve el detalle de la receta con id: ${id}`;
  const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

  axios(URL)
    .then((response) => {
      const { id, title, image, summary} = response.data;
      console.log(id, title, image, summary)
      const recipe = { id, name: title, image, summary };
      if(recipe) recipe
      else 'No se encontro la receta'
    })
    .catch((error) => {
      return "Error en la request";
    });
}

module.exports = getRecipeById;
