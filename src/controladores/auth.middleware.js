const jwt = require("jsonwebtoken");
const cliente = require("../redis.js");

const tokenCreado = async (email) => {
  const token = jwt.sign({ sub: email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_SECRET_TIME,
  });

  let algo = await cliente.set(
    email.toString(),
    JSON.stringify({ token: token })
  );
  console.log("guarde el token", algo);

  return token;
};

const validacionToken = async (req, res, next) => {
  const header = req.headers.authorization;
  if (typeof header !== "undefined") {
    const token = header.split(" ")[1];
    req.token = token;
    console.log(token);
    next();
  } else {
    res.status(401).json({ Mensaje: "Debe ingresar un token valido" });
  }
};

// const tokenActualizacion = async (email) => {
//   const nuevoToken = jwt.sign({ sub: email }, process.env.JWT_REFRESH, {
//     expiresIn: process.env.JWT_REFRESH_TIME,
//   });

//   return nuevoToken;
// };

// const verificacionTokenActualizacion = async (email) => {
//   try {
//     let token = await cliente.get(email.toString(), (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  validacionToken,
  tokenCreado,
};
