const getRecipes = require("../controllers/getRecipes");
const getRecipeById = require("../controllers/getRecipeById");
const postRecipe = require("../controllers/postRecipe");

function getRecipesHandler(req, res) {
  const { name } = req.query;

  if (name) {
    const recipes = getRecipes(name);
    res.send(recipes);
  } else {
    res.send("Se muestran todas las recetas");
  }
}

function getRecipeByIdHandler(req, res) {
  const { idRecipe } = req.params;
  console.log(idRecipe)
  try {
    const recipeById = getRecipeById(idRecipe);
    console.log(recipeById)
    res.status(202).json(recipeById);

  } catch (error) {
    res.status(404).json({error:error.message})
  }
}

function createRecipeHandler(req, res) {
  const { name, image, description, healthscore, steps } = req.body;

  const newRecipe = postRecipe(name, image, description, healthscore, steps);
  res.send(201).send(newRecipe);
}

module.exports = {
  getRecipeByIdHandler,
  getRecipesHandler,
  createRecipeHandler,
};
