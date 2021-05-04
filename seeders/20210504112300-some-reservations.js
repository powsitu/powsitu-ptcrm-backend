'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'reservations',
     [
       {
         userId: 1,
         trainingId: 4,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        userId: 3,
        trainingId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        trainingId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        trainingId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        trainingId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        trainingId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        trainingId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        trainingId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        trainingId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        trainingId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        trainingId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        trainingId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        trainingId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('reservations', null, {});
  }
};
