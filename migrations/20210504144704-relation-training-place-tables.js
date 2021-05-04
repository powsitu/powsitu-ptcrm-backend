'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn(
       'trainings', 'placeId', {
          type: Sequelize.INTEGER,
          references: {
            model: "places",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
       }
     )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('trainings', 'placeId');
  }
};
