import Blockquote from "@yozora/react-blockquote";
import "@yozora/react-blockquote/lib/esm/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Whyus = () => {
  return (
    <div class="card-body" data-aos="fade-down">
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
        Why IIIT Naya Raipur?
      </h1>
      <div
        class="block"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "20px",
          marginLeft: 80,
          marginRight: 80,
          marginTop: 12,
        }}
      >
        <Blockquote style={{ fontSize: "20px" }}>
          <div
            style={{
              alignItems: "left",
            }}
          >
            IIIT-NR has set up state-of-the-art labs with the latest hardware
            and software tools in cutting-edge technology areas.
            <br />
            <br />
            Salient Features of Academic Curriculum:-
            <div class="px-5">
              <ul>
                <li>
                  • Basic Motto: Skill First, Theory later, Project integrated
                </li>
                <li>
                  • Run with Fractal Academic concept, similar to IIT Hyderabad.
                </li>
                <li>• Common syllabus for both CSE, ECE upto 4 semesters</li>
                <li>• Project in every semester from 5th Semester.</li>
                <li>• Eighth (8) semester dedicated for project work only</li>
                <li>
                  • Students are allowed to continue the same project from 5th
                  to 8th Semester to increase the depth or they can take up
                  different projects in different domains to increase their
                  breadth.
                </li>
              </ul>
            </div>
          </div>
        </Blockquote>
      </div>

      {/* <section class="text-white bg-gray-900">
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="max-w-xl">
            <h2 class="text-3xl font-bold sm:text-4xl">Why IIIT Naya Raipur?</h2>
            <p class="mt-4 text-gray-300">
            IIIT-NR has set up state-of-the-art labs with the latest hardware and software tools in cutting-edge technology areas.
            </p>
            <h3>Some Salient Features of Academic Curriculum:-</h3>
          </div>

          <div
            class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex items-start">
              <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">  
              </span>
              <div class="ml-4">
                <h2 class="text-lg font-bold">Basic Motto: Skill First, Theory later, Project integrated.</h2>
              </div>
            </div>

            <div class="flex items-start">
              <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
              </span>
              <div class="ml-4">
                <h2 class="text-lg font-bold">Run with Fractal Academic concept, similar to IIT Hyderabad.</h2>
              </div>
            </div>

            <div class="flex items-start">
              <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
              </span>
              <div class="ml-4">
                <h2 class="text-lg font-bold">Common syllabus for both CSE, ECE upto 4 semesters.</h2>
              </div>
            </div>

            <div class="flex items-start">
              <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
              </span>
              <div class="ml-4">
                <h2 class="text-lg font-bold">Project in every semester from 5th Semester.</h2>
              </div>
            </div>

            <div class="flex items-start">
              <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
              </span>
              <div class="ml-4">
                <h2 class="text-lg font-bold">Eighth (8) semester dedicated for project work only.</h2>
              </div>
            </div>

            <div class="flex items-start">
              <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
              </span>
              <div class="ml-4">
                <h2 class="text-lg font-bold">Students are allowed to continue the same project from 5th to 8th Semester to increase the depth.</h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Whyus;
