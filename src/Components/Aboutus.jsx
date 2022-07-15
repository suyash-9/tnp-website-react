import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Aboutus = () => {
  return (
    <>
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
          About Us
        </h1>

        <div
          style={{
            marginLeft: 80,
            marginRight: 80,
            marginTop: 12,
            flexDirection: "row",
            flexWrap: "wrap",
            borderRadius: 10,
            fontSize: "17px",
            // boxShadow: '0px 0px 10px 0.8px #3474dbb2',
          }}
        >
          "The Training and Placement Office at DSPM IIIT-Naya Raipur is
          concerned with every activity that enables students to learn and grow
          outside the Institute campus. On one hand, it collaborates with
          leading organizations and institutes in setting up internship and
          training program for the students while on other it enables the
          placement of students passing out from the Institute. The office
          liaises with prospective recruiters such as industrial establishments
          and corporate houses which conduct campus interviews and select
          students from both disciplines. It provides infra-structural
          facilities to conduct group discussions, tests, and interviews and
          other logistics required for the same.
          <br />
          <br />
          The Training and Placement Cell of DSPM IIIT-Naya Raipur strives to
          get every student trained in the Institute placed in an organization
          of his or her liking and pursue their passion. To achieve this goal,
          this office focusses not only on academic skills but also on physical,
          behavioral and societal skills required to be a team player in the
          organization. For four years, we nurture our students to develop their
          all round abilities so as when they land up in the competitive world,
          they do not lag behind."
        </div>
      </div>
    </>
  );
};

export default Aboutus;
