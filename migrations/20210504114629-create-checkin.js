'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('checkins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      calories: {
        type: Sequelize.INTEGER
      },
      proteins: {
        type: Sequelize.INTEGER
      },
      carbs: {
        type: Sequelize.INTEGER
      },
      fats: {
        type: Sequelize.INTEGER
      },
      dailyRating: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('checkins');
  }
};