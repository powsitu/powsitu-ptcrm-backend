'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(
     'trainings',
     [
       {
        date: new Date(),
        time: "17:00",
        attendees: 6,
        isBookable: true,
        placeId: 1,
        trainingTypeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        date: new Date(),
        time: "18:30",
        attendees: 8,
        isBookable: true,
        placeId: 2,
        trainingTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        date: new Date(),
        time: "10:00",
        attendees: 8,
        isBookable: true,
        placeId: 2,
        trainingTypeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        date: new Date(),
        time: "11:30",
        attendees: 1,
        isBookable: false,
        placeId: 3,
        trainingTypeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        date: new Date(),
        time: "14:00",
        attendees: 10,
        isBookable: true,
        placeId: 4,
        trainingTypeId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        date: new Date(),
        time: "15:30",
        attendees: 20,
        isBookable: true,
        placeId: 1,
        trainingTypeId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
       },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('trainings', null, {});
  }
};
