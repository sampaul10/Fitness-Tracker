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
        age
        weight
        height
        }
    }
}
`;

