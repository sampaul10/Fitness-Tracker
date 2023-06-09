import { gql } from "@apollo/client";

export const GET_ME = gql`
  query {
    me {
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
      achievements { 
        _id 
        recordDate 
        username 
        record { 
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

export const GET_USER = gql `
  query 
  { 
    user 
    { 
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
      achievements { 
        _id 
        recordDate 
        username 
        record { 
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
  }`;

export const GET_USERS = gql `
  query { 
    users {
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
      achievements { 
        _id 
        recordDate 
        username 
        record { 
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
  }`;

// GET all of the workouts data
export const GET_WORKOUTS = gql` 
  query { 
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
`;

export const GET_EXERCISES = gql`
  {
    exercises {
      _id
      name
      bodyPart
      equipment
      target
      gifUrl
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  { 
  categories {
    _id
    target
    }
  }
`;
