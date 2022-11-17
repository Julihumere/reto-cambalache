//Todos los usuarios
const getUsuarios = (req, res) => {
  res.send("usuarios");
};

//Post usuarios
const postUsuarios = (req, res) => {
  res.send("post usuarios");
};

//Login
const login = (req, res) => {
  res.send("login");
};

module.exports = { getUsuarios, postUsuarios, login };
