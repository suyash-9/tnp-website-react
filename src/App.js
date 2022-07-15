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
      <div id="navHome">
        <Topnavbar />
        <Hero />
      </div>
      <br />

      <div id="navAboutus">
        <Aboutus />
      </div>
      <br />

      <div id="navDirector">
        <Director />
      </div>
      <br />

      <div id="navWhyus">
        <Whyus />
      </div>
      <br />

      <div id="navTimeline">
        <Timeline />
      </div>
      <br />

      <div id="navStatistics">
        <Statistics />
      </div>
      <br />

      <div id="navCompanies">
        <Companies />
      </div>
      <br />

      <div id="navFooter">
        <Footer />
      </div>
    </>
  );
};

export default App;
