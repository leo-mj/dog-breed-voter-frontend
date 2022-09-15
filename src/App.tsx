import { useState } from "react";
import { VotingTool } from "./components/VotingTool";
import { TopTen } from "./components/TopTen";
import { Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
  const [votesRegistered, setVotesRegistered] = useState<number>(0);
  return (
    <Container fluid>
      <Row className="home-page align-items-center">
        {/* <Row id="voting-tool"> */}
        <VotingTool
          votesRegistered={votesRegistered}
          setVotesRegistered={setVotesRegistered}
        />
        <Col>
          <TopTen />
        </Col>
        {/* </Row> */}
      </Row>
      <footer>
        <a href="https://dog.ceo/dog-api/">Thanks to Dog API </a>
      </footer>
    </Container>
  );
}

export default App;
