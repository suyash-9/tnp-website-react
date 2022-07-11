import React from "react";
import logo from "../resources/logo.png";
import Aboutus from "./AboutUs";

const Altnavbar = () => {

  const sections = [{
    title: 'Home',
    ref: '#'
  },{
    title: 'About Us',
    ref: '#'
  },{
    title: 'Why IIITNR',
    ref: '#'
  },{
    title: 'Timeline',
    ref: '#'
  },{
    title: 'Statistics',
    ref: '#'
  },{
    title: 'Our Recruiters',
    ref: '#'
  },{
    title: 'Contact',
    ref: '#'
  }]

  const listNavItems = sections.map((element) => (
    <li>
      <a
        href={element.ref}
        class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
        aria-current="page"
      >
        {element.title}
      </a>
    </li>
  ));

  return (
    <nav class="bg-blue border-gray-200 py-3 sm:py-2 px-2 sm:px-4 dark:bg-gray-800" >
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://www.iiitnr.ac.in/" class="flex items-center">
          <img src={logo} class="mr-3 h-6 sm:h-9" alt="IIIT Naya Raipur Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Placement Cell IIIT-Naya Raipur
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {listNavItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Altnavbar;
