const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Workout {
        _id: ID
        repetition: Int
        time: String
        distance: Float
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        userName: String
        email: String
        age: Int
        weight: Float
        height: Float
        workouts: [Workout]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: [User]
        workout: [Workout]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!, age: Int!, weight: Float!, height: Float!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
