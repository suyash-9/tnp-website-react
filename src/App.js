// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import back from "./resources/bg1.jpg";
import Altnavbar from "./components/Altnavbar";

import Aboutus from "./components/AboutUs";

import Timeline from "./components/Timeline";
import TestimonyDirector from "./components/TestimonyDirector";
import Recruitus from "./components/Recruitus";
import Altheader from "./components/Altheader";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Altnavbar />
      <Altheader />
      <br />
      <Aboutus />
      <br />

      <br />
      <TestimonyDirector />
      <br />

      <Recruitus />
      <br />

      <Timeline />
      <br />
      <Statistics />
      <br />
      <Footer />
    </>
  );
}

export default App;
