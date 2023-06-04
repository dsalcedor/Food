const axios = require('axios');
const { get } = require('../routes');
const {API_KEY} = process.env;

function getRecipeById(req, res){
    res.send('Aqui se ve una receta por id')
}

module.exports = getRecipeById;