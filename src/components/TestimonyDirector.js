import "animate.css/animate.min.css";
import Blockquote from "@yozora/react-blockquote";
import "@yozora/react-blockquote/lib/esm/index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function TestimonyDirector() {
  return (
    <>
      <h2
        style={{
          alignContent: "center",
          textAlign: "center",
        }}
      >
        From Director's Desk
      </h2>

      <div
        className="block"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "20px",
          marginLeft: 80,
          marginRight: 80,
          marginTop: 12,
         
        //   boxShadow: '0px 0px 12px 0.8px #3474dbb2',
        }}
      >
        <Blockquote style={{ fontSize: "20px" }}>
         
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
              <img src="https://www.iiitnr.ac.in/sites/default/files/faculty_photo/director_mod.jpg"></img>
            
            <div style={{
                marginLeft:20
            }}>
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. "
              </div>
              </div>
            
          
        </Blockquote>
      </div>
    </>
  );
}
