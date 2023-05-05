import React, { useState } from "react";
import profilePic from "../../assets/images/profile-pic.png";
import CategoryMenu from "../CategoryMenu";
import WorkoutList from "../WorkoutList";
import AddWorkoutForm from '../AddWorkoutForm';
import { Modal, Button } from "react-bootstrap";

const MyPage = () => {
    const [showModal, setShowModal] = useState(false);

    const showAddWorkoutModal = () => setShowModal(true); //show modal
    const closeAddWorkoutModal = () => setShowModal(false); //hide modal

    return (
        <div>
        <h2 className="section-header">My Page</h2>
        <img src={profilePic} alt="Profile Pic" />
        <div>
          <CategoryMenu /> {/* Showing exercise category for user's excersie list (categorized by target) */}
          <WorkoutList /> {/* Showing exercise user's exercise list and option to remove (fetch user's data's 'workouts' and loop thru to display it along with the delete button(or share button)*/}
          {/* adding workout  */}
          <Button onClick={showModal}></Button>
        </div>
        <Modal show={showAddWorkoutModal} onHide={closeAddWorkoutModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Workout!</Modal.Title>
            </Modal.Header>
            <Modal.Title>
                {/* Render AddWorkoutForm component when modal is opened*/}
                <AddWorkoutForm />
            </Modal.Title>
        </Modal>
      </div>
    );
};

export default MyPage;
