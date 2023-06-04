const { Router } = require("express");
const getRecipes = require("../controllers/getRecipes");
const getRecipeById = require("../controllers/getRecipeById");
const getDiets = require("../controllers/getDiets");
const postRecipe = require("../controllers/postRecipe");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/:idRecipe", getRecipeById);

router.get("/recipes/name", getRecipes);

router.post("/recipes", postRecipe);

router.get("/diets", getDiets);

module.exports = router;
