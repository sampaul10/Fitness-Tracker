const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Workout {
        _id: ID
        name: String
        bodyPart: String
        equipment: String
        target: String
        gifUrl: String
        repetition: Int
        time: String
        distance: Float
    }

    type Achievement {
        achievementId: ID    
        record: [Workout]
        recordDate: String
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
        achievements: [Achievement]
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
        saveAchievement(record: [ID]):User
        removeAchievement(achievementId: ID): User
    }
`;

module.exports = typeDefs;
