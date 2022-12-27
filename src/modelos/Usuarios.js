const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");
const Repositorios = require("./Repositorios.js");

const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    fechaDeNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lenguajeDeProgramacionFavorito: {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Usuario.belongsToMany(Repositorios, { through: "usuarios_repositorios" });
Repositorios.belongsToMany(Usuario, { through: "usuarios_repositorios" });

module.exports = Usuario;
