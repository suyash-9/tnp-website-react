import React from 'react'
import "./Recruitus.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Recruitus = () => {
  return (
    <div class="card-body" data-aos="fade-down">
      <h1
        class="card-title"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          marginTop: 0,
          color:" #0a4275"
        }}
      >
        Why IIIT Naya Raipur? 
      </h1>
      
    </div>
  )
}

export default Recruitus