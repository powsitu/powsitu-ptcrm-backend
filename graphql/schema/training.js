export const typeDef = `
type Training {
  id: ID!
  date: String
  time: String
  attendees: Int
  isBookable: Boolean
  place: Place
  trainingType: TrainingType!
}

extend type Query {
  trainings: [Training]
  trainingThisDay(date: String!): [Training]
}
`;
