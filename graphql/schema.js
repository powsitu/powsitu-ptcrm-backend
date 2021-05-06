const { gql } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");

// adding a custom scalar type to graphql for date types
// code found here: https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
    password: String
    firstName: String
    lastName: String
    phone: String
    isAdmin: Boolean
    isBlocked: Boolean
  }

  type Checkin {
    id: ID!
    user: User!
    date: String
    calories: Int
    proteins: Int
    carbs: Int
    fats: Int
    dailyRating: Int
    comment: String
  }

  type TrainingType {
    id: ID!
    name: String
    description: String
    intensity: Int
  }

  type Place {
    id: ID!
    street: String
    city: String
    zip: String
    country: String
    description: String
  }

  type Image {
    id: ID!
    url: String
    description: String
    trainingType: TrainingType
    placeId: Place
  }

  type Training {
    id: ID!
    date: String
    time: String
    attendees: Int
    isBookable: Boolean
    place: Place
    trainingType: TrainingType!
  }

  type Feedback {
    id: ID!
    user: User!
    training: Training!
    rating: Int
    comment: String
  }

  type Reservation {
    id: ID!
    user: User!
    training: Training!
  }

  type Login {
    token: String!
  }

  type Query {
    getAllUsers: [User]
    getOneUser(id: ID!): User
    getAllCheckins: [Checkin]
    getOneCheckinForUser(id: ID!): Checkin
    getAllTrainingTypes: [TrainingType]
    getAllPlaces: [Place]
    getAllImages: [Image]
    getAllTrainings: [Training]
    getTrainingThisDay(date: String!): [Training]
    getAllFeedbacks: [Feedback]
    getFeedbacksForUser(id: ID!): [Feedback]
    getAllReservations: [Reservation]
    getAllReservationsForUser(id: ID!): [Reservation]
  }

  type Mutation {
    login(email: String!, password: String!): Login!
    makeReservation(userId: ID!, trainingId: Int!): Reservation!
    removeReservation(reservationId: ID!): Reservation!
    addFeedback(
      userId: ID!
      trainingId: Int!
      rating: Int
      comment: String
    ): Feedback!
    addCheckin(
      userId: ID!
      date: String
      calories: Int
      proteins: Int
      carbs: Int
      fats: Int
      dailyRating: Int
      comment: String
    ): Checkin!
    switchBlockStatus(userId: ID!): User!
    addTrainingType(
      name: String
      description: String
      intensity: String
    ): TrainingType!
    modifyTrainingType(
      trainingTypeId: ID!
      name: String
      description: String
      intensity: String
    ): TrainingType!
    removeTrainingType(trainingTypeId: ID!): TrainingType!
    addTraining(
      date: String
      time: String
      attendees: Int
      isBookable: Boolean
      placeId: Int
      trainingTypeId: Int
    ): Training!
    modifyTraining(
      trainingId: ID!
      date: String
      time: String
      attendees: Int
      isBookable: Boolean
      placeId: Int
      trainingTypeId: Int
    ): Training!
    removeTraining(trainingId: ID!): Training!
    addPlace(
      street: String
      city: String
      zip: String
      country: String
      description: String
    ): Place!
    modifyPlace(
      placeId: Int
      street: String
      city: String
      zip: String
      country: String
      description: String
    ): Place!
    removePlace(placeId: Int): Place!
  }
`;

module.exports = { typeDefs };
