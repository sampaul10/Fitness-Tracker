import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_WORKOUTS } from "../../utils/actions";
import { idbPromise } from '../../utils/helpers';
import { Modal, Button } from "react-bootstrap";
import { REMOVE_WORKOUT } from "../../utils/mutations";
import { removeWorkoutId } from "../../utils/localStorage";
import WorkoutDetail from "../WorkoutDetail";
import Auth from "../../utils/auth";

function WorkoutList() {
  const [showModal, setShowModal] = useState(false);

  const showAddWorkoutModal = () => setShowModal(true); //show modal
  const closeAddWorkoutModal = () => setShowModal(false); //hide modal
  const [selectedWorkout, setSelectedWorkout] = useState(null);


  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(GET_ME);

  const [removeWorkout] = useMutation(REMOVE_WORKOUT);

  const userData = data?.me || {};

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

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <>
      <div>
        {userData.workouts?.map((workout) => (
          <div key={workout._id}>
            <Button onClick={() => handleWorkoutClick(workout)}>{workout.name}</Button>
          </div>
        ))}
      </div>
      <Modal show={selectedWorkout} onHide={() => setSelectedWorkout(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Workout Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedWorkout && <WorkoutDetail workout={selectedWorkout} />}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setSelectedWorkout(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WorkoutList;
