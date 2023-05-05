import React, { useState } from "react";
import profilePic from "../../assets/images/profile-pic.png";
import CategoryMenu from "../CategoryMenu";
import WorkoutList from "../WorkoutList";
import AddWorkoutForm from '../AddWorkoutForm';
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

const MyPage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
        <h2 className="section-header">My Page</h2>
        <img src={profilePic} alt="Profile Pic" />
        <div>
          <CategoryMenu />{" "}
          {/* Showing exercise category for user's excersie list */}
          <WorkoutList />{" "}
          {/* Showing exercise user's exercise list and option to remove */}
          {/* adding workout  */}
          
        </div>
      </div>
    );
};

export default MyPage;
