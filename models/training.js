'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      training.belongsTo(models.place);
      training.hasMany(models.reservation);
      training.belongsTo(models.trainingType);
      training.hasMany(models.feedback);
    }
  };
  training.init({
    date: DataTypes.STRING,
    time: DataTypes.TIME,
    attendees: DataTypes.INTEGER,
    isBookable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    placeId: DataTypes.INTEGER,
    trainingTypeId: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'training',
  });
  return training;
};