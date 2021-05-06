export const typeDef = `
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

extend type Query {
  users: [User]
  user(id: ID!): User
}

`;
