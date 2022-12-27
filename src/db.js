const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:1234@localhost/cambalache`,
  {
    logging: false,
    native: false,
  }
);

module.exports = sequelize;
