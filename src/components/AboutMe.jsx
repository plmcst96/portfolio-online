import { Col, Container, Row } from "react-bootstrap";
import me from "../assets/me.png";
import 'animate.css';

export const AboutMe = () => {

  return (
    <Container fluid className="mx-5" id="about" style={{ marginTop: "7em" }}>
      <Row>
        <Col sm={12} xl={3} className="d-flex align-items-center flex-column">
          <div className="animate__animated animate__pulse">
            <p className="tags">&#60;Developer&#62;</p>
            <h1 className="fw-bold ps-5">
              Cristina <br />
              Palmisani
            </h1>
            <p className="tags">&#60; /Developer&#62;</p>
          </div>
        </Col>
        <Col sm={12} xl={3} className="d-flex justify-content-center animate__animated animate__bounceIn animate__delay-1s" style={{ marginTop: "10em" }}>
          <img src={me} alt="me" width={"460px"} height={"460px"} style={{ objectFit: "contain" }} />
        </Col>
        <Col className="mx-3" sm={12} xl={5}>
          <div className="p-5 me-5 animate__animated animate__bounceIn animate__delay-2s" style={{ textAlign: "justify" }}>
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
            <p className="ps-5">
              I love the world of programming because you never stop acquiring
              new skills and it allows you to get involved with increasingly
              complex and interactive projects.
            </p>{" "}
            <p className="ps-5">
              My goal is to combine my experience with graphics with the world
              of programming to bring an always different and never predictable
              point of view to each project.
            </p>
            <p className="tags">&#60; /About me&#62;</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
