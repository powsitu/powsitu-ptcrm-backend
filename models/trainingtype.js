'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trainingType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      trainingType.hasOne(models.image);
      trainingType.hasMany(models.training);
    }
  };
  trainingType.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    intensity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trainingType',
  });
  return trainingType;
};