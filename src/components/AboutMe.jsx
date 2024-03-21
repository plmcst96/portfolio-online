import { Button, Col, Container, Row } from "react-bootstrap";
import me from "../assets/me.png";
import 'animate.css';
import pdf from "../assets/CV-CristinaPalmisani.pdf"

export const AboutMe = () => {

  return (
    <Container fluid className="mx-lg-5 mx-2" id="about" style={{ marginTop: "7em" }}>
      <Row>
        <Col sm={12} xl={3} className="d-flex align-items-center flex-column">
          <div className="animate__animated animate__pulse">
            <p className="tags">&#60;Developer&#62;</p>
            <h2 className="fw-bold fs-xs-5 ps-5">
              Cristina <br />
              Palmisani
            </h2>
            <p className="tags">&#60; /Developer&#62;</p>
          </div>
        </Col>
        <Col sm={12} xl={3} className="d-flex flex-column align-items-center animate__animated animate__bounceIn animate__delay-1s" style={{ marginTop: "10em" }}>
          <img src={me} alt="me" width={"360px"} height={"360px"} style={{ objectFit: "contain" }}className="mb-5"/>
          <Button variant="outline-danger" className="w-50 mb-5 tags rounded-pill">
            <a
              href={pdf} // Percorso del tuo file PDF
              download="CV-CristinaPalmisani.pdf"
              className="nav-link "
            >
              Download CV
            </a>
            </Button>
        </Col>
        <Col className="mx-3" sm={12} xl={5}>
          <div className="p-0 p-md-5 me-5 animate__animated animate__bounceIn animate__delay-2s" style={{ textAlign: "justify" }}>
            <p className="tags">&#60;About me&#62;</p>
            <p className="ps-5">
              I am a 28 year old <strong>Junior Full Stack Developer</strong> who has skills in
              creating apps and websites thanks to the course taken with Epicode
              👩🏽‍💻. I have knowledge of both the <strong>Front-End:</strong> with HTML5, CSS,
              JavaScript and frameworks such as Bootstrap or React-Redux,
              tailwind.css and vite; than with the <strong>Back-End:</strong> with Java and
              PostgreSQL. I combine my knowledge of programming with innovation,
              given by my previous experience in the world of advertising
              graphics and social media 🎨.
            </p>{" "}
            <p className="ps-5">
              As a Junior Developer I am ready to get involved to increase my {" "}
              <em>hard skills</em> in the world of programming, using my <em>soft skills:</em>
              {" "}perseverance, creativity, problem-solving and excellent
              communication and team cooperation skills.
            </p>{" "}
           
            <p className="tags">&#60; /About me&#62;</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
