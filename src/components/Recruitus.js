import React from 'react'
import Blockquote from "@yozora/react-blockquote";
import "@yozora/react-blockquote/lib/esm/index.css";
import "./Recruitus.css";

const Recruitus = () => {
  return (
    <div class="card-body">
      <h1
        class="card-title"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          marginTop: 0,
        }}
      >
        Why IIIT Naya Raipur? 
      </h1>
      <div
        className="block"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "20px",
          marginLeft: 80,
          marginRight: 80,
          marginTop: 12,
        }}
      >
        <Blockquote style={{ fontSize: "20px" }}>
         
            <div style={{
              alignItems: "left",
        }}>
    IIIT-NR has set up state-of-the-art labs with the latest hardware and software tools in cutting-edge technology areas.
    <br/><br/>
    Salient Features of Academic Curriculum:-
            <div>
              <ul>
                <li>Basic Motto: Skill First, Theory later, Project integrated</li>
                <li>Run with Fractal Academic concept, similar to IIT Hyderabad.</li>
                <li>Common syllabus for both CSE, ECE upto 4 semesters</li>
                <li>Project in every semester from 5th Semester.</li>
                <li>Eighth (8) semester dedicated for project work only</li>
                <li>Students are allowed to continue the same project from 5th to 8th Semester to increase the depth or they can take up different projects in different domains to increase their breath.</li>
              </ul>
              </div>
              </div>
            
        </Blockquote>
      </div>
    </div>
  )
}

export default Recruitus