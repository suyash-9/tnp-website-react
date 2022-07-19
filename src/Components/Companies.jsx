import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../images";

AOS.init();

const Companies = () => {
  const listImages = images.map((element) => (
    <a
      key={element.id}
      href={element.website}
      class="border border-white rounded-xl drop-shadow-2xl shadow-lg bg-white hover:scale-110 transition-all duration-300 cursor-pointer flex justify-center items-center "
    >
      <img
        class="mx-auto h-[100px] w-fit md:w-[100px] md:h-fit aspect-auto"
        src={element.image}
        key={element.id}
        alt={`${element.name} logo`}
        loading="lazy"
      />
    </a>
  ));

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
        <div
          class={`grid grid-cols-1 hover:grid-cols-6 gap-8`}
        >
          {listImages}
        </div>
      </div>
    </div>
  );
};

export default Companies;
