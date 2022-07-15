import "./App.css";
import Topnavbar from "./Components/Topnavbar";
import Hero from "./Components/Hero";
import Aboutus from "./Components/Aboutus";
import Director from "./Components/Director";
import Whyus from "./Components/Whyus";
import Timeline from "./Components/Timeline";
import Statistics from "./Components/Statistics";
import Footer from "./Components/Footer";
import Companies from "./Components/Companies";

const App = () => {
  return (
    <>
      <Topnavbar />
      <Hero />
      <br />
      <Aboutus />
      <br />
      <Director />
      <br />
      <Whyus />
      <br />
      <Timeline />
      <br />
      <Statistics />
      <br />
      <Companies />
      <Footer />
    </>
  );
};

export default App;
