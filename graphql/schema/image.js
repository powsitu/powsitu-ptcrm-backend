export const typeDef = `
type Image {
  id: ID!
  url: String
  description: String
  trainingType: TrainingType
  placeId: Place
}

extend type Query {
  images: [Image]
}
`;
