import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import Auth from '../../utils/auth';
import { REMOVE_WORKOUT } from '../../utils/mutations';

const WorkoutDetail = (props) => {
    //console.log(props.workout.name);
    const [removeWorkout, { error }] = useMutation(REMOVE_WORKOUT);

    const handleRemoveWorkout = async (id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try{
            await removeWorkout({
                variables: { _id: id },
            });
        } catch (err) {
            console.error(err)
        }

    };

    return (
        <div>
            <h2>Workout: [{props.workout.name}]</h2>
            <img src={props.workout.gifUrl}></img>
            <ul>
                <li>Body Part: {props.workout.bodyPart}</li>
                <li>Equipment: {props.workout.equipment}</li>
                <li>Target: {props.workout.target}</li>
                <li>Repetition: {props.workout.repetition}</li>
                <li>Time: {props.workout.time}</li>
                <li>Distance: {props.workout.distance}</li>
            </ul>
            <Button className='btn-block btn-danger' onClick={() => handleRemoveWorkout(props.workout._id)}>
                Delete Workout
            </Button>
        </div>


    );
}

export default WorkoutDetail;

