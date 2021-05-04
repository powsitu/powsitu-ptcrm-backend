'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'images',
     [
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: null,
        placeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: null,
        placeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: null,
        placeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: null,
        placeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: null,
        placeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 1,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 2,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 3,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 4,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 5,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 6,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 7,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        url: "https://picsum.photos/200",
        description: "random image",
        trainingTypeId: 8,
        placeId: null,
        createdAt: new Date(),
        updatedAt: new Date()
       },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('images', null, {});
  }
};
