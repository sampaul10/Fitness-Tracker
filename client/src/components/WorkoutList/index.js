import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import { REMOVE_WORKOUT } from "../../utils/mutations";
import { removeWorkoutId } from "../../utils/localStorage";
import { AddWorkoutForm } from "../AddWorkoutForm";
import Auth from "../../utils/auth";

function WorkoutList() {
  const { loading, data } = useQuery(GET_ME);
  const [removeWorkout] = useMutation(REMOVE_WORKOUT);

  const userData = data?.me || {};

  if (loading) {
    return <h2>LOADING Workout List...</h2>;
  }

  return (
    <>
      <div>
        {userData.workouts.map((workout) => (
          <div key={workout._id} value={workout._id}>
            {workout.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkoutList;
