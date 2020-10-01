'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.schools = this.belongsToMany(models.school, {
        through: 'school_grades',
        as: 'schools',
        foreignKey: 'grade_id',
        otherKey: 'school_id'
      })
    }
  };
  grade.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Mã của khối không được để trống'
        }
      }
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Tên khối không được để trống'
        }
      }
    },
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