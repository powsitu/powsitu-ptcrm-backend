'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      checkin.belongsTo(models.user);
    }
  };
  checkin.init({
    userId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    calories: DataTypes.INTEGER,
    proteins: DataTypes.INTEGER,
    carbs: DataTypes.INTEGER,
    fats: DataTypes.INTEGER,
    dailyRating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'checkin',
  });
  return checkin;
};