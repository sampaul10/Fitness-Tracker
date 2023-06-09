import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useQuery, useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../../utils/mutations";
import { GET_EXERCISES } from '../../utils/queries';
import Auth from "../../utils/auth";
import { saveWorkoutIds, getSavedWorkoutIds } from "../../utils/localStorage";
import './addworkoutform.css'

const AddWorkoutForm = () => {
  const [workoutFormData, setWorkoutFormData] = useState({
    _id: "",
    name: "",
    bodyPart: "",
    equipment: "",
    target: "",
    gifUrl: "",
    repetition: 0,
    time: "",
    distance: 0,
  });

  const { loading, data } = useQuery(GET_EXERCISES); //get all of the workouts data

  const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());
  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    return () => saveWorkoutIds(savedWorkoutIds);
  });

  const handleFormSubmit = async (event) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    //event.preventDefault();
    const workoutId = workoutFormData._id;
    if (!workoutId) {
      event.preventDefault();
      setErrorMessage('Please select a workout.');
      return;
    }

    const { _id, ...workoutInput } = workoutFormData;

    const updatedWorkoutData = {
      ...workoutInput,
      repetition: parseInt(workoutInput.repetition),
      distance: parseFloat(workoutInput.distance),
    };
    console.log("workoutformData: ", updatedWorkoutData);

    try {

      const savedWorkout = await addWorkout({
        variables: { workoutInput: { ...updatedWorkoutData } },
      });
      console.log("Created workout: ", savedWorkout);
      //console.log("workoutformData: ", updatedWorkoutData);

      setWorkoutFormData({
        _id: "",
        name: "",
        bodyPart: "",
        equipment: "",
        target: "",
        gifUrl: "",
        repetition: 0,
        time: "",
        distance: 0,
      });

      setSavedWorkoutIds([...savedWorkoutIds, workoutFormData._id]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = async (event) => {
    const { name, value } = event.target;

    if (name === "workout") {
      const selectedWorkout = await data.exercises.find(
        (workout) => workout._id === value
      );

      setWorkoutFormData({
        _id: selectedWorkout._id,
        name: selectedWorkout.name,
        bodyPart: selectedWorkout.bodyPart,
        equipment: selectedWorkout.equipment,
        target: selectedWorkout.target,
        gifUrl: selectedWorkout.gifUrl,
        repetition: parseInt(workoutFormData.repetition) || 0,
        time: workoutFormData.time || "",
        distance: parseFloat(workoutFormData.distance) || 0,
      });
    } else {
      setWorkoutFormData({
        ...workoutFormData,
        [name]: value,
      });
    }
  };

  if (loading) {
    return <h2>LOADING Workout List...</h2>;
  }
  //list all workouts from data and grab workoutFormData to add it to workout list once hit the submit button
  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formWorkout">
          <Form.Label>Select a workout:</Form.Label>
          <Form.Control
            as="select"
            name="workout"
            onChange={handleInputChange}
            value={workoutFormData._id || ''}
          >
            <option value="">Select a workout</option>
            {data.exercises.map((workout) => (
              <option key={workout._id} value={workout._id}>
                {workout.name} | TARGET: {workout.target}
              </option>
            ))}
          </Form.Control>
          {workoutFormData.gifUrl && <img src={workoutFormData.gifUrl} alt="workout gif preview" />}
          <Form.Label>Enter Repetition (if Applicable):</Form.Label>
          <Form.Control
            type="text"
            name="repetition"
            placeholder="Ex: 2"
            onChange={handleInputChange}
            value={workoutFormData.repetition || 0}
          >
          </Form.Control>

          <Form.Label>Enter Time (if Applicable):</Form.Label>
          <Form.Control
            type="text"
            name="time"
            placeholder="Ex: 10 mins"
            onChange={handleInputChange}
            value={workoutFormData.time || ''}
          ></Form.Control>

          <Form.Label>Enter Disatnce (if Applicable) (miles):</Form.Label>
          <Form.Control
            type="text"
            name="distance"
            placeholder="Ex: 100 miles"
            onChange={handleInputChange}
            value={workoutFormData.distance || 0}
          ></Form.Control>

        </Form.Group>

        <Button className="add-button" variant="primary" type="submit">
          Add Workout
        </Button>

        {errorMessage && (
          <Alert variant="warning">{errorMessage}</Alert>
        )}

        {error && (
          <Alert variant="danger">
            Unable to add workout. Please try again.
          </Alert>
        )}
      </Form>
    </>
  )
};

export default AddWorkoutForm;