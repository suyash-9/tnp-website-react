import React from "react";
import "./Timeline.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Timeline = () => {
  const items = [
    {
      date: "July 2022",
      title: "Step 1",
      content:
        "IIIT Naya Raipur sends out invitations to the companies with relevant information",
    },
    {
      date: "July 2022",
      title: "Step 2",
      content: "Companies register through the Internship Announcement Form.",
    },
    {
      date: "July 2022",
      title: "Step 3",
      content: "Student Coordinators are allocated as SPOCs for each company.",
    },
    {
      date: "July 2022",
      title: "Step 4",
      content:
        "The pre-hiring process including PPT, Written tests (Online/Offline, GD, etc.), interview is carried out by the companies.",
    },
    {
      date: "July 2022",
      title: "Step 5",
      content:
        "Students are selected and hired by companies through the rolling of offers.",
    },
  ];

  const listItems = items.map((element) => (
    <li className="event" data-date={element.date}>
      <h3>{element.title}</h3>
      <p>{element.content}</p>
    </li>
  ));

  return (
    <div className="card-body" data-aos="fade-down">
      <h1
        className="card-title"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          marginTop: 0,
          color: " #0a4275",
        }}
      >
        Timeline
      </h1>
      <br />
      <div id="content">
        <ul className="timeline">{listItems}</ul>
      </div>
    </div>
  );
};

export default Timeline;
