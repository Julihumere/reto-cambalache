const express = require("express");
const router = express.Router();
const {
  getRepositorios,
  postRepositorios,
} = require("../controladores/repositorios.controlador.js");

const { validacionToken } = require("../controladores/auth.middleware.js");

//Todos los usuarios
router.get("/", getRepositorios);

// Post usuarios
router.post("/post", validacionToken, postRepositorios);

router.get("/form", (req, res) => {
  res.send(`
      <html>
        <head>
        <title>LOGIN</title>
        </head>
        <body>
          <form method="POST" action="/repositorios/post">
              Email: <input type="text" name="email" /><br />
              Password: <input type="password" name="password" /> <br />
              <input type="submit" value="Iniciar Sesion" /> 
          </form>
        </body>
      </html>
  `);
});

module.exports = router;
