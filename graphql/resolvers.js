const { ApolloError } = require("apollo-server-express");

module.exports = {
  Query: {
    getAllUsers: async (parent, _args, { db }, info) => {
      const result = await db.user.findAll();
      return result;
    },

    getOneUser: async (parent, { id }, { db }, info) => {
      const result = await db.user.findByPk(id);
      return result;
    },

    getAllCheckins: async (parent, _args, { db }, info) => {
      const result = await db.checkin.findAll({ include: { model: db.user } });
      console.log(result);
      return result;
    },

    getOneCheckinForUser: async (parent, _args, { db }, info) => {
      const result = await db.checkin.findByPk(_args.id, {
        include: { model: db.user },
      });
      return result;
    },

    getAllTrainingTypes: async (parent, _args, { db }, info) => {
      const result = await db.trainingType.findAll();
      return result;
    },

    getAllPlaces: async (parent, _args, { db }, info) => {
      const result = await db.place.findAll();
      return result;
    },

    getAllReservations: async (parent, _args, { db }, info) => {
      const result = await db.reservation.findAll({
        include: [{ model: db.user }, { model: db.training }],
      });
      return result;
    },

    getOneReservationsForUser: async (parent, { id }, { db }, info) => {
      const result = await db.reservation.findAll({
        where: { userId: id },
        include: [
          { model: db.user },
          {
            model: db.training,
            include: [{ model: db.trainingType }, { model: db.place }],
          },
        ],
      });
      return result;
    },

    getAllTrainings: async (parent, _args, { db }, info) => {
      const result = await db.training.findAll({
        include: [db.trainingType, db.place],
      });
      return result;
    },

    getTrainingThisDay: async (parent, { date }, { db }, info) => {
      const result = await db.training.findAll({
        where: { date: date },
        include: [
          { model: db.trainingType },
          { model: db.place },
          { model: db.reservation }, // not showing up in the playground, not sure why. Matias, help!!!!!
        ],
      });
      return result;
    },

    getFeedbacksForUser: async (parent, { id }, { db }, info) => {
      const result = await db.feedback.findAll({
        where: { userId: id },
        include: [
          {
            model: db.training,
            include: [{ model: db.trainingType }, { model: db.place }],
          },
        ],
      });
      return result;
    },
  },
  Mutation: {
    makeReservation: async (parent, { userId, trainingId }, { db }, info) => {
      const newReservation = await db.reservation.create({
        userId,
        trainingId,
      });
      return newReservation;
    },

    removeReservation: async (parent, { reservationId }, { db }, info) => {
      const ciaoReservation = await db.reservation.findByPk(reservationId);
      await ciaoReservation.destroy();
      return ciaoReservation;
    },

    addFeedback: async (parent, _args, { db }, info) => {
      const newFeedback = await db.feedback.create(_args);
      return newFeedback;
    },

    addCheckin: async (parent, _args, { db }, info) => {
      const newCheckin = await db.checkin.create(_args);
      return newCheckin;
    },

    switchBlockStatus: async (parent, { userId }, { db }, info) => {
      const userToSwitch = await db.user.findByPk(userId);
      const newStatus = !userToSwitch.isBlocked;
      await userToSwitch.update({ isBlocked: newStatus });
      return userToSwitch;
    },

    addTrainingType: async (parent, _args, { db }, info) => {
      const newTrainingType = await db.trainingType.create(_args);
      return newTrainingType;
    },

    modifyTrainingType: async (parent, _args, { db }, info) => {
      const modifiedTrainingType = await db.trainingType.findByPk(
        _args.trainingTypeId
      );
      await modifiedTrainingType.update(_args);
      return modifiedTrainingType;
    },

    removeTrainingType: async (parent, { trainingTypeId }, { db }, info) => {
      const ciaoTrainingType = await db.trainingType.findByPk(trainingTypeId);
      await ciaoTrainingType.destroy();
      return ciaoTrainingType;
    },

    addTraining: async (parent, _args, { db }, info) => {
      const newTraining = await db.training.create(_args);
      return newTraining;
    },

    modifyTraining: async (parent, _args, { db }, info) => {
      const modifiedTraining = await db.training.findByPk(_args.trainingId);
      await modifiedTraining.update(_args);
      return modifiedTraining;
    },

    removeTraining: async (parent, { trainingId }, { db }, info) => {
      const ciaoTraining = await db.training.findByPk(trainingId);
      await ciaoTraining.destroy();
      return ciaoTraining;
    },

    addPlace: async (parent, _args, { db }, info) => {
      const newPlace = await db.place.create(_args);
      return newPlace;
    },

    modifyPlace: async (parent, _args, { db }, info) => {
      const modifiedPlace = await db.training.findByPk(_args.placeId);
      await modifiedPlace.update(_args);
      return modifiedPlace;
    },

    removePlace: async (parent, { placeId }, { db }, info) => {
      const ciaoPlace = await db.place.findByPk(placeId);
      await ciaoPlace.destroy();
      return ciaoPlace;
    },
  },
};
