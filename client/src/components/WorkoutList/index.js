import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_WORKOUTS } from "../../utils/actions";
import { idbPromise } from '../../utils/helpers';
import { Modal, Button } from "react-bootstrap";
import { removeWorkoutId } from "../../utils/localStorage";
import WorkoutDetail from "../WorkoutDetail";
import Auth from "../../utils/auth";
import './workoutlist.css';

function WorkoutList() {
  const [showModal, setShowModal] = useState(false);

  const showAddWorkoutModal = () => setShowModal(true); //show modal
  const closeAddWorkoutModal = () => setShowModal(false); //hide modal
  const [selectedWorkout, setSelectedWorkout] = useState(null);


  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(GET_ME);


  const userData = data?.me || {};

  console.log(userData);
  console.log(userData.workouts);

  useEffect(() => {
    if (userData.workouts) {
      dispatch({
        type: UPDATE_WORKOUTS,
        workouts: userData.workouts,
      });
      userData.workouts.forEach((workout) => {
        //console.log(workout);
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
  }, [userData.workouts, loading, dispatch]);

  // refresh the workout list or fetch the updated data
  const handleCloseWorkoutDetail = () => {
    closeAddWorkoutModal();
    setSelectedWorkout(null)
  }

  function filterWorkouts() {
    console.log(currentCategory);
    if (!currentCategory) {
      return state.workouts;
    }

    return state.workouts.filter(
      (workout) => workout.target === currentCategory
    );
  }

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  if (loading) {
    return <h2>LOADING Workout List...</h2>;
  }

  return (
    <>
      <div>
        {filterWorkouts()?.map((workout) => (
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
          {selectedWorkout && <WorkoutDetail workout={selectedWorkout} onClose={handleCloseWorkoutDetail} />}
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-detail" onClick={() => setSelectedWorkout(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WorkoutList;
