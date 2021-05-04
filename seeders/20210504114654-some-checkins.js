'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'checkins',
     [
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        date: new Date(),
        calories: 2200,
        proteins: 180,
        carbs: 100,
        fats: 50,
        dailyRating: 2,
        comment: "Smoked and drank too much last night, couldn't lift as heavy as usual"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        date: new Date(),
        calories: 1250,
        proteins: 50,
        carbs: 100,
        fats: 100,
        dailyRating: 1,
        comment: "I was starving the whole day with this new diet"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        date: new Date(),
        calories: 5000,
        proteins: 200,
        carbs: 250,
        fats: 180,
        dailyRating: 3,
        comment: "I ate too much, had a birthday and the cake was delicious"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        date: new Date(),
        calories: 2800,
        proteins: 175,
        carbs: 105,
        fats: 96,
        dailyRating: 5,
        comment: "Felt good and had strenght and stamina when training"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        date: new Date(),
        calories: 3000,
        proteins: 105,
        carbs: 210,
        fats: 170,
        dailyRating: 4,
        comment: "It was my cheat day and I had pizza"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        date: new Date(),
        calories: 1000,
        proteins: 50,
        carbs: 90,
        fats: 65,
        dailyRating: 1,
        comment: "Got sick, wasn't really hungry and couldn't train. Spend my whole day on the couch"
       },
       {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        date: new Date(),
        calories: 1500,
        proteins: 100,
        carbs: 120,
        fats: 50,
        dailyRating: 3,
        comment: "Skipped dessert, was fit enough to not die on the spinning bike"
       },

     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('checkins', null, {});
  }
};
