const { Recipe, Diets } = require("../db");

async function postRecipe(name, image, summary, healthScore, steps, diets) {
  // return "Aqui se crea una receta";
  if (!name || !image || !summary || !healthScore || !steps) {
    throw Error("Faltan datos para crear la receta");
  }

  const recetaCreada = await Recipe.create({
    name,
    image,
    summary,
    healthScore,
    steps,
  });

  const dietas = await Diets.findAll({
    where: {
      name: diets,
    },
  });

  recetaCreada.addDiets(dietas);

  console.log(recetaCreada);

  if (recetaCreada) {
    return recetaCreada;
  }

  throw Error("No se pudo crear la receta");
}

module.exports = postRecipe;
