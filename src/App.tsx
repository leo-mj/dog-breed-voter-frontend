import { useState } from "react";
import { VotingTool } from "./components/VotingTool";
import { TopTen } from "./components/TopTen";

function App(): JSX.Element {
  const [votesRegistered, setVotesRegistered] = useState<number>(0);
  return (
    <>
      <div className="home-page">
        <div id="voting-tool">
          <VotingTool
            votesRegistered={votesRegistered}
            setVotesRegistered={setVotesRegistered}
          />
        </div>
        <div id="top-ten">
          <TopTen votesRegistered={votesRegistered} />
        </div>
      </div>
      <footer>
        <a href="https://dog.ceo/dog-api/">Thanks to Dog API </a>
      </footer>
    </>
  );
}

export default App;
