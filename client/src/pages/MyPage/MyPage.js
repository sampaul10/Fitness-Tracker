import React, { useState } from "react";
import profilePic from "../../assets/images/profile-pic.png";
import CategoryMenu from "../../components/CategoryMenu";
import WorkoutList from "../../components/WorkoutList";
import AddWorkoutForm from '../../components/AddWorkoutForm';
import UpdateProfileForm from "../../components/UpdateProfileForm";
import { Modal, Button } from "react-bootstrap";
import { GET_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import './MyPage.css';

const MyPage = () => {
    const [showAddWorkoutModal, setShowAddWorkoutModal] = useState(false); //for addworkoutForm modal
    const [showProfileModal, setShowProfileModal] = useState(false); // for updateProfileForm modal

    const showAddWorkout = () => setShowAddWorkoutModal(true);
    const closeAddWorkout = () => setShowAddWorkoutModal(false);

    const showProfile = () => setShowProfileModal(true);
    const closeProfile = () => setShowProfileModal(false);

    const { data, loading } = useQuery(GET_ME);

    const userData = data?.me || {};

    if (loading) {
        return <h2>LOADING Profile...</h2>;
    }

    return (
        <div>
            <h2 className="section-header">My Page</h2>
            <img src={profilePic} alt="Profile Pic" />
            <h3>Welcome! {userData.firstName}</h3>
            <ul>
                <li>Age: {userData.age}</li>
                <li>Height: {userData.height} cm</li>
                <li>Weight: {userData.weight} kg</li>
            </ul>

            {/* Updating Profile  */}
            <div>
                <Modal show={showProfileModal} onHide={closeProfile}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Render updateProfileForm component when modal is opened*/}
                        <UpdateProfileForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeProfile}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Button className="show-add-workout-modal" onClick={showProfile}>Update Profile</Button>
            </div>

            <div className="add-workout">
                <CategoryMenu /> {/* Showing exercise category for user's excersie list (categorized by target) */}
                {/*  Showing exercise user's exercise list and option to remove (fetch user's data's 'workouts' and loop thru to display it along with the delete button(or share button)*/}
                <WorkoutList />
                {/* adding workout  */}
                <Modal show={showAddWorkoutModal} onHide={closeAddWorkout}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Workout!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Render AddWorkoutForm component when modal is opened*/}
                        <AddWorkoutForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeAddWorkout}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Button className="show-add-workout-modal" onClick={showAddWorkout}>Add Workout</Button>
            </div>

        </div>
    );
};

export default MyPage;
