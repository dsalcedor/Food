const { Router } = require("express");
const {
  getRecipesHandler,
  getRecipeByIdHandler,
  createRecipeHandler,
} = require("../handlers/recipeHandlers");
const getDietsHandler = require("../handlers/dietsHandlers");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/:idRecipe", getRecipeByIdHandler);

router.get("/recipes", getRecipesHandler);

router.post("/recipes", createRecipeHandler);

router.get("/diets", getDietsHandler);

module.exports = router;
