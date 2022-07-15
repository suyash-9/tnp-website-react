import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";

const Topnavbar = () => {
  const sections = [
    {
      id: 1,
      title: "Home",
      ref: "#navHome",
    },
    {
      id: 2,
      title: "About Us",
      ref: "#navAboutus",
    },
    {
      id: 3,
      title: "Why IIITNR",
      ref: "#navWhyus",
    },
    {
      id: 4,
      title: "Timeline",
      ref: "#navTimeline",
    },
    {
      id: 5,
      title: "Statistics",
      ref: "#navStatistics",
    },
    {
      id: 6,
      title: "Our Recruiters",
      ref: "#navCompanies",
    },
    {
      id: 7,
      title: "Contact",
      ref: "#navFooter",
    },
  ];

  const listNavItems = sections.map((element) => (
    <Navbar.Link href={element.ref}>{element.title}</Navbar.Link>
  ));

  return (
    <div class="dark">
      <Navbar fluid={true} rounded={false}>
        <Navbar.Brand href="#">
          <img src={logo} class="mr-3 h-6 sm:h-9" alt="IIIT Naya Raipur Logo" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Placement Cell IIIT-Naya Raipur
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>{listNavItems}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topnavbar;
