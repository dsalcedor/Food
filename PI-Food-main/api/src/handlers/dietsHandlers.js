const getDiets = require("../controllers/getDiets");

function getDietsHandler(req, res) {
  const diets = getDiets();
  res.send(diets);
}

module.exports = getDietsHandler;
