module.exports = {
  SALT_ROUNDS: 10,
  PORT: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "thisIsGonnaBeASuperSecretString",
};
