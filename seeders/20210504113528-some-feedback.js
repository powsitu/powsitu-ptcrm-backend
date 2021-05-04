'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'feedbacks',
     [
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        trainingId: 1,
        rating: 3,
        comment: "Great class, I sweat a lot"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        trainingId: 2,
        rating: 4,
        comment: "Had a good time!"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        trainingId: 3,
        rating: 5,
        comment: "Awesome, will definitely recommend this class to friends!"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        trainingId: 4,
        rating: 4,
        comment: "Thanks for the great workout session!"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        trainingId: 5,
        rating: 3,
        comment: "Meh"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        trainingId: 6,
        rating: 2,
        comment: "The place was terrible and the sound quality was bad."
       },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('feedbacks', null, {});
  }
};
