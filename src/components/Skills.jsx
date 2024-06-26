import {
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
  faReact,
  faJava,
  faNode,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Adjust this value as needed based on when you want the animations to start
      const triggerPosition = 400; // For example, trigger the animations when the user scrolls down 300px

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
    <Container fluid style={{ marginTop: "10em", marginBottom: "10em" }}>
      <Row id="skills">
        <Col
          sm={12}
          xl={3}
          className={`d-flex align-items-center flex-column mb-5 ${animationStarted ? " animate__animated animate__bounceIn" : "d-none"}`}
          style={{ flexGrow: "0.5" }}
        >
          <p className="tags">&#60;Technologies&#62;</p>
          <h2 className="fw-bold fs-1" style={{ marginLeft: "4em" }}>
            Hard <br />
            Skills
          </h2>
          <p className="tags">&#60; /Technologies&#62;</p>
        </Col>
        <Col sm={12} xl={6} className={animationStarted ? "animate__animated animate__bounceIn animate__delay-1s" : "d-none"}>
          <Row className="d-flex justify-content-center">
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ color: "#B197FC", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#FFD43B", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faCss3}
                style={{ color: "#74C0FC", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faBootstrap}
                style={{ color: "#be38f3", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: "#0056d6", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="green"
                  d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338c0 0-.599.034-1.201.133c0 0 .228-.097.519-.198c2.374-.821 3.496-.986 4.939-1.727c2.71-1.388 5.408-4.413 5.957-7.555c-1.032 3.022-4.17 5.623-7.027 6.679c-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059c1.916-.736 3.747-.332 5.818-.825c2.208-.525 4.766-2.18 5.805-4.344c1.165 3.458 2.565 8.866.054 12.21m.042-13.28a9.212 9.212 0 0 1-1.065 1.89a9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292c.274-2.539-.476-5.763-1.752-9.596"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faJava}
                style={{ color: "#ff4013", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faNode}
                style={{ color: "#00a000", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 256 154"
              >
                <defs>
                  <linearGradient
                    id="logosTailwindcssIcon0"
                    x1="-2.778%"
                    x2="100%"
                    y1="32%"
                    y2="67.556%"
                  >
                    <stop offset="0%" stopColor="#2298bd" />
                    <stop offset="100%" stopColor="#0ed7b5" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosTailwindcssIcon0)"
                  d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <FontAwesomeIcon
                icon={faGitAlt}
                style={{ color: "#ff6a00", fontSize: "5em" }}
              />
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#764abc"
                  d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48m-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25a59.61 59.61 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 128 128"
              >
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                <path
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 128 128"
              >
                <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938c6.191-2.873 9.861-7.668 3.758-6.409c-13.924 2.873-14.881-1.842-14.881-1.842c14.703-21.815 20.849-49.508 15.543-56.287c-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968c-6.301-.104-11.082 1.652-14.709 4.402c0 0-44.683-18.409-42.604 23.151c.442 8.841 12.672 66.898 27.26 49.362c5.332-6.412 10.484-11.834 10.484-11.834c2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497c-3.757 4.199-2.653 4.936-10.166 6.482c-7.602 1.566-3.136 4.355-.221 5.084c3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69c.209 5.214.558 10.079 1.621 12.948c1.063 2.868 2.317 10.256 12.191 8.14c8.252-1.764 14.561-4.309 15.136-27.985" />
                <path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32c-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419c-.038-.935-.064-1.898-.093-2.919c-.021-.747-.047-1.684-.085-2.664a18.8 18.8 0 0 1-4.962 1.568c-3.079.526-6.389.356-9.84-.507c-2.435-.609-4.965-1.871-6.407-3.82c-4.203 3.681-8.212 3.182-10.396 2.453c-3.853-1.285-7.301-4.896-10.542-11.037c-2.309-4.375-4.542-10.075-6.638-16.943c-3.65-11.96-5.969-24.557-6.175-28.693C4.292 23.698 7.777 14.44 15.296 9.129C27.157.751 45.128 5.678 51.68 7.915c4.402-2.653 9.581-3.944 15.433-3.851c3.143.051 6.136.327 8.916.823c2.9-.912 8.628-2.221 15.185-2.139c12.081.144 22.092 4.852 28.949 13.615c4.894 6.252 2.474 19.381.597 26.651c-2.642 10.226-7.271 21.102-12.957 30.57c1.544.011 3.781-.174 6.961-.831c6.274-1.295 8.109 2.069 8.607 3.575c1.995 6.042-6.677 10.608-9.382 11.864c-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013l-1.216-.107l-.12 1.014l-.116.991c-.311 11.999-2.025 19.598-5.552 24.619c-3.697 5.264-8.835 6.739-13.361 7.709c-1.544.33-2.947.474-4.219.474m-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434c.028.99.054 1.927.089 2.802c.106 2.65.355 8.855 1.327 11.477c.137.371.26.747.39 1.146c1.083 3.316 1.626 4.979 6.309 3.978c3.931-.843 5.952-1.599 7.534-3.851c2.299-3.274 3.585-9.86 3.821-19.575l4.783.116l-4.75-.57l.14-1.186c.455-3.91.783-6.734 3.396-8.602c2.097-1.498 4.486-1.353 6.389-1.01c-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965l1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304c2.906-11.251 2.02-17.226 1.134-18.356c-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194l-1.8.335l-.922-.191c-2.542-.528-5.366-.82-8.393-.869c-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655l-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721c-4.656 3.298-6.777 9.76-6.305 19.207c.156 3.119 2.275 14.926 5.771 26.377c4.831 15.825 9.221 21.082 11.054 21.693c.32.108 1.15-.537 1.976-1.529a270.708 270.708 0 0 1 10.694-12.07l2.77-2.915l3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812l-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238l-1.51 1.688l-.174.196l4.388 2.025z" />
                <path
                  fill="#336791"
                  d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842c14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967c-6.301-.103-11.08 1.652-14.707 4.402c0 0-44.684-18.408-42.606 23.151c.442 8.842 12.672 66.899 27.26 49.363c5.332-6.412 10.483-11.834 10.483-11.834c2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497c-3.758 4.199-2.654 4.936-10.167 6.482c-7.602 1.566-3.136 4.355-.22 5.084c3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557c-.174 5.885-.29 9.926.871 13.082c1.16 3.156 2.316 10.256 12.192 8.14c8.252-1.768 12.528-6.351 13.124-13.995c.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938c6.19-2.871 9.861-7.667 3.758-6.408"
                />
                <path
                  fill="#fff"
                  d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185c-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 0 1 1.64-1.55a1.594 1.594 0 0 1 1.55 1.639c-.401 14.341.168 27.337 1.324 30.229c1.804 4.509 4.54 8.453 12.275 6.796c7.343-1.575 10.093-4.359 11.318-11.46c.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 0 1 1.71-1.472a1.597 1.597 0 0 1 1.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315c-1.446 8.387-5.185 12.191-13.794 14.037c-1.463.313-2.792.453-4 .454M31.321 90.466a6.71 6.71 0 0 1-2.116-.35c-5.347-1.784-10.44-10.492-15.138-25.885c-3.576-11.717-5.842-23.947-6.041-27.922c-.589-11.784 2.445-20.121 9.02-24.778c13.007-9.216 34.888-.44 35.813-.062a1.596 1.596 0 0 1-1.207 2.955c-.211-.086-21.193-8.492-32.768-.285c-5.622 3.986-8.203 11.392-7.672 22.011c.167 3.349 2.284 15.285 5.906 27.149c4.194 13.742 8.967 22.413 13.096 23.79c.648.216 2.62.873 5.439-2.517A245.272 245.272 0 0 1 45.88 73.046a1.596 1.596 0 0 1 2.304 2.208c-.048.05-4.847 5.067-10.077 11.359c-2.477 2.979-4.851 3.853-6.786 3.853m69.429-13.445a1.596 1.596 0 0 1-1.322-2.487c14.863-22.055 20.08-48.704 15.612-54.414c-5.624-7.186-13.565-10.939-23.604-11.156c-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849a1.6 1.6 0 0 1 .631-2.025c.046-.027.192-.089.429-.176l-.021.006l.021-.007c1.641-.601 7.639-2.4 15.068-2.315c11.108.118 20.284 4.401 26.534 12.388c2.957 3.779 2.964 12.485.019 23.887c-3.002 11.625-8.651 24.118-15.497 34.277c-.306.457-.81.703-1.323.703m.76 10.21c-2.538 0-4.813-.358-6.175-1.174c-1.4-.839-1.667-1.979-1.702-2.584c-.382-6.71 3.32-7.878 5.208-8.411c-.263-.398-.637-.866-1.024-1.349c-1.101-1.376-2.609-3.26-3.771-6.078c-.182-.44-.752-1.463-1.412-2.648c-3.579-6.418-11.026-19.773-6.242-26.612c2.214-3.165 6.623-4.411 13.119-3.716C97.6 28.837 88.5 10.625 66.907 10.271c-6.494-.108-11.82 1.889-15.822 5.93c-8.96 9.049-8.636 25.422-8.631 25.586a1.595 1.595 0 1 1-3.19.084c-.02-.727-.354-17.909 9.554-27.916C53.455 9.272 59.559 6.96 66.96 7.081c13.814.227 22.706 7.25 27.732 13.101c5.479 6.377 8.165 13.411 8.386 15.759c.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104c-3.639 5.201 3.406 17.834 6.414 23.229c.768 1.376 1.322 2.371 1.576 2.985c.988 2.396 2.277 4.006 3.312 5.3c.911 1.138 1.7 2.125 1.982 3.283c.131.23 1.99 2.98 13.021.703c2.765-.57 4.423-.083 4.93 1.45c.997 3.015-4.597 6.532-7.694 7.97c-2.775 1.29-7.204 2.106-11.036 2.106m-4.696-4.021c.35.353 2.101.962 5.727.806c3.224-.138 6.624-.839 8.664-1.786c2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577a6.162 6.162 0 0 1-.54-.401c-.302.119-.581.197-.78.253c-1.58.443-3.214.902-2.996 5.105m-45.562 8.915c-1.752 0-3.596-.239-5.479-.71c-1.951-.488-5.24-1.957-5.19-4.37c.057-2.707 3.994-3.519 5.476-3.824c5.354-1.103 5.703-1.545 7.376-3.67c.488-.619 1.095-1.39 1.923-2.314c1.229-1.376 2.572-2.073 3.992-2.073c.989 0 1.8.335 2.336.558c1.708.708 3.133 2.42 3.719 4.467c.529 1.847.276 3.625-.71 5.006c-3.237 4.533-7.886 6.93-13.443 6.93m-7.222-4.943c.481.372 1.445.869 2.518 1.137c1.631.408 3.213.615 4.705.615c4.546 0 8.196-1.882 10.847-5.594c.553-.774.387-1.757.239-2.274c-.31-1.083-1.08-2.068-1.873-2.397c-.43-.178-.787-.314-1.115-.314c-.176 0-.712 0-1.614 1.009a41.146 41.146 0 0 0-1.794 2.162c-2.084 2.646-3.039 3.544-9.239 4.821c-1.513.31-2.289.626-2.674.835m12.269-7.36a1.596 1.596 0 0 1-1.575-1.354a8.218 8.218 0 0 1-.08-.799c-4.064-.076-7.985-1.82-10.962-4.926c-3.764-3.927-5.477-9.368-4.699-14.927c.845-6.037.529-11.366.359-14.229c-.047-.796-.081-1.371-.079-1.769c.003-.505.013-1.844 4.489-4.113c1.592-.807 4.784-2.215 8.271-2.576c5.777-.597 9.585 1.976 10.725 7.246c3.077 14.228.244 20.521-1.825 25.117c-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354a1.595 1.595 0 0 1-1.335 1.819zM42.464 42.26l.062 1.139c.176 2.974.504 8.508-.384 14.86c-.641 4.585.759 9.06 3.843 12.276c2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646c1.991-4.424 4.47-9.931 1.615-23.132c-.565-2.615-1.936-4.128-4.189-4.627c-4.628-1.022-11.525 2.459-12.974 3.837m9.63-.677c-.08.564 1.033 2.07 2.485 2.271c1.449.203 2.689-.975 2.768-1.539c.079-.564-1.033-1.186-2.485-1.388c-1.451-.202-2.691.092-2.768.656m2.818 2.826l-.407-.028c-.9-.125-1.81-.692-2.433-1.518c-.219-.29-.576-.852-.505-1.354c.101-.736.999-1.177 2.4-1.177c.313 0 .639.023.967.069c.766.106 1.477.327 2.002.62c.91.508.977 1.075.936 1.368c-.112.813-1.405 2.02-2.96 2.02m-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082c-.096-.182-.762-.634-2.025-.81a5.823 5.823 0 0 0-.821-.059c-.812 0-1.243.183-1.345.282m43.605-1.245c.079.564-1.033 2.07-2.484 2.272c-1.45.202-2.691-.975-2.771-1.539c-.076-.564 1.036-1.187 2.486-1.388c1.45-.203 2.689.092 2.769.655m-2.819 2.56c-1.396 0-2.601-1.086-2.7-1.791c-.115-.846 1.278-1.489 2.712-1.688c.316-.044.629-.066.93-.066c1.238 0 2.058.363 2.14.949c.053.379-.238.964-.739 1.492c-.331.347-1.026.948-1.973 1.079zm.943-3.013c-.276 0-.564.021-.856.061c-1.441.201-2.301.779-2.259 1.089c.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919c.443-.465.619-.903.598-1.052c-.028-.198-.56-.49-1.613-.49m3.965 32.843a1.594 1.594 0 0 1-1.324-2.483c3.398-5.075 2.776-10.25 2.175-15.255c-.257-2.132-.521-4.337-.453-6.453c.07-2.177.347-3.973.614-5.71c.317-2.058.617-4.002.493-6.31a1.595 1.595 0 1 1 3.186-.172c.142 2.638-.197 4.838-.525 6.967c-.253 1.643-.515 3.342-.578 5.327c-.061 1.874.178 3.864.431 5.97c.64 5.322 1.365 11.354-2.691 17.411a1.596 1.596 0 0 1-1.328.708"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosIntellijIdea0"
                    x1="37.036%"
                    x2="178.13%"
                    y1="51.017%"
                    y2="41.861%"
                  >
                    <stop offset="9%" stopColor="#fc801d" />
                    <stop offset="23%" stopColor="#b07f61" />
                    <stop offset="41%" stopColor="#577db3" />
                    <stop offset="53%" stopColor="#1e7ce6" />
                    <stop offset="59%" stopColor="#087cfa" />
                  </linearGradient>
                  <linearGradient
                    id="logosIntellijIdea1"
                    x1="73.557%"
                    x2="35.575%"
                    y1="114.76%"
                    y2="1.075%"
                  >
                    <stop offset="0%" stopColor="#fe2857" />
                    <stop offset="8%" stopColor="#cb3979" />
                    <stop offset="16%" stopColor="#9e4997" />
                    <stop offset="25%" stopColor="#7557b2" />
                    <stop offset="34%" stopColor="#5362c8" />
                    <stop offset="44%" stopColor="#386cda" />
                    <stop offset="54%" stopColor="#2373e8" />
                    <stop offset="66%" stopColor="#1478f2" />
                    <stop offset="79%" stopColor="#0b7bf8" />
                    <stop offset="100%" stopColor="#087cfa" />
                  </linearGradient>
                  <linearGradient
                    id="logosIntellijIdea2"
                    x1="28.551%"
                    x2="81.801%"
                    y1="23.614%"
                    y2="129.755%"
                  >
                    <stop offset="0%" stopColor="#fe2857" />
                    <stop offset="8%" stopColor="#fe295f" />
                    <stop offset="21%" stopColor="#ff2d76" />
                    <stop offset="30%" stopColor="#ff318c" />
                    <stop offset="38%" stopColor="#ea3896" />
                    <stop offset="55%" stopColor="#b248ae" />
                    <stop offset="79%" stopColor="#5a63d6" />
                    <stop offset="100%" stopColor="#087cfa" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosIntellijIdea0)"
                  d="M40.533 180.56L2.88 150.827l22.16-41.04l33.307 11.146z"
                />
                <path
                  fill="#087cfa"
                  d="m256 68.24l-4.613 148.267L152.773 256l-53.706-34.667z"
                />
                <path
                  fill="url(#logosIntellijIdea1)"
                  d="m256 68.24l-48.8 47.6l-62.667-76.88l30.934-34.773z"
                />
                <path
                  fill="url(#logosIntellijIdea2)"
                  d="M99.067 221.333L20.64 249.68l16.427-57.52l21.28-71.227L0 101.413L37.067 0l83.786 9.893L207.2 115.84z"
                />
                <path d="M49.147 48h160v160h-160z" />
                <path
                  fill="#fff"
                  d="M69.093 177.76h60v10h-60zM99.04 78.987V68.053H69.2v10.934h8.373v37.76H69.2v10.933h29.84v-10.933h-8.347v-37.76zm28.427 49.44l.186.106a23.68 23.68 0 0 1-11.706-2.666a27.093 27.093 0 0 1-7.787-6.294l8.24-9.2a23.627 23.627 0 0 0 5.173 4.374a10.667 10.667 0 0 0 5.734 1.6a7.6 7.6 0 0 0 5.84-2.32a11.093 11.093 0 0 0 2.133-7.547V68h13.333v39.067a27.04 27.04 0 0 1-1.466 9.306a17.307 17.307 0 0 1-10.854 10.667a26.32 26.32 0 0 1-8.826 1.387"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#007acc"
                  d="M29.821 4.321L24.023 2l-12.53 12.212l-7.66-5.827l-1.654.837V22.8l1.644.827l7.65-5.827L24.023 30l5.8-2.321V4.321ZM4.65 19.192v-6.374l3.55 3.167zM16 15.985l7.082-5.3v10.639l-7.092-5.339z"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 14 14"
              >
                <path
                  fill="#e32400"
                  fillRule="evenodd"
                  d="M.316.816a.5.5 0 0 1 .5-.5h12.368a.5.5 0 0 1 .5.5v12.368a.5.5 0 0 1-.5.5H.816a.5.5 0 0 1-.5-.5zM1.37 12.63L5.391 1.37h3.217l4.022 11.26H9.71L7 5.147l-1.678 5.07h1.556l.805 2.413H1.369Z"
                  clipRule="evenodd"
                />
              </svg>
            </Col>
            <Col
              sm={6}
              md={2}
              className="text-center my-4"
              style={{ width: "30%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#ff6c37"
                  d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334c70.131 8.959 134.248-40.569 143.334-110.7"
                />
                <path
                  fill="#fff"
                  d="m174.2 82.184l-54.007 54.007l-15.23-15.23c53.111-53.11 58.358-48.503 69.236-38.777"
                />
                <path
                  fill="#ff6c37"
                  d="M120.193 137.47c-.384 0-.64-.128-.896-.384l-15.357-15.229a1.237 1.237 0 0 1 0-1.791c54.006-54.007 59.637-48.888 71.027-38.65c.256.256.384.512.384.896s-.128.64-.384.896l-54.006 53.878c-.128.256-.512.384-.768.384m-13.437-16.509l13.437 13.438l52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65"
                />
                <path
                  fill="#fff"
                  d="m135.678 151.676l-14.717-14.718l54.006-54.006c14.462 14.59-7.166 38.265-39.289 68.724"
                />
                <path
                  fill="#ff6c37"
                  d="M135.678 152.956c-.384 0-.64-.128-.895-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896c0-.383.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.792 0a15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614c-.384.256-.768.384-1.024.384m-12.925-15.998c8.19 8.319 11.646 11.646 12.925 12.926c21.5-20.476 42.36-41.464 42.489-55.926c.128-3.327-1.152-6.655-3.328-9.214z"
                />
                <path
                  fill="#fff"
                  d="m105.22 121.345l10.878 10.878c.256.256.256.512 0 .768c-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.176-.64-2.432-1.791c-.128-.64.128-1.28.512-1.664l13.054-13.054c.256-.256.64-.384.768-.128"
                />
                <path
                  fill="#ff6c37"
                  d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455c0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56c-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128m11.902-16.509l-12.542 12.542c-.256.256-.384.64-.128 1.024c.128.384.512.511.896.384l21.116-4.608z"
                />
                <path
                  fill="#fff"
                  d="M202.738 52.238c-8.19-7.935-21.372-7.679-29.306.64c-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.154 85l-14.59-14.59z"
                />
                <path
                  fill="#ff6c37"
                  d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012c0-12.158 9.854-22.012 22.012-22.012c5.63 0 11.134 2.176 15.23 6.143c.255.256.383.512.383.896s-.128.64-.384.896L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.328 2.047-7.295 3.2-11.262 3.2m0-41.336c-10.75 0-19.453 8.702-19.325 19.452c0 10.75 8.703 19.453 19.453 19.325c2.943 0 5.887-.64 8.574-2.048l-13.437-13.31c-.256-.256-.384-.512-.384-.896c0-.383.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.478-12.414-4.478"
                />
                <path
                  fill="#fff"
                  d="m203.122 52.622l-.256-.256l-18.3 18.044l14.461 14.462c1.408-.896 2.815-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178"
                />
                <path
                  fill="#ff6c37"
                  d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.59-14.59c-.255-.256-.383-.512-.383-.896c0-.383.128-.64.384-.895l18.172-18.173a1.237 1.237 0 0 1 1.792 0l.384.256c8.575 8.574 8.575 22.396.128 31.098c-1.28 1.28-2.687 2.432-4.223 3.328c-.384.128-.64.256-.768.256m-12.798-15.87l12.926 12.926c1.024-.64 2.048-1.536 2.815-2.303c7.295-7.295 7.679-19.197.64-26.876z"
                />
                <path
                  fill="#fff"
                  d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247l8.062 8.063l51.063-44.792c3.328-2.816 3.583-7.807.768-11.134c-.256-.128-.384-.256-.512-.384"
                />
                <path
                  fill="#ff6c37"
                  d="M124.928 142.078c-.384 0-.64-.128-.896-.384l-8.062-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0a9.115 9.115 0 0 1 0 12.926l-.384.384l-51.063 44.792c-.128.256-.384.384-.768.384m-6.143-9.343l6.271 6.271l50.167-44.024c2.816-2.304 3.072-6.527.768-9.342c-2.303-2.816-6.527-3.072-9.342-.768c-.128.128-.256.256-.512.384z"
                />
                <path
                  fill="#fff"
                  d="M80.008 187.637c-.511.256-.767.768-.64 1.28l2.176 9.214c.512 1.28-.256 2.816-1.664 3.2c-1.023.384-2.175 0-2.815-.768l-14.078-13.95l45.944-45.943l15.87.256l10.75 10.75c-2.56 2.175-18.045 17.149-55.543 35.961"
                />
                <path
                  fill="#ff6c37"
                  d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.895c0-.384.128-.64.384-.896l45.943-45.944c.256-.256.64-.384.896-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.896.767c-13.565 11.902-31.994 23.804-54.902 35.194l2.176 9.087c.384 1.663-.384 3.455-1.92 4.35c-.768.385-1.408.513-2.047.513m-14.078-15.996l13.182 13.053c.384.64 1.152.896 1.791.512c.64-.384.896-1.152.512-1.792l-2.175-9.214c-.256-1.152.256-2.176 1.28-2.687c22.651-11.39 40.952-23.164 54.39-34.81l-9.47-9.47l-14.718-.256z"
                />
                <path
                  fill="#fff"
                  d="m52.11 197.62l11.005-11.006l16.382 16.38l-26.108-1.791c-1.152-.128-1.92-1.152-1.791-2.304c0-.512.128-1.024.511-1.28"
                />
                <path
                  fill="#ff6c37"
                  d="m79.497 204.146l-26.236-1.791c-1.92-.128-3.2-1.792-3.071-3.712c.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.791 0l16.381 16.38c.384.385.512.897.256 1.408c-.256.512-.64.768-1.151.768m-16.382-15.74l-10.11 10.11c-.384.255-.384.895 0 1.151c.128.128.256.256.512.256l22.652 1.536zm41.337-41.849c-.768 0-1.28-.64-1.28-1.28c0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28c-.128.384-.512.768-1.024.896l-20.476 4.35zm12.414-11.902l-8.447 8.446l13.822-2.943z"
                />
                <path
                  fill="#fff"
                  d="m124.8 140.926l-14.077 3.071c-1.024.256-2.048-.384-2.304-1.408c-.128-.64 0-1.28.512-1.791l7.807-7.807z"
                />
                <path
                  fill="#ff6c37"
                  d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.384-1.663.896-2.303l7.807-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28c-.128.384-.512.768-1.024.896l-14.077 3.071zm6.399-10.622l-6.911 6.91c-.256.257-.256.513-.128.768c.128.256.384.384.768.384l11.774-2.56zm86.384-69.748c-.256-.767-1.152-1.151-1.92-.895c-.767.256-1.151 1.151-.895 1.92c0 .127.128.255.128.383c.768 1.536.512 3.456-.512 4.863c-.512.64-.384 1.536.128 2.048c.64.512 1.535.384 2.047-.256c1.92-2.432 2.304-5.503 1.024-8.063"
                />
              </svg>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
