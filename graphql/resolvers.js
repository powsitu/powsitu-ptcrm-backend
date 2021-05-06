const { ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const { SALT_ROUNDS } = require("../config/myVars");
const db = require("../models");
const auth = require("../auth/middleware");

module.exports = {
  Query: {
    getAllUsers: async (parent, _args, { req }) => {
      const user = await auth(req);
      const result = await db.user.findAll();
      return result;
    },

    getOneUser: async (parent, { id }, { req }) => {
      const user = await auth(req);
      const result = await db.user.findByPk(id);
      return result;
    },

    getAllCheckins: async (parent, _args, { req }) => {
      const user = await auth(req);
      const result = await db.checkin.findAll({ include: { model: db.user } });
      return result;
    },

    getOneCheckinForUser: async (parent, _args, { req }) => {
      const user = await auth(req);
      const result = await db.checkin.findByPk(_args.id, {
        include: { model: db.user },
      });
      return result;
    },

    getAllTrainingTypes: async (parent, _args, { req }) => {
      const user = await auth(req);
      const result = await db.trainingType.findAll();
      return result;
    },

    getAllPlaces: async (parent, _args, { req }) => {
      const user = await auth(req);
      const result = await db.place.findAll();
      return result;
    },

    getAllReservations: async (parent, _args, { req }) => {
      const user = await auth(req);
      const result = await db.reservation.findAll({
        include: [{ model: db.user }, { model: db.training }],
      });
      return result;
    },

    getAllReservationsForUser: async (parent, { id }, { req }) => {
      const user = await auth(req);
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

    getAllTrainings: async (parent, _args, { req }) => {
      const user = await auth(req);
      const result = await db.training.findAll({
        include: [db.trainingType, db.place],
      });
      return result;
    },

    getTrainingThisDay: async (parent, { date }, { req }) => {
      const user = await auth(req);
      const result = await db.training.findAll({
        where: { date: date },
        include: [
          { model: db.trainingType },
          { model: db.place },
          { model: db.user },
        ],
      });
      return result;
    },

    getFeedbacksForUser: async (parent, { id }, { req }) => {
      const user = await auth(req);
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
    makeReservation: async (parent, { userId, trainingId }, { req }) => {
      const user = await auth(req);
      const newReservation = await db.reservation.create({
        userId,
        trainingId,
      });
      return newReservation;
    },

    removeReservation: async (parent, { reservationId }, { req }) => {
      const user = await auth(req);
      const ciaoReservation = await db.reservation.findByPk(reservationId);
      await ciaoReservation.destroy();
      return ciaoReservation;
    },

    addFeedback: async (parent, _args, { req }) => {
      const user = await auth(req);
      const newFeedback = await db.feedback.create(_args);
      return newFeedback;
    },

    addCheckin: async (parent, _args, { req }) => {
      const user = await auth(req);
      const newCheckin = await db.checkin.create(_args);
      return newCheckin;
    },

    switchBlockStatus: async (parent, { userId }, { req }) => {
      const user = await auth(req);
      const userToSwitch = await db.user.findByPk(userId);
      const newStatus = !userToSwitch.isBlocked;
      await userToSwitch.update({ isBlocked: newStatus });
      return userToSwitch;
    },

    addTrainingType: async (parent, _args, { req }) => {
      const user = await auth(req);
      const newTrainingType = await db.trainingType.create(_args);
      return newTrainingType;
    },

    modifyTrainingType: async (parent, _args, { req }) => {
      const user = await auth(req);
      const modifiedTrainingType = await db.trainingType.findByPk(
        _args.trainingTypeId
      );
      await modifiedTrainingType.update(_args);
      return modifiedTrainingType;
    },

    removeTrainingType: async (parent, { trainingTypeId }, { req }) => {
      const user = await auth(req);
      const ciaoTrainingType = await db.trainingType.findByPk(trainingTypeId);
      await ciaoTrainingType.destroy();
      return ciaoTrainingType;
    },

    addTraining: async (parent, _args, { req }) => {
      const user = await auth(req);
      const newTraining = await db.training.create(_args);
      return newTraining;
    },

    modifyTraining: async (parent, _args, { req }) => {
      const user = await auth(req);
      const modifiedTraining = await db.training.findByPk(_args.trainingId);
      await modifiedTraining.update(_args);
      return modifiedTraining;
    },

    removeTraining: async (parent, { trainingId }, { req }) => {
      const user = await auth(req);
      const ciaoTraining = await db.training.findByPk(trainingId);
      await ciaoTraining.destroy();
      return ciaoTraining;
    },

    addPlace: async (parent, _args, { req }) => {
      const user = await auth(req);
      const newPlace = await db.place.create(_args);
      return newPlace;
    },

    modifyPlace: async (parent, _args, { req }) => {
      const user = await auth(req);
      const modifiedPlace = await db.training.findByPk(_args.placeId);
      await modifiedPlace.update(_args);
      return modifiedPlace;
    },

    removePlace: async (parent, { placeId }, { req }) => {
      const user = await auth(req);
      const ciaoPlace = await db.place.findByPk(placeId);
      await ciaoPlace.destroy();
      return ciaoPlace;
    },

    login: async (parent, { email, password }) => {
      const loginUser = await db.user.findOne({ email });
      if (!loginUser) {
        return new ApolloError("User with that email not found", 400);
      }
      if (!bcrypt.compareSync(password, loginUser.password)) {
        return new ApolloError("Password incorrect", 400);
      }
      const token = toJWT({ userId: loginUser.id });
      return { token };
    },
    signup: async (parent, { email, password }) => {
      const singupUser = await db.user.create({
        email: email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
      });
      delete singupUser.dataValues["password"];
      const token = toJWT({ userId: singupUser.id });
      return { token };
    },
  },
};
