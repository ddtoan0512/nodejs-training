'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class homeroomClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  homeroomClass.init({
    school_id: DataTypes.INTEGER,
    grade_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    fullname: DataTypes.STRING,
    sort_index: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'homeroomClass',
    tableName: 'homeroom_classes'
  });
  return homeroomClass;
};