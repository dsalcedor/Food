const axios = require('axios');
const {API_KEY} = process.env;

function getRecipes(req, res){
    res.send('Aqui se ven todas las recetas parecidas al nombre por query')
}

module.exports = getRecipes;