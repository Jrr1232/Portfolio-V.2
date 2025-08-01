import React, { useState } from "react";
import weatherAppImage from '../assets/Screenshot 2025-07-31 202842.png'; // Import the image
import Whispr from '../assets/whispr_demo.png'; // Import the image
import SalonFlow from '../assets/cesar-saravia-uM6IhU0UZg0-unsplash.jpg'; // Import the image
import Javascript from '../assets/JavaScript-logo.png'; // Import the image
import Portfolio from '../assets/Screenshot 2025-07-31 204347.png'; // Import the image
import PasswordManager from '../assets/ChatGPT Image Jul 31, 2025, 08_09_24 PM.png'; // Import the image

export default function Projects() {
    const [hovered, setHovered] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState("");
    const [fontColor, setFontColor] = useState("rgba(249, 248, 248, 1)"); // Default font color

    const handleFontColorChange = (color) => {
        setFontColor(color);
    };
    // Handle mouse hover state and set background image dynamically
    const handleMouseOver = (imageUrl) => {
        setHovered(true);
        setBackgroundImage(imageUrl); // Set the background image when hovered
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setBackgroundImage(""); // Reset the background when mouse leaves
    };

    // Handle zoom-in effect when hovering over a list item
    const handleZoom = (event) => {
        event.target.style.transform = "scale(1.2)";
        event.target.style.transition = "transform 0.3s ease"; // Smooth zoom transition
    };

    // Handle zoom-out effect when mouse leaves the list item
    const handleZoomOut = (event) => {
        event.target.style.transform = "scale(1)";
    };

    return (
        <div
            className="projects-container"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : "", // Dynamic background image
            }}
        >
            <ul className="projects-list">
                <li
                    onMouseOver={(e) => {
                        handleMouseOver(SalonFlow);
                        handleZoom(e);
                        e.target.style.color = 'white'; // Change font color on hover
                    }}
                    onMouseLeave={(e) => {
                        handleMouseLeave();
                        handleZoomOut(e);
                        e.target.style.color = 'black';
                    }}
                >
                    SalonFlow
                </li>
                <li
                    onMouseOver={(e) => {
                        handleMouseOver(PasswordManager);
                        handleZoom(e);
                    }}
                    onMouseLeave={(e) => {
                        handleMouseLeave();
                        handleZoomOut(e);
                    }}
                >
                    Password Generator
                </li>
                <li
                    onMouseOver={(e) => {
                        handleMouseOver(Whispr);
                        handleZoom(e);
                    }}
                    onMouseLeave={(e) => {
                        handleMouseLeave();
                        handleZoomOut(e);
                    }}
                >
                    Whispr
                </li>
                <li
                    onMouseOver={(e) => {
                        handleMouseOver(weatherAppImage);
                        handleZoom(e);

                    }}
                    onMouseLeave={(e) => {
                        handleMouseLeave();
                        handleZoomOut(e);
                    }}
                >
                    Weather API
                </li>
                <li
                    onMouseOver={(e) => {
                        handleMouseOver(Portfolio);
                        handleZoom(e);
                    }}
                    onMouseLeave={(e) => {
                        handleMouseLeave();
                        handleZoomOut(e);
                    }}
                >
                    Portfolio V.1
                </li>
            </ul>
        </div>
    );
}
