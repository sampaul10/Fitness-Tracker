const { AuthenticationError } = require("apollo-server-express");
const { User, Workout, Achievement } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate("achievements")
      .populate("workouts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .populate("achievements")
      .populate("workouts");
    },
    workouts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Workout.find(params).sort({ createdAt: -1 });
    },
    record: async (parent, { record }) => {
      return Achievement.find(record);
    },
    categories: async () => {
      return Workout.find().distinct("target", function (error, target) {
        console.log(target);
      });
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, userName, email, password, age, weight, height }
    ) => {
      // First we create the user
      const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password,
        age,
        weight,
        height,
      });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addWorkout: async (parent, { workoutData }, context) => {
      console.log(context);
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { workouts: workoutData } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!"); //if not logged in and trying to add workout, throw error message
    },
    removeWorkout: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { workouts : _id } },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    saveAchievement: async (parent, args, context) => {
      //console.log(newRecord);
      if(context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: args },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAchievement: async (parent, { _id }, context) => {
      if(context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id},
          { $pull: { achievements: { _id } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
