'use strict';
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert(
     'users',
     [
       {
        email: "sendtopow@gmail.com",
        password: bcrypt.hashSync("admin", SALT_ROUNDS),
        firstName: "Patrick",
        lastName: "Oves Weiss",
        phone: "31666666666",
        isAdmin: true,
        isBlocked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        email: "blocked@gmail.com",
        password: bcrypt.hashSync("blocked", SALT_ROUNDS),
        firstName: "Blocked",
        lastName: "User",
        phone: "31600000000",
        isAdmin: false,
        isBlocked: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "leonardo@tmnt.com",
        password: bcrypt.hashSync("leo", SALT_ROUNDS),
        firstName: "Leonardo",
        lastName: "",
        phone: "",
        isAdmin: false,
        isBlocked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "raphael@tmnt.com",
        password: bcrypt.hashSync("raph", SALT_ROUNDS),
        firstName: "Raphael",
        lastName: "",
        phone: "",
        isAdmin: false,
        isBlocked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "donatello@tmnt.com",
        password: bcrypt.hashSync("don", SALT_ROUNDS),
        firstName: "Donatello",
        lastName: "",
        phone: "",
        isAdmin: false,
        isBlocked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "michelangelo@tmnt.com",
        password: bcrypt.hashSync("mike", SALT_ROUNDS),
        firstName: "Michelangelo",
        lastName: "",
        phone: "",
        isAdmin: false,
        isBlocked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "splinter@tmnt.com",
        password: bcrypt.hashSync("sensei", SALT_ROUNDS),
        firstName: "Hamato",
        lastName: "Yoshi",
        phone: "",
        isAdmin: false,
        isBlocked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "april@tmnt.com",
        password: bcrypt.hashSync("april", SALT_ROUNDS),
        firstName: "April",
        lastName: "O'Neil",
        phone: "",
        isAdmin: false,
        isBlocked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ]
   )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
