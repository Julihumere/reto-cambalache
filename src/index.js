const express = require("express");
const app = express();
const routes = require("./rutas/index");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(routes);

app.listen(3000, () => {
  console.log(`El servidor funciona en el puerto 3000`);
});
