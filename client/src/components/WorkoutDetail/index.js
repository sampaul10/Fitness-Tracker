import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import Auth from '../../utils/auth';
import { REMOVE_WORKOUT } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries'
import './workoutdetail.css'

const WorkoutDetail = (props) => {
    //console.log(props.workout.name);
    const [removeWorkout, { error }] = useMutation(REMOVE_WORKOUT, {
        refetchQueries: [{ query: GET_ME }] //refetch queries to udpate the workout list after deleting workout
      });

    const handleRemoveWorkout = async (id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try{
            await removeWorkout({
                variables: { _id: id },
            });
            props.onClose();
        } catch (err) {
            console.error(err)
        }

    };

    return (
        <div>
            <h2>Workout: [{props.workout.name}]</h2>
            <img src={props.workout.gifUrl} alt="workout gif preview"></img>
            <ul>
                <li>Body Part: {props.workout.bodyPart}</li>
                <li>Equipment: {props.workout.equipment}</li>
                <li>Target: {props.workout.target}</li>
                <li>Repetition: {props.workout.repetition}</li>
                <li>Time: {props.workout.time}</li>
                <li>Distance: {props.workout.distance}</li>
            </ul>
            <Button className='btn-block btn-danger delete-workout' onClick={() => handleRemoveWorkout(props.workout._id)}>
                Delete Workout
            </Button>
        </div>


    );
}

export default WorkoutDetail;

