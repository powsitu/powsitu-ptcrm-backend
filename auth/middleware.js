const User = require("../models").user;
const { toData } = require("./jwt");
const { ApolloError } = require("apollo-server-express");

async function auth(req) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");

  if (!auth || !auth[0] === "Bearer" || !auth[1])
    throw new ApolloError(
      "This endpoint requires an Authorization header with a valid token",
      400
    );

  try {
    const data = toData(auth[1]);
    console.log(data);
    const user = await User.findByPk(data.userId);
    if (!user) {
      throw new ApolloError("User does not exist", 404);
    }
    return user.dataValues;
  } catch (error) {
    console.log("ERROR IN AUTH MIDDLEWARE", error);
    switch (error.name) {
      case "TokenExpiredError":
        throw new ApolloError(error.message, 401);
      case "JsonWebTokenError":
        throw new ApolloError(error.message, 400);
      default:
        throw new ApolloError("Sorry something went wrong.", 400);
    }
  }
}

module.exports = auth;
