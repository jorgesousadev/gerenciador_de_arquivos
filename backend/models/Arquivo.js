const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Arquivo = db.define("Arquivo", {
  nome: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  caminho: {
    type: DataTypes.STRING,
  },
  tamanho: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.STRING,
  }
});

module.exports = Arquivo;
