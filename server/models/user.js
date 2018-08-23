'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.STRING, primaryKey: true },
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};
