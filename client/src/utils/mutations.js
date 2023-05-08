import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            firstName
            lastName
            userName
            email
            age
            weight
            height
            }
        }
    }
`;

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!, $age: Int!, $weight: Float!, $height: Float!) {
    addUser(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password, age: $age, weight: $weight, height: $height) {
    token
    user {
        _id
        firstName
        lastName
        userName
        email
        age
        weight
        height
        }
    }
}
`;

export const ADD_WORKOUT = gql`
mutation addWorkout($name: String!, $bodyPart: String!, $equipment: String!, $target: String!, $gifUrl: String, $repetition: Int, $time: String, $distance: Float){
    addWorkout(name: $name, bodyPart: $bodyPart, equipment: $equipment, target: $target, target: $target, repetition: $repetition, time: $time, distance: $distance){
        user {
            _id
            firstName
            lastName
            userName
            email
            age
            weight
            height
            workouts {
                _id
                name
                bodyPart
                equipment
                target
                gifUrl
                repetition
                time
                distance
                }
            }
    }
}
`;

export const REMOVE_WORKOUT = gql`
mutation removeWorkout($_id: ID){
    removeWorkout(_id: $_id){
        user {
            _id
            firstName
            lastName
            userName
            email
            age
            weight
            height
            workouts {
                _id
                name
                bodyPart
                equipment
                target
                gifUrl
                repetition
                time
                distance
                }
            }
    }
}
`;