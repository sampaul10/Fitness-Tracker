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

    type Exercise {
        _id: ID
        name: String
        bodyPart: String
        equipment: String
        target: String
        gifUrl: String
    }


    type Achievement {
        _id: ID
        recordDate: String   
        username: String
        record: [Workout]!
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

    type Category {
        _id: ID
        target: String
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
        me: User
        user: User
        users: [User]
        workouts: [Workout]
        exercises: [Exercise]
        record: Achievement
        categories: [Category]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!, age: Int!, weight: Float!, height: Float!): Auth
        addWorkout(workoutData: WorkoutInput): User
        removeWorkout(_id: ID!): User
        login(email: String!, password: String!): Auth
        saveAchievement(recordDate: String, username: String, record: [WorkoutInput]!): User
        removeAchievement(_id: ID!): User
    }
`;

module.exports = typeDefs;