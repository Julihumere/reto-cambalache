const { createClient } = require("redis");

const cliente = createClient();

cliente.connect("connect", console.log("El cliente esta conectado"));

module.exports = cliente;
