import React, { useState, useEffect } from 'react';


export default function DetailHeader() {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState({
        hours: null,
        min: null
    });

    useEffect(() => {
        setCurrentDate(new Date().toDateString());

        setInterval(() => {
            const now = new Date();

            setCurrentTime({
                hours: now.getHours(),
                min: now.getMinutes()
            })
        }, 1000);

    }, [])


    console.log(currentTime.hours + ":" + currentTime.min);
    return (
        <div className="header-wrapper">
            <div className="tempature-wrapper">
                <h3>{}</h3>
            </div>

            <div className="time-wrapper">
                <h3>{currentDate.toString()}</h3>
            </div>
        </div>
    )
}