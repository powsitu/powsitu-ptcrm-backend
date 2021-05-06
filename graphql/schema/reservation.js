export const typeDef = `
type Reservation {
  id: ID!
  user: User!
  training: Training!
}

extend type Query {
  reservations: [Reservation]
  reservationsForUser(id: ID!): [Reservation]
}
`;
