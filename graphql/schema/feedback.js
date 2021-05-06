export const typeDef = `
type Feedback {
  id: ID!
  user: User!
  training: Training!
  rating: Int
  comment: String
}

extend type Query {
  feedbacks: [Feedback]
  feedbackForUser(id: ID!): [Feedback]
}
`;
