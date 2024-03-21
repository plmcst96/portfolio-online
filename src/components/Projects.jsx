/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Container, Row } from "react-bootstrap";
import women from "../assets/Screenshot 2024-03-19 alle 00.07.33.png";
import spotify from "../assets/spotify.webp";
import movie from "../assets/Screenshot 2024-03-19 alle 01.27.17.png"
import linkedin from "../assets/linkedin.webp"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Projects = () => {

  const darkMode = useSelector((state) => state.darkMode);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Adjust this value as needed based on when you want the animations to start
      const triggerPosition = 1300; // For example, trigger the animations when the user scrolls down 300px

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
    <Container id="projects" fluid style={{ padding: "0" }} className={"mb-5"}>
      <Row>
        <Col className={`d-flex flex-column align-items-start ${animationStarted ? "animate__animated animate__bounceIn" : "d-none"}`}>
          <div style={{ marginLeft: "10em" }} className="mb-5">
            <p className="tags">&#60;Work&#62;</p>
            <h2 className="fw-bold fs-1 ms-5">Projects</h2>
            <p className="tags">&#60; /Work&#62;</p>
          </div>
        </Col>
      </Row>
      <Row className="p-5">
        <Col sm={12} lg={6} xl={4} className={animationStarted ? "animate__animated animate__fadeInLeft animate__delay-1s" : "d-none"}>
          <Card
            className="bg-transparent border-3 rounded-4 mb-5"
            style={{ height: "530px" }}
          >
            <Card.Img variant="top" src={women} />
            <Card.Body className="p-4 mt-2">
              <Card.Title className="fw-bold tags mb-4">
                <a
                  href="https://github.com/plmcst96/ArtGallery"
                  className="nav-link"
                >
                  WOMEN__FEELS
                </a>
              </Card.Title>
              <Card.Text className={darkMode ? "text-white" : null}>
                Woman's Feel is more than just an online art gallery; it is a
                celebration of women in their many facets, a journey through the
                works and stories of the extraordinary artists who have
                contributed significantly to art and society.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6} xl={4} className={animationStarted ? "animate__animated animate__fadeInUp animate__delay-1s" : "d-none"}>
          <Card
            className="bg-transparent border-3 rounded-4 mb-5"
            style={{ height: "530px" }}
          >
            <Card.Img variant="top" src={spotify} className="rounded-top" />
            <Card.Body className="p-4 mt-2">
              <Card.Title className="fw-bold tags">
                <a
                  href="https://github.com/plmcst96/myspotify-react-redux"
                  className="nav-link"
                >
                  SPOTIFY CLONE
                </a>
              </Card.Title>
              <Card.Text className={darkMode ? "text-white" : null}>
                It's a clone of the famous music streaming platform. Project
                created in a day using external APIs managed with React.Js and
                Redux.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6} xl={4} className={animationStarted ? "animate__animated animate__fadeInRight animate__delay-1s" : "d-none"}>
          <Card
            className="bg-transparent border-3 rounded-4 mb-5"
            style={{ height: "530px" }}
          >
            <Card.Img variant="top" src={movie} height={"250px"} className="rounded-top" />
            <Card.Body className="p-4 mt-2">
              <Card.Title className="fw-bold tags mb-4">
                <a
                  href="https://github.com/plmcst96/movie-trailer-ract"
                  className="nav-link"
                >
                  MOVIE TRAILER
                </a>
              </Card.Title>
              <Card.Text className={darkMode ? "text-white" : null}>
                It's a platform for a video streaming. I tried to cure the UX
                and UI a web app with a wow effect. There is also the
                possibility to see the trailers at the moment. I would like to
                implement the possibility of real streaming.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6} xl={4} className={animationStarted ? "animate__animated animate__fadeInLeft animate__delay-2s" : "d-none"}>
          <Card
            className="bg-transparent border-3 rounded-4 mb-5"
            style={{ height: "530px" }}
          >
            <Card.Img variant="top" src={linkedin} className="rounded-top" style={{height: "240px"}} />
            <Card.Body className="p-4 mt-2">
              <Card.Title className="fw-bold tags mb-4">
                <a
                  href="https://github.com/plmcst96/bw3-linkedin"
                  className="nav-link"
                >
                  LINKEDIN CLONE
                </a>
              </Card.Title>
              <Card.Text className={darkMode ? "text-white" : null}>
              It's a clone of the famous search job platform. Project
                created in group using external APIs managed with React.Js and
                Redux and whit the support of bootstrap framework.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
