import { gql } from "@apollo/client";

export const GET_USER = gql`
  {
    user {
        firstName
        lastName
        userName
        email
        age
        weight
        height
        workouts {

        }
    }
  }
`;

// GET all of the workouts data
export const GET_WORKOUTS = gql` 
    query workouts {

    }
`;

export const QUERY_CATEGORIES = gql`

`;
