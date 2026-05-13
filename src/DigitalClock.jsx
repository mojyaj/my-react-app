import React, { useState, useEffect } from 'react'

export default function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect( () => {
            const intervalId = setInterval( () => {
                setTime(new Date());
            }, 1000);

            // When 'DigitalClock' component is un-mounted, do some clean up
            return () => {
                clearInterval(intervalId);
            }
        }, 
        []
    );

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem =  hours >= 12 ? "PM" : "AM";

        // calculate 'Military Time'
        // Short Circuit: 
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        // determine if the 'number' is single digit
        return ( number < 10 ? "0" : "" ) + number;
    }

    return(
        <div className="clock-container">
            <div className="gradient-card">
                <div className="clock">
                    <span> { formatTime() } </span>
                </div>
            </div>
        </div>

    );
}