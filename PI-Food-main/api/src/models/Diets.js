const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Diets", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};



// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   sequelize.define(
//     "Diets",
//     {
//       id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       }
//     },
//     { timestamps: false }
//   );
// };