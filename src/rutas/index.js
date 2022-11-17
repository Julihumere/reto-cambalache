const express = require("express");
const router = express.Router();
const rutasUsuarios = require("./usuarios.js");
const rutasRepositorios = require("./repositorios.js");

//Ruta Usuarios
router.use("/usuarios", rutasUsuarios);

//Ruta repositorios
router.use("/repositorios", rutasRepositorios);

module.exports = router;
