const express = require("express");
const router = express.Router();
const {
  getRepositorios,
  postRepositorios,
} = require("../controladores/repositorios.js");

//Todos los usuarios
router.get("/", getRepositorios);

// Post usuarios
router.get("/post", postRepositorios);

module.exports = router;
