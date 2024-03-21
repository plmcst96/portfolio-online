import { Container, Row } from "react-bootstrap";
import Progress from "./Progress";
import Typewriter from "./TypeWriter";

// eslint-disable-next-line react/prop-types
export const LandingPage = ({ onTypewriterComplete }) => {
  return (
    <Container fluid style={{ padding: "0" }}>
      <Row style={{ height: "85vh", width: "100%"}}>
        <Typewriter onComplete={onTypewriterComplete} />
      </Row>
      <Progress />
    </Container>
  );
};
