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

export const QUERY_WORKOUT = gql`
    query workout {

    }
`;
