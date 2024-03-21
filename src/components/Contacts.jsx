import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Contacts = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Adjust this value as needed based on when you want the animations to start
      const triggerPosition = 1500; // For example, trigger the animations when the user scrolls down 300px

      if (scrollPosition > triggerPosition && !animationStarted) {
        setAnimationStarted(true);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStarted]);

  return (
    <Container
      fluid
      id="contacts"
      style={{ marginTop: "8em" }}
      className={`pb-5 ${animationStarted ? "animate__animated animate__bounceIn" : "d-none"} `}
    >
      <Row>
        <Col className="d-flex flex-column align-items-start">
          <div style={{ marginLeft: "10em" }} className="mb-5 ms-5">
            <h2 className="fw-bold fs-1 d-flex justify-content-center mt-4">
              <span className="tags fs-2">&#60;</span> Contacts
              <span className="tags fs-2">/ &#62;</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} style={{ flexGrow: "1" }}>
          <p className="d-flex justify-content-center mt-4 px-3 text-center">
            If you want to contact me to know more about me!
          </p>
          <p className="d-flex justify-content-center mt-4 fw-bold">
            Send me an email!</p>
            <a
              href="mailto:cristina.palmisani@outlook.it"
              className="nav-link ms-4 fw-medium pb-5 text-center tags"
            >
              cristina.palmisani@outlook.it
            </a>
        </Col>
        <Col sm={12} md={5} className="mt-3">
          <Row>
            <Col className="d-flex justify-content-center">
              <a
                href="https://github.com/plmcst96"
                className="nav-link d-inline"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: "4em" }}
                  className="me-5"
                />
              </a>
              <a href="1116031056924127232"></a>
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ color: "#be38f3", fontSize: "4em" }}
                className="me-5"
              />
              <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "4em", color: "blue"}}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
