const express = require("express");
const router = express.Router();
const {
  getUsuarios,
  postUsuarios,
  login,
} = require("../controladores/usuarios.js");

//Todos los usuarios
router.get("/", getUsuarios);

// Post usuarios
router.get("/post", postUsuarios);

//Login
router.get("/login", login);

module.exports = router;
