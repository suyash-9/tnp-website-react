import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Companies.css";
import images from "../images";

AOS.init();

const Companies = () => {
  const listImages = images.map((element) => (
    <a href={element.website} class="border border-white rounded-xl drop-shadow-2xl shadow-lg bg-white hover:scale-110 transition-all duration-300 cursor-pointer flex justify-center items-center ">
        <img class="mx-auto w-[100px] aspect-auto" src={element.image} key={element.id} alt={`${element.name} logo`} loading="lazy" />
    </a>
  ));
  const elementInRow = 4;
  const noImages = images.length;
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
      <br />
      <div class="py-3 px-10 place-items-center">
        <div class={`grid grid-flow-row grid-cols-6 grid-rows-1 md:grid-cols-${elementInRow} md:grid-row-${Math.ceil(noImages / elementInRow)} gap-8`}>
          {listImages}
        </div>
      </div>
    </div>
  );
};

export default Companies;
