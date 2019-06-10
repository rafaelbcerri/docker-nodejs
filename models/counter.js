'use strict';
module.exports = (sequelize, DataTypes) => {
  const Counter = sequelize.define('Counter', {
    texto: DataTypes.STRING,
  }, {});
  Counter.associate = function (models) {};
  return Counter;
};