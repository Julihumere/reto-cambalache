const jwt = require("jsonwebtoken");
const Repositorios = require("../modelos/Repositorios.js");
const Usuarios = require("../modelos/Usuarios.js");
const { validacionToken } = require("../controladores/auth.middleware");

//Todos los Repositorios
const getRepositorios = async (req, res) => {
  const repositorios = await Repositorios.findAll({
    include: [{ model: Usuarios, through: { attribute: [] } }],
  });
  return res.status(200).json(repositorios);
};

//Post Repositorios
const postRepositorios = async (req, res, next) => {
  try {
    const { nombre, Lenguaje, fechaDeCreacion, descripcion } = req.body;

    const token = req.token;

    let validacion = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (error, data) => {
        if (error) {
          throw error;
        } else {
          return data;
        }
      }
    );

    const repositorioNuevo = await Repositorios.create({
      nombre: nombre,
      Lenguaje: Lenguaje,
      fechaDeCreacion: fechaDeCreacion,
      descripcion: descripcion,
    });

    await repositorioNuevo.addUsuarios(validacion.sub);

    return res
      .status(200)
      .json({ Mensaje: "Repositorio creado exitosamente!" });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ Mensaje: "Token expirado" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ Mensaje: "Token invalido" });
    }
  }
};

module.exports = { getRepositorios, postRepositorios };
