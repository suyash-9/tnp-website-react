import { Navbar, Dropdown } from "flowbite-react";
import logo from "../assets/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import placementBrochure from "../assets/brochures/placementbrochure.pdf";
import internshipBrochure from "../assets/brochures/internshipbrochure.pdf";

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
    <Navbar.Link key={element.id} href={element.ref}>
      {element.title}
    </Navbar.Link>
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
        <Navbar.Collapse>
          {listNavItems}
          <div className="flex md:order-2" class="text-white">
            <Dropdown
              label="Brochure"
              inline={true}
              fluid={true}
              positionInGroup={"middle"}
            >
              <a href={placementBrochure}>
                <Dropdown.Item>Placement Brochure</Dropdown.Item>
              </a>
              <Dropdown.Divider />
              <a href={internshipBrochure}>
                <Dropdown.Item>Internship Brochure</Dropdown.Item>
              </a>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topnavbar;
