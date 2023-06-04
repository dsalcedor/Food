const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Recipe", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    healthScore: {
      type: DataTypes.INTEGER,
    },

    steps: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};

////////////////////////////////////////////////////////////

// const { DataTypes } = require("sequelize");
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define(
//     "Recipe",
//     {
//       id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       image: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       //resumen
//       summary: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       //puntos saludables
//       healthScore: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       //paso a paso
//       steps: {
//         type: DataTypes.ARRAY(DataTypes.JSON),
//         allowNull: false, 
//       },
//     },
//     { timestapms: false }
//   );
// };