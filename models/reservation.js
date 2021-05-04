'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reservation.belongsTo(models.user);
      reservation.belongsTo(models.training);
     }
  };
  reservation.init({
    userId: {type: DataTypes.INTEGER, allowNull: false},
    trainingId: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return reservation;
};