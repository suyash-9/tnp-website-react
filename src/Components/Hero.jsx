import back from "../assets/back.jpeg";

const Hero = () => {
  const headerText = {
    topBlack: "Welcome to official website of ",
    topBlue: "Placement Cell IIIT-Naya Raipur.",
    bottomContent:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt\nillo tenetur fuga ducimus numquam ea!",
  };

  return (
    <section class="relative bg-white" style={{ margin: 0 }}>
      <img
        class="absolute inset-0 object-[70%] sm:object-[25%] object-cover w-full h-full opacity-30 sm:opacity-100"
        src={back}
        alt="IIIT Naya Raipur"
      />

      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            {headerText.topBlack}
            <strong class="font-extrabold text-blue-700 sm:block">
              {headerText.topBlue}
            </strong>
          </h1>

          {/* <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            {headerText.bottomContent}
          </p> */}

          {/* <div class="flex flex-wrap gap-4 mt-8 text-center">
            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-blue-600 sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-blue-600 sm:w-auto hover:text-blue-700 active:text-blue-500 focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
