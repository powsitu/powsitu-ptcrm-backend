export const typeDef = `
type TrainingType {
  id: ID!
  name: String
  description: String
  intensity: Int
}

extend type Query {
  trainingTypes: [TrainingType]
}
`;
