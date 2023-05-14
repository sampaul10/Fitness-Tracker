import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import './Dashboard.css';
import image1 from '../assets/images/dashboard/image1.jpeg'
import image2 from '../assets/images/dashboard/image2.jpeg'
import image3 from '../assets/images/dashboard/image3.jpeg'
import image4 from '../assets/images/dashboard/image4.jpeg'
import image5 from '../assets/images/dashboard/image5.jpeg'

const Dashboard = () => {
    const images = [
        {
            src: image1,
            alt: "Image 1",
        },
        {
            src: image2,
            alt: "Image 2",
        },
        {
            src: image3,
            alt: "Image 3",
        },
        {
            src: image4,
            alt: "Image 4",
        },
        {
            src: image5,
            alt: "Image 5",
        }
    ];

    return (
        <div>
            <div className="dashpic gold">
                <header className="header">
                    <h1 className="u-fit metal">
                        Welcome to U-Fit! <span className="texture"></span> </h1>
                </header>
            </div>
            <div>
                <div >
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <img src={image.src} alt={image.alt} className="dashboard-img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default Dashboard;
