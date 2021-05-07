export const typeDef = `
type Place {
  id: ID!
  street: String
  city: String
  zip: String
  country: String
  description: String
}

extend type Query {
  places: [Place]
}
`;
