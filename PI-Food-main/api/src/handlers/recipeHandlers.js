const getRecipes = require("../controllers/getRecipes");
const getRecipeById = require("../controllers/getRecipeById");
const postRecipe = require("../controllers/postRecipe");

function getRecipesHandler(req, res) {
  const { name } = req.query;

  try {
    const recipes = getRecipes(name);
    res.status(200).json(recipes);
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

async function getRecipeByIdHandler(req, res) {
  const { idRecipe } = req.params;

  const source = idRecipe === "NaN" ? "BDD" : "API";
  console.log(idRecipe);
  try {
    const recipeById = await getRecipeById(idRecipe, source);
    res.status(202).json(recipeById);
  } catch (error) {
    res.status(404).json({ error: error.message });
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
