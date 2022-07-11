// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import back from "./resources/bg1.jpg";
import Timeline from "./components/Timeline";
import Recruitus from "./components/Recruitus";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <Recruitus />
      <br />
      <Timeline />
      <br />
      <Footer />
    </>
  );
}

export default App;
