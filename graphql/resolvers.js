const { ApolloError } = require("apollo-server-express");

module.exports = {
  Query: {
    users: async ( parent, _args, { db }, info) => {
      const result = await db.user.findAll();
      return result;
    },
    checkins: async ( parent, _args, { db }, info) => {
      const result = await db.checkin.findAll({ include: [db.user] });
      console.log(result);
      return result;
    },
    trainingTypes: async ( parent, _args, { db }, info) => {
      const result = await db.trainingType.findAll();
      return result;
    },
    places: async ( parent, _args, { db }, info) => {
      const result = await db.place.findAll();
      return result;
    },
    images: async ( parent, _args, { db }, info) => {
      
    },

    reservations: async ( parent, _args, { db }, info) => {
      const result = await db.reservation.findAll({ include: [db.user, db.training] });
      console.log(result);
      return result;
    }

  }
}