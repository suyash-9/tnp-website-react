import "../css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import axios from "axios";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import placementBrochure from "../assets/brochures/placementbrochure.pdf";
import internshipBrochure from "../assets/brochures/internshipbrochure.pdf";
import { useState,useEffect } from "react";

AOS.init();

const baseURL = "https://sheet.best/api/sheets/320007a0-d938-4c34-87b8-526164381324";

const Footer = () => {
  const soicalMediaHandles = [
    {
      id: 1,
      link: "https://www.facebook.com/IIITNROfficial/",
      name: "Facebook",
      tag: <AiFillFacebook color="white" />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/iiitnrofficial/?hl=en",
      name: "Instagram",
      tag: <AiFillInstagram color="white" />,
    },
    {
      id: 3,
      link: "https://twitter.com/IIITNayaRaipur?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      name: "twitter",
      tag: <AiFillTwitterCircle color="white" />,
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/placement-cell-iiitnr/",
      name: "Linkedin",
      tag: <AiFillLinkedin color="white" />,
    },
    {
      id: 5,
      link: "mailto:placement@iiitnr.edu.in",
      name: "mail",
      tag: <AiFillMail color="white" />,
    },
  ];

  const listSoicalMediaHandles = soicalMediaHandles.map((element) => (
    <a
      class="p-2 border rounded-full border-white/25 hover:opacity-75"
      href={element.link}
      target="_blank"
      rel="noreferrer"
      key={element.id}
    >
      <span class="sr-only"> {element.name} </span>
      {element.tag}
    </a>
  ));

  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    contact: "",
  });

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setInputField(response.data);
    });
  }, []);

  const inputsHandler = (e) => {
    setInputField((inputField) => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
  };

  const submitButton = () => {
    axios
      .post(`${baseURL}/1`)
      .then((response) => {
        setInputField(response.data);
      });
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer
      class="text-white bg-gray-900 lg:grid lg:grid-cols-5"
      data-aos="fade-up"
    >
      <aside class="hidden lg:relative lg:col-span-2 lg:block">
        <div class="grid grid-cols-1">
          <div
            style={{
              marginTop: 20,
              marginLeft: 20,
              display: "flex",
              flexDirection: "column",
              flexFlow: "column nowrap",

              marginTop: "50px",
            }}
          >
            <p
              class="font-medium"
              style={{
                fontSize: "20px",
                textDecorationLine: "underline",
                textUnderlineOffset: "10px",
              }}
            >
              Address :
            </p>
            <p
              class="font-medium"
              style={{
                fontSize: "13px",
                display: "flex",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                marginTop: "12px",
              }}
            >
              IIIT–Naya Raipur Plot No. 7, Sector 24, Near Purkhoti Muktangan,
              <br />
              Atal Nagar – 493661 Chhattisgarh
            </p>
            <br />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6010852008485!2d81.76397671476502!3d21.12846438594454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1656687809693!5m2!1sen!2sin"
              width="600"
              height="450"
              marginHeight={40}
              style={{
                border: 0,
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </aside>

      <div class="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3">
        <div class="grid grid-cols-1 gap-0 sm:grid-cols-2">
          <div>
            <p class="font-medium">
              <p
                class="font-medium"
                style={{
                  fontSize: "20px",
                  textDecorationLine: "underline",
                  textUnderlineOffset: "10px",
                }}
              >
                Want to Reach Us :
              </p>
              <br />

              {/* <div class="relative mb-6">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6 text-gray-500 dark:text-gray-400"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name ..."
                  onChange={inputsHandler}
                  value={inputField.name}
                />
              </div>

              <div class="relative mb-6">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  onChange={inputsHandler}
                  value={inputField.email}
                />
              </div>

              <div class="relative mb-6">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 -3 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Contact Number"
                  onChange={inputsHandler}
                  value={inputField.contact}
                />
              </div> */}

              {/* <Button outline={false} gradientDuoTone="cyanToBlue" onClick={submitButton}>
                Submit
              </Button> */}

              <Button outline={false} gradientDuoTone="cyanToBlue" onClick={() => openInNewTab('https://forms.gle/Kh3QpW2zrUXEc5gt9')}>
                Contact Us
              </Button>
            </p>
            {/* <ul class="mt-8 space-y-2 text-sm">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul> */}

            <div class="flex mt-16 space-x-3">{listSoicalMediaHandles}</div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p class="font-medium" style={{ fontSize: "20px" }}>
                Quick Links
              </p>

              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-300">
                <a
                  class="hover:opacity-75"
                  href="https://www.iiitnr.ac.in/"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  IIIT Naya Raipur Website{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href={placementBrochure}
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Placement Brochure{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href={internshipBrochure}
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Internship Brochure{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href="https://www.iiitnr.ac.in/faculty"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Faculty Profiles{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href="https://www.iiitnr.ac.in/content/btech-curriculum"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Curriculum{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href="http://sac.iiitnr.ac.in/"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Student Activities{" "}
                </a>
              </nav>
            </div>

            <div>
              <p class="font-medium">
                <p
                  class="font-medium"
                  style={{
                    fontSize: "20px",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "10px",
                  }}
                >
                  Contact :
                </p>

                <p class="font-medium" style={{ marginTop: "12px" }}>
                  Amit Kumar Agrawal (Faculty Incharge)
                </p>
                <div style={{ display: "flex" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    class="hover:opacity-75"
                    href="tel:+91-771-2474032"
                    style={{ marginLeft: "6px", fontSize: "13px" }}
                  >
                    +91-771-2474032
                  </a>
                </div>

                <div style={{ display: "flex" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    onClick={() =>
                      (window.location = "mailto:amitag@gmail.com")
                    }
                    class="hover:opacity-75"
                    href="mail:amitag@iiitnr.edu.in"
                    style={{ marginLeft: "6px", fontSize: "13px" }}
                  >
                    amitag@iiitnr.edu.in
                  </a>
                </div>
                <br />

                <p class="font-medium">IIIT Naya Raipur </p>
                <div style={{ display: "flex" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    class="hover:opacity-75"
                    href="tel:+91-771-2474182"
                    style={{ marginLeft: "6px", fontSize: "13px" }}
                  >
                    +91-771-2474182
                  </a>
                </div>

                <div style={{ display: "flex" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    onClick={() =>
                      (window.location = "mailto:iiitnr@iiitnr.ac.in")
                    }
                    class="hover:opacity-75"
                    href=""
                    style={{ marginLeft: "6px", fontSize: "13px" }}
                  >
                    iiitnr@iiitnr.ac.in
                  </a>
                </div>
              </p>
              <br />

              {/* <ul class="mt-8 space-y-2 text-sm">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul> */}
            </div>
          </div>
        </div>

        <div class="pt-12 mt-12 border-t border-gray-800">
          <div class="text-sm text-gray-300 sm:items-center sm:justify-between sm:flex">
            <div class="flex space-x-3">
              {/* <a class="hover:opacity-75" href="">
                {" "}
                Privacy Policy{" "}
              </a>
              <a class="hover:opacity-75" href="">
                {" "}
                Terms & Conditions{" "}
              </a>
              <a class="hover:opacity-75" href="">
                {" "}
                Returns Policy{" "}
              </a> */}
            </div>

            <p class="sm:mt-0">&copy; 2022 Placement Cell IIIT Naya Raipur.</p>
          </div>

          <p class="mt-2 text-xs text-gray-500">
            This website is the intellectual property of Placement Cell IIIT
            Naya Raipur and is maintained by students at Placement Cell IIIT
            Naya Raipur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
