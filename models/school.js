'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class school extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.grades = this.belongsToMany(models.grade, 
        { 
          through: 'school_grades',
          as: 'grades',
          foreignKey: 'school_id',
          otherKey: 'grade_id'
        });
    }
  };
  school.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Mã của trường không được để trống"
        }
      }
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Tên của trường không được để trống"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'school',
  });
  return school;
};