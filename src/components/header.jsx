import React, { useState, useEffect } from "react";
import logo from "../assets/signal.png"; // Adjust path as needed
import wifi from "../assets/wifi.png"; // Adjust path as needed
import battery from "../assets/battery.png"; // Adjust path as neede

export default function Header() {
    const [time, setTime] = useState(getCurrentTime());

    // Function to get formatted time (HH:MM)
    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up on unmount
    }, []);


    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <div id="logo1">JF</div>
                    {time}
                </a>
                <div className="d-flex justify-content-end align-items-center gap-2">
                    <img
                        src={logo}
                        id="signal-logo"
                        alt="signal logo"
                        width="30"
                        height="24"

                    />
                    <img
                        src={wifi}
                        id="wifi-logo"
                        alt="wifi logo"
                        width="30"
                        height="24"

                    />
                    <img
                        src={battery}
                        id="battery-logo"
                        alt="battery logo"
                        width="30"
                        height="24"

                    />
                </div>
            </div>
        </nav>
    );
}
