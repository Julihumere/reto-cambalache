const Usuarios = require("../modelos/Usuarios.js");
const Repositorios = require("../modelos/Repositorios.js");
const jwt = require("jsonwebtoken");
const {
  tokenCreado,
  tokenActualizacion,
  validacionToken,
} = require("./auth.middleware.js");

//Todos los usuarios
const getUsuarios = async (req, res) => {
  const usuarios = await Usuarios.findAll({
    include: [{ model: Repositorios, through: { attribute: [] } }],
  });
  return res.status(200).json(usuarios);
};

//Post usuarios
const postUsuarios = async (req, res) => {
  const {
    nombre,
    email,
    fechaDeNacimiento,
    lenguajeDeProgramacionFavorito,
    password,
  } = req.body;

  const usuarioCreado = await Usuarios.findOrCreate({
    where: {
      nombre: nombre,
      email: email,
      fechaDeNacimiento: fechaDeNacimiento,
      lenguajeDeProgramacionFavorito: lenguajeDeProgramacionFavorito,
      password: password,
    },
  });
  return res.status(200).json({ Mensaje: "Usuario creado con exito" });
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuarios.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (!usuario) {
      return res.status(401).json({
        Mensaje: "Usuario o contaseña no validos",
      });
    }

    const token = await tokenCreado(usuario.email);

    return res.status(200).header("authorization", token).json({
      Mensaje: "Usuario autorizado",
    });
  } catch (error) {
    return { Mensaje: "Oops, algo salio mal" };
  }
};

const primeraFUncion = (req, res, next) => {
  const { token } = req.token;
  console.log(token);
  next();
};

module.exports = { getUsuarios, postUsuarios, login, primeraFUncion };
