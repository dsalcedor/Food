const getRecipes = require("../controllers/getRecipes");
const getRecipeById = require("../controllers/getRecipeById");
const postRecipe = require("../controllers/postRecipe");

async function getRecipesHandler(req, res) {
  try {
    const { name } = req.query;

    const recipes = await getRecipes(name);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(401).json({ error: error.message });
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

async function createRecipeHandler(req, res) {
  try {
    const { name, image, summary, healthScore, steps, diets } = req.body;
  
    const newRecipe = await postRecipe(name, image, summary, healthScore, steps, diets);
    res.send(200).json(newRecipe);
    
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = {
  getRecipeByIdHandler,
  getRecipesHandler,
  createRecipeHandler,
};
