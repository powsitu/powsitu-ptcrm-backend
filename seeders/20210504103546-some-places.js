'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'places',
     [
       {
        street: "Burgermeester van Alphenstraat 108",
        city: "Zandvoort",
        zip: "2041 KP",
        country: "Netherlands",
        description: "Circuit Zandvoort",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        street: "Arena Boulevard 1",
        city: "Amsterdam",
        zip: "1101 AX",
        country: "Netherlands",
        description: "Johan Cruijff Arena",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        street: "Oudekerksplein 23",
        city: "Amsterdam",
        zip: "1012 GX",
        country: "Netherlands",
        description: "The Oude Kerk in Red Light District",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        street: "Stadhouderskade 78",
        city: "Amsterdam",
        zip: "1072 AE",
        country: "Netherlands",
        description: "Amsterdam Experience",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        street: "Gedempte Voldersgracht 2",
        city: "Haarlem",
        zip: "2011 WD",
        country: "Netherlands",
        description: "Jopenkerk Haarlem",
        createdAt: new Date(),
        updatedAt: new Date()
       },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('places', null, {});
  }
};
