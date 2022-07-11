import React from "react";
import CountUp from 'react-countup';
import "./Statistics.css";

export default function Statistics() {
    return (
        <>
            <h2 style={{
            alignContent: "center",
            textAlign: "center",
            }}>
                Statistics (2021-2022)
            </h2>

            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Total Offers</h4>
                            <p class="card-text"><CountUp start={0} end={105} duration={4.0}/>+</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Total Companies</h4>
                            <p class="card-text"><CountUp start={0} end={45} duration={4.0}/>+</p>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Highest CTC</h4>
                            <p class="card-text">57 LPA</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Average CTC</h4>
                            <p class="card-text">12.67 LPA</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Median CTC</h4>
                            <p class="card-text">11.75 LPA</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}