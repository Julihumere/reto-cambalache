const express = require("express");
const router = express.Router();
const {
  getUsuarios,
  postUsuarios,
  login,
} = require("../controladores/usuarios.controlador.js");

//Todos los usuarios
router.get("/", getUsuarios);

// Post usuarios
router.post("/post", postUsuarios);

//Login
router.post("/login", login);

router.get("/form", (req, res) => {
  res.send(`
      <html>
        <head>
        <title>LOGIN</title>
        </head>
        <body>
          <form method="POST" action="/usuarios/login">
              Email: <input type="text" name="email" /><br />
              Password: <input type="password" name="password" /> <br />
              <input type="submit" value="Iniciar Sesion" /> 
          </form>
        </body>
      </html>
  `);
});

module.exports = router;
