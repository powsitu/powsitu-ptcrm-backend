const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
    userId: User!
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
    trainingTypeId: TrainingType!
    placeId: Place!
  }

  type Training {
    id: ID!
    date: String
    time: String
    attendees: Int
    isBookable: Boolean
    placeId: Place!
    trainingTypeId: TrainingType!
  }

  type Feedback {
    id: ID!
    userId: User!
    trainingId: Training!
    rating: Int
    comment: String
  }

  type Reservation {
    id: ID!
    userId: User!
    trainingId: Training!
  }

  type Login {
    token: String!
  }

  type Query {
    users: [User]
    checkins: [Checkin]
    trainingTypes: [TrainingType]
    places: [Place]
    images: [Image]
    trainings: [Training]
    feedbacks: [Feedback]
    reservations: [Reservation]
  }
`;

module.exports = { typeDefs };
