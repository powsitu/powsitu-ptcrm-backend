'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      image.belongsTo(models.trainingType);
      image.belongsTo(models.place);
    }
  };
  image.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    trainingTypeId: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};