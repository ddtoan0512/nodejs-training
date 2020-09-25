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
  },{
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci', 
      timestamps: true
    },
    logging:false
  });
  return grade;
};