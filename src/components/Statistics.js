import React from "react";
import CountUp from 'react-countup';
import "./Statistics.css";

export default function Statistics() {
    return (
        <>
            <div className="card-body">
                <CountUp start={0} end={2000}/>
            </div>
        </>
    );
}