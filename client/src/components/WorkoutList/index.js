import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_WORKOUTS } from "../../utils/actions";
import { idbPromise } from '../../utils/helpers';
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import { REMOVE_WORKOUT } from "../../utils/mutations";
import { removeWorkoutId } from "../../utils/localStorage";
import { AddWorkoutForm } from "../AddWorkoutForm";
import Auth from "../../utils/auth";

function WorkoutList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(GET_ME);

  const [removeWorkout] = useMutation(REMOVE_WORKOUT);

  const userData = data?.me || {};
  console.log(userData);
  console.log(data);

  /*useEffect(() => {
    if (userData) {
      dispatch({
        type: UPDATE_WORKOUTS,
        workouts: userData.workouts,
      });
      userData.workouts.forEach((workout) => {
        console.log(workout);
        idbPromise('workouts', 'put', workout);
      });
    } else if (!loading) {
      idbPromise('workouts', 'get').then((workouts) => {
        console.log(workouts);
        dispatch({
          type: UPDATE_WORKOUTS,
          workouts: workouts,
        });
      });
    }
  }, [userData, loading, dispatch]);*/

  function filterWorkouts() {
    if (!currentCategory) {
      return state.workouts;
    }

    return state.workouts.filter(
      (workout) => workout.category._id === currentCategory
    );
  }

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
