import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

export const Contacts = () => {
  return (
    <Container
      fluid
      id="contacts"
      style={{ marginTop: "8em" }}
      className="pb-5 "
    >
      <Row>
        <Col className="d-flex flex-column align-items-start">
          <div style={{ marginLeft: "10em" }} className="mb-5">
            <h2 className="fw-bold fs-1 d-flex justify-content-center mt-4">
              <span className="tags fs-2">&#60;</span> Contacts{" "}
              <span className="tags fs-2"> / &#62;</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} style={{ flexGrow: "1" }}>
          <p className="d-flex justify-content-center mt-4">
            If you want to contact me to know more about me!
          </p>
          <p className="d-flex justify-content-center mt-4 fw-bold">
            Send me an email!
            <a
              href="mailto:cristina.palmisani@outlook.it"
              className="nav-link ms-4 fw-medium"
            >
              cristina.palmisani@outlook.it
            </a>
          </p>
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
                  style={{ fontSize: "5em" }}
                  className="me-5"
                />
              </a>
              <a href="1116031056924127232"></a>
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ color: "#be38f3", fontSize: "5em" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
