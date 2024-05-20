'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite - Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favourite - Books.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Favourite-Books',
  });
  return Favourite - Books;
};