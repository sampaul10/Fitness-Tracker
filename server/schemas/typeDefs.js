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
        username: String
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
`;

module.exports = typeDefs;
