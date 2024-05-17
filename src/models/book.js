'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    tittle: DataTypes.STRING,
    gender: DataTypes.STRING,
    id_author: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'create-book'
  });
  return Book;
};