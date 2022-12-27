const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const Repositorios = sequelize.define(
  "repositorios",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lenguaje: {
      type: DataTypes.ENUM(
        "Python",
        "Javascript",
        "Java",
        "PHP",
        "C#",
        "C",
        "C++",
        "Otro"
      ),
      allowNull: true,
    },
    fechaDeCreacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = Repositorios;
