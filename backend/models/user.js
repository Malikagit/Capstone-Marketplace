'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Product, {
        as: 'items',
        through: "UserProducts",
        foreignKey: "userId",

      });
      this.hasMany(models.Rating, { uniqueKey: 'author' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    profilePicturePath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};