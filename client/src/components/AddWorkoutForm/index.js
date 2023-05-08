//pop up alert for adding workout as form element
import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { ADD_WORKOUT } from "../../utils/mutations";
import { GET_WORKOUTS } from '../../utils/queries';
import { saveWorkoutIds, getSavedWorkoutIds } from "../../utils/localStorage";
import Auth from "../../utils/auth";

//handle addworkout form submit
//user should have drop down list for the workout data that is pre-seeded
//in their list of exercise, there should be option to filter the exercise (bodyPart, equipment, target)

const AddWorkoutForm = () => {
    const [workoutFormData, setWorkoutFormData] = useState({});
    const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds);

    const { loading, data } = useQuery(GET_WORKOUTS); //get all of the workouts data
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

    useEffect(() => {
        return () => saveWorkoutIds(savedWorkoutIds);
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //loads workouts data to add into option list
        try {
            await addWorkout({
                variables: { workout: { ...workoutFormData } },
            });

            setWorkoutFormData({
                name: '',
                bodyPart: '',
                equipment: '',
                target: ''
            });

        } catch (err) {
            console.log(err);
        }

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setWorkoutFormData({ ...workoutFormData, [name]: value });
    };

    const handleAddWorkout = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            await addWorkout({
                variables: { workout: { ...workoutFormData } },
            });
            setWorkoutFormData({
                name: '',
                bodyPart: '',
                equipment: '',
                target: ''
            });
        } catch (err) {
            console.log(err);
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
                        value={workoutFormData.workout || ''}
                    >
                        <option value="">Select a workout</option>
                        {data.map((workout) => (
                            <option key={workout._id} value={workout._id}>
                                {workout.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Workout
                </Button>

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