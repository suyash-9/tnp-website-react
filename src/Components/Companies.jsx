import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Companies.css"

AOS.init();

const Companies = () => {
  return (
    <div data-aos="fade-down">
      <h1
        class="card-title"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          marginTop: 0,
          color: " #0a4275",
        }}
      >
        Past Recruiters
      </h1>
      <div>
        {/* {code here, link:https://www.youtube.com/watch?v=W0bEL93tt4k } */}
      </div>
    </div>
  );
};

export default Companies;
