'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      place.hasOne(models.image);
      place.hasMany(models.training);
    }
  };
  place.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'place',
  });
  return place;
};