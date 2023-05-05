import { gql } from "@apollo/client";

export const QUERY_USER = gql`
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
export const QUERY_WORKOUTs = gql` 
    query workouts {

    }
`;
