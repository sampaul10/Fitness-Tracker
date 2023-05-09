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
        _id: ID
        recordDate: String   
        record: [RecordData]
    }

    input RecordData {
        _id: ID
        username: String
        workouts: [Workout]!
        achievementDate: String!
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

    input WorkoutInput {
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
        addWorkout(workoutData: WorkoutInput): User
        removeWorkout(_id: ID!): User
        login(email: String!, password: String!): Auth
        saveAchievement(record: RecordData): User
        removeAchievement(_id: ID!): User
    }
`;

module.exports = typeDefs;