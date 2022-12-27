require("dotenv").config();
const server = require("./app");
const sequelize = require("./db.js");

require("./modelos/Usuarios.js");
require("./modelos/Repositorios.js");

async function Main() {
  try {
    await sequelize.sync({ force: false }).then(
      server.listen(3000, () => {
        console.log("El servido esta funcionando en el puerto 3000");
      })
    );
  } catch (error) {
    console.log(error);
  }
}

Main();
