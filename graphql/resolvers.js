const { ApolloError } = require("apollo-server-express");

module.exports = {
  Query: {
    users: async ( parent, _args, { db }, info) => {
      return db.user.findAll();
    },
    checkins: async ( parent, _args, { db }, info) => {
      return db.checkin.findAll({ include: [db.user] });
    },

  }
}