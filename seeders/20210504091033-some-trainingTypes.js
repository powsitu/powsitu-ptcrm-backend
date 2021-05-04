'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'trainingTypes',
     [
       {
        name: "Kettlebell flow",
        description: "Full body workout using kettlebells",
        intensity: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "TRX introduction",
        description: "Class for beginners to introduce them to suspension training with TRX",
        intensity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "TRX intermediate",
        description: "Full body workout doing suspension training using TRX",
        intensity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "TRX advanced",
        description: "Full body workout doing suspension training using TRX with advanced techniques",
        intensity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "Intake",
        description: "1:1 discussion to get to know each other before starting to work together",
        intensity: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "Personal Training",
        description: "1:1 training with your couch, intensity based on your level",
        intensity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "Bootcamp",
        description: "Series of outdoor exercises for strength and conditioning",
        intensity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        name: "Spinning",
        description: "Indoor cycling with static spinning bike",
        intensity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
       }
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('trainingTypes', null, {});
  }
};
