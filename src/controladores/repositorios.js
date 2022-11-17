//Todos los Repositorios
const getRepositorios = (req, res) => {
  res.send("repositorios");
};

//Post Repositorios
const postRepositorios = (req, res) => {
  res.send("post repositorios");
};

module.exports = { getRepositorios, postRepositorios };
