import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo2.png";
import logo2 from "../assets/logo.png";
import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";



export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      expand="lg"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
      className={
        darkMode
          ? scrolled
            ? "sfondo2 scrolled"
            : "sfondo2"
          : scrolled
          ? "bg-light scrolled"
          : null
      }
    >
      <Container fluid className="d-flex justify-content-between px-5">
        <Navbar.Brand href="#home">
          <img
            src={darkMode ? logo : logo2}
            alt="logo"
            width={"210px"}
            height={"70px"}
            className="d-none d-md-block"
          />
        
        </Navbar.Brand>
     
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
          className={darkMode ? "tnt text-white" : "tnt"}
        >
          Menù
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="fw-medium" style={{ flexGrow: "0.5" }}>
            <Nav.Link
              href="#about"
              style={{ flexGrow: "0.5" }}
              className={darkMode ? "testo" : null}
            >
              &#60;About Me&#62;
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{ flexGrow: "0.5" }}
              className={darkMode ? "testo" : null}
            >
              &#60;Skills&#62;
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{ flexGrow: "0.5" }}
              className={darkMode ? "testo" : null}
            >
              &#60;Projects&#62;
            </Nav.Link>
            <Nav.Link
              href="#contacts"
              style={{ flexGrow: "0.5" }}
              className={darkMode ? "testo" : null}
            >
              &#60;Contacts&#62;
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};
