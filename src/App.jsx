import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import "./components/style.css";
import { LandingPage } from "./components/LandingPage";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { useSelector } from "react-redux";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import 'animate.css';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    if (showNavbar) {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }
  }, [showNavbar]);

  const handleTypewriterComplete = () => {
    setShowNavbar(true);
  };

  return (
    <Container
      fluid
      className={
        !showNavbar
          ? "d-flex flex-column justify-content-between h-100"
          : null
      }
      style={{padding: "0", overflowX: "hidden"}}
    >
      {!showNavbar && (
        <LandingPage onTypewriterComplete={handleTypewriterComplete} />
      )}
      {showNavbar && (
        <main className={darkMode ? "sfondo" : null}>
          <NavBar />
          <AboutMe />
          <Skills/>
          <Projects/>
          <Contacts/>
        </main>
      )}
    </Container>
  );
};

export default App;
