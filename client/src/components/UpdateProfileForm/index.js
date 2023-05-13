import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../utils/mutations";
import { GET_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import './updateprofileform.css'

const UpdateProfileForm = () => {
    const { data, loading } = useQuery(GET_ME);

    const userData = data?.me || {};

    const [profileFormData, setProfileFormData] = useState({
        age: userData.age,
        weight: userData.weight,
        height: userData.height,
    });

    const [updateUser, { error }] = useMutation(UPDATE_USER);

    const handleFormSubmit = async () => {
        //event.preventDefault();
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            //console.log()
            const updatedUser = await updateUser({
                variables: {
                    age: parseInt(profileFormData.age),
                    weight: parseFloat(profileFormData.weight),
                    height: parseFloat(profileFormData.height)
                }
            });
            //console.log(updatedUser);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileFormData({
            ...profileFormData,
            [name]: value,
        });
    };

    return (

        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="age">Age:</label>
                    <input
                        placeholder="Age"
                        name="age"
                        type="number"
                        id="age"
                        defaultValue={userData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input
                        placeholder="weight"
                        name="weight"
                        type="number"
                        id="weight"
                        defaultValue={userData.weight}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="height">Height (cm):</label>
                    <input
                        placeholder="height"
                        name="height"
                        type="number"
                        id="height"
                        defaultValue={userData.height}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row flex-end">
                    <button className="submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateProfileForm;