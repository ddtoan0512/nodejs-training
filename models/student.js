'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  student.init({
    school_id: DataTypes.INTEGER,
    grade_id: DataTypes.INTEGER,
    homeroom_class_id: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    moet_code: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};