import React from "react";
import profilePic from "../../assets/images/profile-pic.png"
import CategoryMenu from "../CategoryMenu";
import WorkoutList from "../WorkoutList";

const MyPage = () => (
    <div>
        <h2 className="section-header">My Page</h2>
        <img src={profilePic} alt="Profile Pic" />
        <div>
            <CategoryMenu /> {/* Showing exercise category for user's excersie list */}
            <WorkoutList /> {/* Showing exercise user's exercise list */}
            {/* Showing exercise user's exercise list */}
        </div>
    </div>
);

export default MyPage;