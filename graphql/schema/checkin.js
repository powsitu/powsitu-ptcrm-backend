export const typeDef = `
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

extend type Query {
  checkins: [Checkin]
  checkinForUser(id: ID!): Checkin
}

`;
