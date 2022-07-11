// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from"./components/Footer";
import Statistics from"./components/Statistics";
import back from './resources/bg1.jpg';

import Aboutus from './components/AboutUs';
import WhyUs from './components/WhyUs';
import Timeline from './components/Timeline';
import TestimonyDirector from './components/TestimonyDirector';


function App() {
  return (
    <>
    <Navbar />
    <br/>
    <Aboutus/>
    <br/>

    <br/>
    <TestimonyDirector/>
    <br/>
    <br/>

    <WhyUs />
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
