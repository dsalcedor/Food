const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch?'


// Aca guardo la URL de las recetas por ID,necesito pasar el id que viene por params y anexarle al final de la ruta  '/information'
const baseUrlID = 'https://api.spoonacular.com/recipes/';

// Aca pongo la bandera que me permite que me devuelva informacion adicional de la receta
const flag = 'addRecipeInformation=true';

module.exports = {
    baseUrl,
    baseUrlID,
    flag,
}