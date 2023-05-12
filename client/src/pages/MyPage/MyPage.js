import React, { useState } from "react";
import profilePic from "../../assets/images/profile-pic.png";
import CategoryMenu from "../../components/CategoryMenu";
import WorkoutList from "../../components/WorkoutList";
import AddWorkoutForm from '../../components/AddWorkoutForm';
import { Modal, Button } from "react-bootstrap";
import './MyPage.css';

const MyPage = () => {
    const [showModal, setShowModal] = useState(false);

    const showAddWorkoutModal = () => setShowModal(true); //show modal
    const closeAddWorkoutModal = () => setShowModal(false); //hide modal

    return (
        <div>
            <h2 className="section-header">My Page</h2>
            <img src={profilePic} alt="Profile Pic" />
            <div className="add-workout">
                <CategoryMenu /> {/* Showing exercise category for user's excersie list (categorized by target) */}
                {/*  Showing exercise user's exercise list and option to remove (fetch user's data's 'workouts' and loop thru to display it along with the delete button(or share button)*/}
                <WorkoutList />
                {/* adding workout  */}
                <Modal show={showModal} onHide={closeAddWorkoutModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Workout!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Render AddWorkoutForm component when modal is opened*/}
                        <AddWorkoutForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeAddWorkoutModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Button className="show-add-workout-modal" onClick={showAddWorkoutModal}>Add Workout</Button>
            </div>

        </div>
    );
};

export default MyPage;
