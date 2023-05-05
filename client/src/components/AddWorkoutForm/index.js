//pop up alert for adding workout as form element
import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { ADD_WORKOUT } from "../utils/mutations";
import { GET_WORKOUTS } from '../utils/queries';    
import { saveWorkoutIds, getSavedWorkoutIds } from "../utils/localStorage";
import Auth from "../utils/auth";

//handle addworkout form submit
//user should have drop down list for the workout data that is pre-seeded
//in their list of exercise, there should be option to filter the exercise (bodyPart, equipment, target)

const AddWorkoutForm = () => {
    const [workoutFormData, setworkoutFormData] = useState({});

    const { loading, data } = useQuery(GET_WORKOUTS);
    const [addworkout, { error }] = useMutation(ADD_WORKOUT);

    

    const handleFormSubmit = async (event) => {
        
    }
};

export default AddWorkoutForm;