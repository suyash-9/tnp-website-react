// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from"./components/Footer";
import Statistics from"./components/Statistics";
import back from './resources/bg1.jpg';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
    <Navbar />
    <br/>
    <Timeline />
    <br />
    <Statistics />
    <br />
    <Footer />
    </>
  );
}

export default App;
