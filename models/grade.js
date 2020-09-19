'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  grade.init({
    code: DataTypes.STRING,
    fullname: DataTypes.STRING,
    sort_index: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'grade',
  });
  return grade;
};